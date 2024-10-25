'use client'
import React from 'react'
import Marquee from './Marquee'
import './Navbar.css'
export default function Navbar({ pageTitle }: { pageTitle: string }) {
    return (
        <div className="flex w-full items-center justify-between">
            <div className="flex w-[35%] justify-start">{pageTitle}</div>
            <div className="flex w-[30%] justify-center">
                <Marquee />
            </div>
            <div className="flex w-[35%] justify-end gap-10">
                <p className="">2k24</p>
            </div>
        </div>
    )
}
