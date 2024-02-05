import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "/",
    },
    {
      url: "/zaufali",
    },
    {
      url: "/o_mnie",
    },
    {
      url: "/kontakt",
    },
  ];
}