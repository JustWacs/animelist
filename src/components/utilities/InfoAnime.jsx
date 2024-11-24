import { getAnimeResponse } from "@/app/libs/api-libs";

const InfoAnime = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  return (
  <div className="flex gap-10 bg-slate-800 py-4 px-10 rounded-md mt-5">
    <div className="flex-col items-center justify-center place-items-center">
      <h2 className="text-2xl font-bold text-white mt-5">Ranked</h2>
      <h2 className="text-2xl font-bold text-sky-500 mt-5">{anime.data.rank}</h2>
    </div>

    <div className="flex-col items-center justify-center place-items-center">
      <h2 className="text-2xl font-bold text-white mt-5">Score</h2>
      <h2 className="text-2xl font-bold text-sky-500 mt-5">{anime.data.score}</h2>
    </div>

    <div className="flex-col items-center justify-center place-items-center">
      <h2 className="text-2xl font-bold text-white mt-5">Users</h2>
      <h2 className="text-2xl font-bold text-sky-500 mt-5">{anime.data.scored_by.toLocaleString()}</h2>
    </div>

    <div className="flex-col items-center justify-center place-items-center">
      <h3 className="text-xl font-bold text-white mt-5">Status</h3>
      <h2 className="text-2xl font-bold text-sky-500 mt-5">{anime.data.status}</h2>
    </div>
  </div>
  )
};

export default InfoAnime;
