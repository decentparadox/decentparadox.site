import Link from 'src/components/Link'

export default function NotFound() {
    return (
        <div className="font-krypton flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
            <div className="space-x-2 pb-8 pt-6 md:space-y-5">
                <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-foreground md:border-r-2 md:px-6 md:text-8xl md:leading-14">
                    404
                </h1>
            </div>
            <div className="max-w-md">
                <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
                    Sorry we couldn't find this page.
                </p>
                <p className="mb-8">you can find plenty of other things on my homepage.</p>
                <Link
                    href="/"
                    className="focus:shadow-outline-blue inline rounded-lg border border-transparent bg-accent px-4 py-2 text-sm font-medium leading-5 text-[#1d1d1d] shadow transition-colors duration-150 hover:bg-blue-700 focus:outline-none dark:hover:bg-blue-500"
                >
                    Back to homepage
                </Link>
            </div>
        </div>
    )
}
