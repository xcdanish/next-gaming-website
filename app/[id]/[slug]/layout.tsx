import { Metadata } from "next";
import { games } from "@lib/games-data";

interface Props {
  params: Promise<{ id: string; slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id, slug } = await params;
  const game = games.find((g) => g.id === id && g.slug === slug);

  if (!game) {
    return {
      title: "Game Not Found | Red Devil Studio",
    };
  }

  return {
    title: game.title,
    description: game.description,
    keywords: [game.title, game.genre, "Red Devil Studio", "Indie Game"],
    openGraph: {
      title: `${game.title} | Red Devil Studio`,
      description: game.description,
      images: game.images?.[0] ? [{ url: game.images[0] }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${game.title} | Red Devil Studio`,
      description: game.description,
      images: game.images?.[0] ? [game.images[0]] : [],
    },
  };
}

export default function GameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
