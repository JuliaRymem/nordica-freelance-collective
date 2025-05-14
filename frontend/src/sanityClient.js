import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "6g2l3qkq",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
  token: "sk0OFA4zatbU3jvFTPf1hb82h1uOJhOS2Y3EQ0PyciSg0B7zabVQz5p2nTYHAeXmAANaa0mmuaaRyx2By689ASl91tRTQlZIinM8kzhJegysUFbYxYhGXXH15UXiX0M0lCP91EVyMkxHOe4TvLFldUGsfjEyMhXmP2MJSFAsjlOP1n3VJ092,"
});
