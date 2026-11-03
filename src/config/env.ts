import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  PORT: z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val, 10) : 4000))
    .pipe(z.number().int().min(1).max(65535)),
});

export const env = envSchema.parse({
  PORT: process.env.PORT,
});
