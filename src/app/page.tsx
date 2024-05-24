"use client";
import NewsCardComponent from "@/components/CardComponents/NewsCardComponent";
import RelatedNewsComponent from "@/components/CardComponents/RelatedNewsComponent";
import { useGetNewsQuery } from "@/redux/service/i-finder";

export default function Home() {
  const { data, error, isLoading } = useGetNewsQuery({
    page: 1,
    pageSize: 5,
  });
  const news = data?.results;
  console.log(news);
  return (
    <main>
      <section className="w-[90%] mx-auto flex justify-around">
        <div>
          {news?.map((item: NewsType) => {
            const hitsResult = item.hits;
            return hitsResult?.map((hit: HitType) => {
              const docResult = hit.document;
              return (
                <NewsCardComponent
                  key={docResult.id}
                  author={docResult.author}
                  description={docResult.description}
                  domain={docResult.domain}
                  id={docResult.id}
                  keyword={docResult.keyword}
                  logo={docResult.logo}
                  thumbnail={docResult.thumbnail}
                  title={docResult.title}
                />
              );
            });
          })}
        </div>
        <div>{/* news content */}</div>
      </section>
    </main>
  );
}
