import { DrizzleAdapter } from "@auth/drizzle-adapter";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import { type Adapter } from "next-auth/adapters";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import { db } from "@/server/db";
import {
  type UserRole,
  accounts,
  sessions,
  users,
  verificationTokens,
} from "./schema/auth";
import { signInSchema } from "@/lib/validations/auth-schemas";
import { eq } from "drizzle-orm";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      role: UserRole;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    role: UserRole;
  }
}

/**
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }) as Adapter,
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const { email, password } = await signInSchema.parseAsync(credentials);

        const pwHash = bcrypt.hashSync(password, 10);

        const userArr = await db
          .select({
            id: users.id,
            role: users.role,
            name: users.name,
            email: users.email,
            image: users.image,
            hashedPassword: users.hashedPassword,
          })
          .from(users)
          .where(eq(users.email, email));

        const user = userArr[0];

        if (!user) {
          throw new Error("User not found.");
        }

        const isPasswordMatch = await bcrypt.compare(
          pwHash,
          user.hashedPassword ?? "",
        );
        if (!isPasswordMatch) return null;

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          image: user.image,
        };
      },
    }),
  ],
};

/**
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
