import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-slate-800 text-white p-4 items-center">
      <Link href="/" className="text-2xl uppercase font-bold justify-center hover:text-sky-500 transition-all">Anime list nich</Link>
      <ul className="flex px-5 py-4 md:py-0 gap-5 items-center">
        <input className="px-2 p-2 rounded-lg" placeholder="Search Anime . . ."></input>
        <Link href="/search">Search</Link>
      </ul>
    </div>
  );
}
export default Navbar