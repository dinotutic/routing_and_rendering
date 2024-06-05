import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

export default function LatestNewsPage({ params }) {
  const latestNews = getLatestNews();
  return (
    <>
      <h2>LatestNews</h2>
      <NewsList news={latestNews} />
    </>
  );
}
