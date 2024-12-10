import Card from 'src/components/Card'
import projectsData from 'src/data/projectsData'
import { genPageMetadata } from 'src/app/seo'
import Navbar from 'src/components/Home/Navbar/Navbar'
import Footer from 'src/components/Home/Footer'
export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
    return (
        <div className="font-krypton m-auto w-[calc(100%-64px)] divide-accent-foreground py-4 text-foreground dark:divide-accent">
        <Navbar pageTitle="Projects" />
            <div className="font-krypton divide-y divide-accent-foreground dark:divide-accent">
                <div className="space-y-2 py-8 md:space-y-5">
                    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-foreground sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                        Projects
                    </h1>
                    <p className="text text-foreground/50">
                        Personal projects and projects that i have worked on
                    </p>
                </div>
                <div className="py-12">
                    <div className="-m-4 flex flex-wrap">
                        {projectsData.map((d) => (
                            <Card
                                key={d.title}
                                title={d.title}
                                description={d.description}
                                imgSrc={d.imgSrc}
                                href={d.href}
                                tags={d.tags}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
