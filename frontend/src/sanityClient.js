import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "6g2l3qkq",
  dataset: "production",
  token:
    "skjtTvBRbrR9jzEb7nfU4mAxtGyJSxOahvCPsjUsFzbA6hspjE6qugLbbZUaV26uHak0zQWRuFuo0SWYVTnPGwKRQfUqVD4knITdBNkS0zphrPQyg0mw9aMTykS1w9zi14FjsNIjfDfTd9U90CojzH73PPs7BVWxcSdR9afstvF3VQ6wYNfY",
  apiVersion: "2023-01-01",
  useCdn: true,
});
