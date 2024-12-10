'use client'
import Hero from 'src/components/Home/Hero'
import Projects from 'src/components/Home/Projects'
import Footer from 'src/components/Home/Footer'
import LoadingScreen from 'src/components/LoadingScreen'
import { useState, useEffect } from 'react'
import RevampBanner from '@/components/Banner'
export default function Home() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])

    if (isLoading) {
        return <LoadingScreen />
    }
    return (
        <div className="font-krypton divide-accent-foreground uppercase text-foreground dark:divide-accent fill-foreground">
            <RevampBanner />
            <Hero />
            <Projects />
            <Footer />
        </div>
    )
}
