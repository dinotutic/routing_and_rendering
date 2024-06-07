import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function InterceptedImagePage({ params }) {
  console.log(params);
  const newsItemSlug = params.newsSlug;

  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.id === newsItemSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop">
        <dialog className="modal" open>
          <div className="fullscreen-image">
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
          </div>
        </dialog>
      </div>
    </>
  );
}
