import React from 'react'
import { Skeleton } from '../shadcn/skeleton'
import { useLanyard } from 'react-use-lanyard'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
/**
 * Home
 *
 * This component renders the home page of the website.
 *
 * It contains a short about section, a list of projects, and a divider.
 *
 * @returns {JSX.Element} The home page component.
 */
type ProjectProp = {
    name: string
    imageSrc: string
    link: string
    desc: string
    year: string
}
function ProjectItem({ name, imageSrc, link, desc, year }: ProjectProp) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link href={`/projects/${link}`}>
                <div className="flex h-28 w-full justify-between border-t-2 border-primary pt-6">
                    <div className="relative flex flex-[4] overflow-hidden md:w-[300px]">
                        <div
                            className={`absolute left-0 top-0 mr-4 h-full w-32 overflow-hidden transition-all duration-300 ease-in-out ${
                                isHovered ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                            }`}
                        >
                            <Image
                                src={`/static/images/${imageSrc}`}
                                alt={`${name}`}
                                width={64}
                                height={64}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div
                            className={`transition-all duration-300 ease-in-out ${
                                isHovered ? 'ml-32' : 'ml-0'
                            }`}
                        >
                            <h2 className="text-lg font-semibold">{name}</h2>
                        </div>
                    </div>
                    <div className="hidden flex-[2] md:block">
                        <p className="text-sm text-muted-foreground">{desc}</p>
                        <p className="text-sm text-muted-foreground">/{year}</p>
                    </div>
                    <div className="flex-[0.5] text-right">
                        <p className="text-xl">&#8599;</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
const Home = () => {
    return (
        <div className="w-100 relative ml-[calc(-50vw+50%+10px)] w-[calc(100vw-20px)] overflow-x-hidden px-[16px] pt-[2em]">
            <section className="w-100 my-0 mt-16">
                <div className="ml-auto flex w-full gap-[10rem]">
                    <div className="about-col flex flex-col gap-4 text-justify">
                        <p className="opacity-75">(about me)</p>
                        <p>
                            Hey, I'm Sasank Reddy, also known as "DecentParadox." I'm currently
                            pursuing a degree in Computer Science at Amrita School of Engineering.
                            I'm a creative designer and developer, and I occasionally participate in
                            CTFs. I also enjoy creating challenges for CTFs.
                        </p>
                        <p>
                            I am a student and as such, education and the process of acquiring
                            knowledge is something I am very much interested in. My objective is to
                            be a generalist. thinker, thus I am developing my problem-solving
                            abilities on a daily basis in such fields as blockchain, application
                            development, artificial intelligence and networking. I don&apos;t stick
                            to a particular field; I am prepared in order to change and accept new
                            tasks. Thus, as much as I do not have a sophisticated mission statement,
                            that, the desire to acquire knowledge and be proficient in the acquired
                            knowledge motivates me
                        </p>
                    </div>
                </div>
            </section>

            <div className="w-100 my-16">
                <div className="w-100 ml-auto">
                    <p className="pb-4 opacity-75">(Projects)</p>
                    <ProjectItem
                        name="Kalser"
                        imageSrc="kalser.png"
                        link="Kalser"
                        desc="TUI tool to rice your Linux"
                        year="2023"
                    />
                    <ProjectItem
                        name="PiratedPixels"
                        imageSrc="piratedPixels.png"
                        link="piratedpixels"
                        desc="CTF platform on TUI"
                        year="2024"
                    />
                    <ProjectItem
                        name="Orca"
                        imageSrc="orca.png"
                        link="orca"
                        desc="Astro integration for Graphic Designers"
                        year="2024"
                    />
                    <ProjectItem
                        name="bi0sMeetups"
                        imageSrc="bi0s.png"
                        link="bi0smeetups"
                        desc="Meetups website for India's #1 CTF"
                        year="2024"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
