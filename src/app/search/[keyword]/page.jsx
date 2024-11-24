import Link from "next/link";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "@/app/libs/api-libs";

const Page = async ({ params }) => {
  const keyword = params.keyword;
  const decotedKeyword = decodeURIComponent(keyword); 

  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decotedKeyword}`);
  // const searchAnime = await response.json();
  const searchAnime = await getAnimeResponse("anime", `q=${decotedKeyword}`);

  return (
    <>
      <section className="bg-slate-900">
        <Header title={`Search Anime for : ${decotedKeyword}`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
