import { type Config } from "drizzle-kit";

import { env } from "@/env";

export default {
  schema: "./src/server/schema",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["accessible-shop_*"],
} satisfies Config;
