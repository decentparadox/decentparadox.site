'use client'

import { useEffect, useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import SignaturePad from 'react-signature-canvas'
import { sql } from '@/lib/neon'
import ReactDOM from 'react-dom'

interface GuestbookEntry {
  id: number
  name: string
  link?: string
  message: string
  date: string
  isAnonymous: boolean
  signature: string // Base64-encoded image
}

export default function Guestbook() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([])
  const [formData, setFormData] = useState({
    name: '',
    link: '',
    message: '',
    isAnonymous: false,
  })
  const [signatureDataURL, setSignatureDataURL] = useState<string | null>(null)
  const sigPadRef = useRef<any>(null)

  useEffect(() => {
    fetchEntries()
  }, [])

  useEffect(() => {
    ReactDOM.render(
      <SignaturePad
        penColor="rgb(155, 153, 255)"
        ref={sigPadRef}
        canvasProps={{ height: 200, className: 'sigCanvas' }}
      />,
      document.getElementById('react-container'),
    )
  }, [])

  const fetchEntries = async () => {
    const result = await sql`SELECT * FROM guestbook ORDER BY date DESC`
    const entries: GuestbookEntry[] = result.map((entry: any) => ({
      id: entry.id,
      name: entry.name,
      link: entry.link,
      message: entry.message,
      date: entry.date,
      isAnonymous: entry.is_anonymous,
      signature: entry.signature,
    }))
    setEntries(entries)
  }

  const clearSignature = () => {
    sigPadRef.current.clear()
    setSignatureDataURL(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!sigPadRef.current.isEmpty()) {
      const signature = sigPadRef.current
        .getTrimmedCanvas()
        .toDataURL('image/png')
      setSignatureDataURL(signature)

      // Insert data into the database
      await sql`
        INSERT INTO guestbook (name, link, message, is_anonymous, signature)
        VALUES (${formData.name}, ${formData.link || null}, ${formData.message}, ${formData.isAnonymous}, ${signature});
      `

      fetchEntries() // Refresh entries
      setFormData({ name: '', link: '', message: '', isAnonymous: false })
      clearSignature()
    } else {
      alert('Please draw your signature before submitting.')
    }
  }

  const formatDateToIST = (date: string) => {
    return new Date(date).toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  function convertToIST(date: string): string {
    const dateObj = new Date(date);
    const offset = 5.5 * 60 * 60 * 1000; // IST is UTC+5:30
    const istDate = new Date(dateObj.getTime() + offset);
    return istDate.toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true, // For AM/PM format
    });
  }
  
  return (
    <div className="min-h-screen font-mono text-white">
      <h1 className="mb-8 font-krypton text-4xl font-bold">Guestbook</h1>

      <Card className="mb-8 border-zinc-700 bg-zinc-800">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="signature"
                className="text-sm font-medium text-zinc-400"
              >
                Draw your signature
              </label>
              <div className="relative">
                <div id="react-container" className="relative"></div>
                <button
                  type="button"
                  onClick={clearSignature}
                  className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-md border border-zinc-600 text-white transition hover:bg-accent hover:text-background"
                  title="Clear signature"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-rotate-ccw"
                  >
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                    <path d="M3 3v5h5" />
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <Input
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="border-zinc-600 bg-zinc-700 text-white placeholder:text-zinc-400"
              />
            </div>
            <div>
              <Input
                placeholder="Link to web/social media presence"
                value={formData.link}
                onChange={(e) =>
                  setFormData({ ...formData, link: e.target.value })
                }
                className="border-zinc-600 bg-zinc-700 text-white placeholder:text-zinc-400"
              />
            </div>
            <div>
              <Textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="min-h-[120px] border-zinc-600 bg-zinc-700 text-white placeholder:text-zinc-400"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="anonymous"
                checked={formData.isAnonymous}
                onChange={(e) =>
                  setFormData({ ...formData, isAnonymous: e.target.checked })
                }
                className="mr-2"
              />
              <label htmlFor="anonymous" className="text-sm text-zinc-400">
                Post anonymously
              </label>
            </div>


            <Button
              type="submit"
              className="bg-zinc-700 text-white hover:bg-zinc-600"
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="border border-b-0 border-l-0 border-r-0 border-t-2 py-4"
          >
            <div className="mb-2 flex items-start justify-between">
              <span
                className={`text-lg ${
                  entry.link ? 'text-accent' : 'text-white'
                }`}
              >
                {entry.link ? (
                  <a
                    href={entry.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {entry.isAnonymous ? 'Anonymous' : entry.name}
                  </a>
                ) : (
                  entry.isAnonymous ? 'Anonymous' : entry.name
                )}
              </span>
              <span className="text-zinc-400">{convertToIST(entry.date)}</span>
            </div>
            <p className="text-zinc-300">{entry.message}</p>
            {entry.signature && (
              <img
                src={entry.signature}
                alt="Signature"
                className="mt-4 max-w-[200px] border"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
