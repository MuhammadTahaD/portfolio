import type { Metadata } from "next";
import { articles } from "@/data/articles";

export const metadata: Metadata = { title: "Writing", description: "Technical articles and development notes by Muhammad Taha Malik.", alternates: { canonical: "/writing/" } };

export default function WritingPage() {
  const publishedArticles = articles.filter((article) => article.published);
  return <section className="page-wrap archive-page writing-page"><div className="archive-heading"><span className="section-index">NOTES / IDEAS / LEARNINGS</span><h1>Thinking out<br /><em>loud.</em></h1><p>A place for technical notes, ideas, and lessons from the build process.</p></div>{publishedArticles.length ? <div className="article-list">{publishedArticles.map((article) => <details key={article.slug}><summary><span>{article.publishedAt}</span><h2>{article.title}<i aria-hidden="true">＋</i></h2><p>{article.excerpt}</p></summary><div className="article-body">{article.content.map((paragraph, index) => <p key={`${article.slug}-${index}`}>{paragraph}</p>)}</div></details>)}</div> : <div className="writing-empty"><span>FIELD NOTES / 001</span><h2>Nothing published just yet.</h2><p>I’m collecting ideas and notes as I build. Check back soon.</p><span className="writing-mark">T<span>·</span></span></div>}</section>;
}
