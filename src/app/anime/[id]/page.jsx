import { getAnimeResponse } from "@/app/libs/api-libs";
import InfoAnime from "@/components/utilities/InfoAnime";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  console.log(anime);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-900 m-10">
      <div className="flex items-center w-full">
        <Image src={anime.data.images.webp.image_url} width={220} height={220} className="rounded-lg mb-2 hover:text-sky-500" />
        <div className="flex flex-col pl-5">
          <h1 className="text-4xl font-bold text-white">{anime.data.title}</h1>
          <h1 className="text-4xl font-bold text-slate-400">{anime.data.title_english}</h1>
          <InfoAnime params={{ id: id }} />
        </div>
      </div>
      <div className="pt-10">
        <h2 className="text-2xl font-bold text-white">Synopsis</h2>
        <h3 className="text-xl text-white mt-5">{anime.data.synopsis}</h3>
      </div>
    </div>
  );
};

export default Page;
