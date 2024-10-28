import Link from "next/link";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Home = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);
  const topAnime = await response.json();

  return (
    <>
      <section className="bg-slate-900">
        <Header title="Top Anime" linkTitle="See all" linkHref="/top/anime" />
        <AnimeList api={topAnime} />
      </section>

      <section className="bg-slate-900">
        <Header title="New Anime" linkTitle="See all" linkHref="/new/anime" />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Home;
