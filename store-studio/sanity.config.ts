import { schemas } from "./schemas";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

export default defineConfig({
  name: "default",
  title: "AWSTORE",
  projectId: "bn94oesu",
  dataset: "production",

  plugins: [
    structureTool(),
    ...(process.env.NODE_ENV !== "production" ? [visionTool()] : []),
  ],

  schema: {
    types: schemas,
  },
});
