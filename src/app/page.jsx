import Link from "next/link";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "./libs/api-libs";


const Page = async () => {
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);
  // const topAnime = await response.json();
  const topAnime = await getAnimeResponse("top/anime", "limit=8");

  return (
    <>
      <section className="bg-slate-900 pb-10">
        <Header title="Top Anime" linkTitle="See all" linkHref="/popular" />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Page;
