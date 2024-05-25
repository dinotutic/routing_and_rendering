import { getNewsForYear } from "@/lib/news";
import NewsList from "@/components/news-list";
export default function FilteredNewsPage({ params }) {
  const newsYear = params.yearSlug;
  const news = getNewsForYear(newsYear);
  return <NewsList news={news} />;
}
