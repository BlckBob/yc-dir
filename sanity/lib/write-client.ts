import "server-only";

// ("use server-only");

import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, token } from "../env";

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
});

if (!writeClient.config().token) {
  throw new Error(
    "The SANITY_WRITE_TOKEN environment variable is required to connect to the Sanity Write API",
  );
}
