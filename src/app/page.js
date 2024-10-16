import Link from "next/link";
import AnimeList from "@/components/AnimeList";

const Home = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);
  const anime = await response.json();

  return (
    <div className="bg-slate-900">
      <div className="flex justify-between p-5">
        <h1 className="text-2xl font-bold text-white">Populer</h1>
        <Link href={"/popular"} className="text-white underline underline-offset-8 hover:text-sky-500 transition-all">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-5">
        {anime.data.map((data) => {
          return (
            <div key={data.mal_id}>
              <AnimeList title={data.title} images={data.images.webp.image_url} id={data.mal_id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
