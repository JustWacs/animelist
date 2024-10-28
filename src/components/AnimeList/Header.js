import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
    return (
        <div className="flex justify-between p-5">
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <Link href={linkHref} className="text-white underline underline-offset-8 hover:text-sky-500 transition-all">
          {linkTitle}
        </Link>
      </div>
    );
}

export default Header