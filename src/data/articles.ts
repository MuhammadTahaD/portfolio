export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  published: boolean;
  content: string[];
};

// Add articles here. Only entries marked published appear on the writing page.
export const articles: Article[] = [];
