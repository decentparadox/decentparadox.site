"use client"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Ensure useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  if (!mounted) {
    return null
  }

  const imageSrc = theme === 'light' ? '/lightMode.svg' : '/darkMode.svg'
  const altText = theme === 'light' ? 'moon' : 'sun'

  return (
    <div onClick={toggleTheme} style={{ cursor: 'pointer' }}>
      <Image src={imageSrc} width={30} height={30} alt={altText} />
    </div>
  )
}

export default ThemeSwitch
