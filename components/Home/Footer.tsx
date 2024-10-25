'use client'
import React from 'react'
import Bordered from '@/layouts/Bordered'
import ContactForm from './ContactForm'
import Link from 'next/link'
import { Dices, Shuffle } from 'lucide-react'
const Home = () => {
    return (
        <section className="ml-[calc(-50vw+50%+10px)] flex w-[calc(100vw-20px)] flex-col gap-16 p-4 px-[16px] pt-[2em]">
            <div className="w-100 py-4 opacity-50">
                <div className="w-100 mx-0 my-[0.75em] h-[2px] bg-foreground"></div>
            </div>
            <ContactForm />
            <div className="w-full">
                <Bordered>
                    <div className="h-[300px]">
                        <div className="flex h-full w-full items-center justify-center">
                            <h1 className="font-vaxen absolute text-[64px] sm:text-[124px] md:text-[150px] xl:text-[240px] 2xl:text-[300px]">
                                DDOX
                            </h1>
                            <p className="font-kleemax fg-accent z-[2] text-[16px] text-accent sm:text-[32px] md:text-[40px] xl:text-[64px] 2xl:text-[76px]">
                                SASANK REDDY
                            </p>
                        </div>
                    </div>
                </Bordered>
            </div>
            <div className="flex w-full flex-row-reverse justify-between">
                <div className="flex h-4 items-center gap-4">
                    <Link
                        href={'https://amrita.town/prev'}
                        className="text-sm font-medium uppercase text-primary hover:brightness-125 dark:hover:brightness-125"
                    >
                        <div className="h-4 w-4 rotate-90 fill-[#E9EAE2]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 100">
                                <path d="M70.4,58.9L70.1,57l-0.2-0.9c0,0,0,0,0,0l-0.2-0.9c-18.7,3.4-27.6,13.4-31.9,22.7V3h-0.9H35h-0.9v75.3c-4.2-9.7-13.2-20.2-31.9-23.2L1.9,57L1.7,58c0,0,0,0,0,0l-0.1,0.9c28.7,4.5,32.2,27.6,32.5,35.3c-0.1,1.7,0,2.7,0,2.8l0.9-0.1v0l0.5,0l2.4,0.1c0,0,0-0.6,0-1.5v-2.5C38.4,84.4,42.5,63.9,70.4,58.9z" />
                            </svg>
                        </div>
                    </Link>

                    <Link
                        href={'https://amrita.town/random'}
                        className="fill-[#E9EAE2] text-sm font-medium uppercase text-accent hover:brightness-125 dark:hover:brightness-125"
                    >
                        <Dices />
                    </Link>
                    <Link
                        href={'https://amrita.town/next'}
                        className="text-sm font-medium uppercase text-primary hover:brightness-125 dark:hover:brightness-125"
                    >
                        <div className="h-4 w-4 -rotate-90 fill-[#E9EAE2]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 100">
                                <path d="M70.4,58.9L70.1,57l-0.2-0.9c0,0,0,0,0,0l-0.2-0.9c-18.7,3.4-27.6,13.4-31.9,22.7V3h-0.9H35h-0.9v75.3c-4.2-9.7-13.2-20.2-31.9-23.2L1.9,57L1.7,58c0,0,0,0,0,0l-0.1,0.9c28.7,4.5,32.2,27.6,32.5,35.3c-0.1,1.7,0,2.7,0,2.8l0.9-0.1v0l0.5,0l2.4,0.1c0,0,0-0.6,0-1.5v-2.5C38.4,84.4,42.5,63.9,70.4,58.9z" />
                            </svg>
                        </div>
                    </Link>
                </div>
                <Link
                    href={'https://amrita.town/'}
                    className="h-full self-center text-sm font-medium uppercase text-primary hover:brightness-125 dark:hover:brightness-125"
                >
                    <p>Amrita.town</p>
                </Link>
            </div>
        </section>
    )
}

export default Home
