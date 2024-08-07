import createOpenApiClient from "https://esm.sh/openapi-fetch@0.10.2";
import type { paths } from "./specs/machines.ts";

const FLY_API_TOKEN = Deno.env.get("FLY_API_TOKEN");

export function createClient({
  baseUrl = "https://api.machines.dev/v1",
  token = FLY_API_TOKEN,
} = {}) {
  return createOpenApiClient<paths>({
    baseUrl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
