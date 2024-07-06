import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {},

  client: {
    NEXT_PUBLIC_BASE_URL: z.string().default("http://localhost:3000"),
  },

  runtimeEnv: process.env as Record<string, string>,
});
