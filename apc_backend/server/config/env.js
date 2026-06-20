import dotenv from "dotenv";
import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const configDir = dirname(fileURLToPath(import.meta.url));
const candidates = [
  resolve(configDir, "../.env"),
  resolve(configDir, "../../.env"),
];
const envPath = candidates.find(existsSync);

dotenv.config({
  ...(envPath ? { path: envPath } : {}),
  quiet: true,
});

export const requireEnv = (name) => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
};
