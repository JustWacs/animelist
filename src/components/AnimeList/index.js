import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-5">
      {api.data.map((anime) => {
        return (
          <div className="bg-slate-700 rounded-lg p-4 text-center h-full">
            <Link href={`/${anime.mal_id}`} className="flex-col cursor-pointer h-full">
              <Image src={anime.images.webp.image_url} width={220} height={220} className="rounded-lg mb-2 mx-auto" />
              <h1 className="text-white font-semibold text-xs md:text-xl p-2 align-middle">{anime.title}</h1>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AnimeList;
