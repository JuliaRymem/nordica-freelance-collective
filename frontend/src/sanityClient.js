import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "6g2l3qkq",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});
