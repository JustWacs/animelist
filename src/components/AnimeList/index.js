import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ title, images, id }) => {
  return (
    <div className="bg-slate-700 rounded-lg p-4 text-center h-full">
      <Link href={`/${id}`} className="flex-col cursor-pointer h-full">
        <Image src={images} width={220} height={220} className="rounded-lg mb-2 mx-auto" />
        <h1 className="text-white font-semibold text-xs md:text-xl p-2 align-middle">{title}</h1>
      </Link>
    </div>
  );
};

export default AnimeList;
