import { MetadataRoute } from "next";
import { games } from "@lib/games-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://reddevilstudio.com";

  // Base routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
  ];

  // Dynamic game routes
  const gameRoutes = games.map((game) => ({
    url: `${baseUrl}/${game.id}/${game.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...routes, ...gameRoutes];
}
