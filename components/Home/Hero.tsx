'use client'
import Bordered from '@/layouts/Bordered'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Navbar from './Navbar/Navbar'
const titles = [
    'CTF Player',
    'Graphic Designer',
    'Web Developer',
    'Game Developer',
    'UI/UX Designer',
]

export default function Hero() {
    const [titleIndex, setTitleIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length)
        }, 2000)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length)
        }, 2000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <main className="ml-[calc(-50vw+50%+10px)] mt-[calc(-100px)] flex min-h-screen w-[calc(100vw-20px)] flex-col items-center justify-between p-4">
            <Navbar pageTitle={'Folio'} />
            <div className="h-auto w-full overflow-hidden">
                <Bordered>
                    <div className="h-[300px]">
                        <div className="flex h-full w-full items-center justify-center">
                            <h1 className="font-vaxen absolute text-[82px] text-[#916DCF] sm:text-[124px] md:text-[150px] xl:text-[240px] 2xl:text-[300px]">
                                2024
                            </h1>
                            <p className="font-kleemax fg-accent z-[2] text-[20px] sm:text-[32px] md:text-[40px] xl:text-[64px] 2xl:text-[76px]">
                                DECENTPARADOX
                            </p>
                        </div>
                    </div>
                </Bordered>
                <div className="flex w-full items-center justify-between py-3">
                    <div className="flex w-[35%] justify-start hover:underline">
                      <p>  <Link href="/blog">BLOG </Link>↗</p>
                    </div>
                    <div className="flex w-[30%] justify-center text-center">
                        {titles[titleIndex]}
                    </div>
                    <div className="flex w-[35%] justify-end hover:underline">
                       <p> ↖ <Link href="/projects"> PROJECTS</Link></p>
                    </div>
                </div>
            </div>
            <div className="flex h-auto w-full items-center justify-between">
                <div className="w-[30%]">
                    <Image
                        src="./static/images/KeepScrolling.svg"
                        width={0}
                        height={0}
                        style={{ width: 'auto', height: '32px' }}
                        alt="keepScrolling"
                    />
                </div>
                <div className="flex w-[40%] items-center justify-center gap-[96px]">
                    <div className="hidden sm:block">
                        <Image
                            src="./static/images/Restricted.svg"
                            width={0}
                            height={0}
                            style={{ width: 'auto', height: '32px' }}
                            alt="keepScrolling"
                        />
                    </div>

                    <Image
                        src="./static/images/logoAccent.svg"
                        width={0}
                        height={0}
                        style={{ width: 'auto', height: '32px' }}
                        alt="keepScrolling"
                    />
                    <div className="hidden sm:block">
                        <Image
                            src="./static/images/International.svg"
                            width={0}
                            height={0}
                            style={{ width: 'auto', height: '32px' }}
                            alt="keepScrolling"
                        />
                    </div>
                </div>
                <div className="flex w-[30%] justify-end">
                    <Image
                        src="./static/images/BarcodeIG.svg"
                        width={0}
                        height={0}
                        style={{ width: 'auto', height: '32px' }}
                        alt="keepScrolling"
                    />
                </div>
            </div>
        </main>
    )
}
