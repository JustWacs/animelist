import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-slate-800 text-white p-4 items-center">
      <Link href="/" className="text-2xl uppercase font-bold justify-center transition-all">
        Anime list nich
      </Link>
      <InputSearch />
    </div>
  );
};
export default Navbar;
