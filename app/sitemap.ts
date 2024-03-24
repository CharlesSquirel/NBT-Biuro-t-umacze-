import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://nbt.lublin.pl",
    },
    {
      url: "https://nbt.lublin.pl/zaufali",
    },
    {
      url: "https://nbt.lublin.pl/o_mnie",
    },
    {
      url: "https://nbt.lublin.pl/kontakt",
    },
  ];
}
