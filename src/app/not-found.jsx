import Link from "next/link"

const Page = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen">
            <h1 className="text-4xl font-bold text-white">404</h1>
            <p className="text-2xl text-white">Page Not Found</p>
            <Link href="/" className="mt-4 text-white underline underline-offset-8 hover:text-sky-500 transition-all">Back to Home</Link>
        </div>
    )
}
export default Page