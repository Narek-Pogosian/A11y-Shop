"use server";

import { createSafeActionClient } from "next-safe-action";
import { getServerAuthSession } from "../auth";

export const action = createSafeActionClient();

export const protectedAction = createSafeActionClient({
  async middleware() {
    const session = await getServerAuthSession();

    if (!session?.user.id) {
      throw new Error("Unauthorized");
    }

    return { userId: session.user.id };
  },
});

export const adminAction = createSafeActionClient({
  async middleware() {
    const session = await getServerAuthSession();

    if (!session?.user.id || session?.user.role !== "admin") {
      throw new Error("Unauthorized");
    }

    return { userId: session.user.id };
  },
});
