'use client'
import Hero from '@/components/Home/Hero'
import Projects from '@/components/Home/Projects'
import Footer from '@/components/Home/Footer'
import LoadingScreen from '@/components/LoadingScreen'
import { useState, useEffect } from 'react'
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
        <div className="font-krypton divide-accent-foreground uppercase text-foreground dark:divide-accent">
            <Hero />
            <Projects />
            <Footer />
        </div>
    )
}
