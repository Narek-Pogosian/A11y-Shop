import { type Config } from "drizzle-kit";

import { env } from "@/env";

export default {
  schema: "./src/server/schema",
  driver: "pg",
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
  tablesFilter: ["accessible-shop_*"],
} satisfies Config;
