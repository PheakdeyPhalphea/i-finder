"use client";
import { useGetNewsQuery } from "@/redux/service/i-finder";

export default function Home() {
  const { data, error, isLoading } = useGetNewsQuery({
    page: 1,
    pageSize: 5,
  });
  const news = data?.results;
  return (
    <main>
      <section className="w-[90%] mx-auto flex justify-around">
      
      </section>
    </main>
  );
}
