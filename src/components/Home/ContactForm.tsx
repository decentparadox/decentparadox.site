import { useState } from 'react'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        budget: '',
        message: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        // Add your form submission logic here
    }

    return (
        <div>
            <p className="pb-4 opacity-75">(Contact)</p>
            <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
                <div className="md:w-1/3">
                    <h2 className="mb-4 text-lg">
                        Let's unlock together the next level of possibilities! Reach out.
                    </h2>
                    <div className="mb-6">
                        <h3 className="mb-2 text-sm">SOCIAL MEDIA</h3>
                        <p className="text-xs">TWITTER - INSTAGRAM - GITHUB - TWITCH</p>
                    </div>
                    <div>
                        <h3 className="mb-2 text-sm">GET IN TOUCH</h3>
                        <p className="text-xs">HELLO@DECENTPARADOX.TECH</p>
                    </div>
                    <div className="mt-4">
                        <h3 className="mb-2 text-sm">LOCATION</h3>
                        <p className="text-xs">BANGALORE - INDIA</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6 md:w-2/3">
                    <div className="flex gap-6">
                        <div className="w-1/2">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border-b bg-transparent pb-1"
                            />
                        </div>
                        <div className="w-1/2">
                            <input
                                type="text"
                                name="company"
                                placeholder="Company"
                                value={formData.company}
                                onChange={handleChange}
                                className="w-full border-b bg-transparent pb-1"
                            />
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="w-1/2">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border-b bg-transparent pb-1"
                            />
                        </div>
                        <div className="w-1/2">
                            <input
                                type="text"
                                name="budget"
                                placeholder="Budget"
                                value={formData.budget}
                                onChange={handleChange}
                                className="w-full border-b bg-transparent pb-1"
                            />
                        </div>
                    </div>
                    <div>
                        <textarea
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full border-b bg-transparent pb-1"
                        ></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="flex items-center gap-2 text-lg uppercase transition-colors hover:text-gray-100"
                        >
                            Submit
                            <span className="text-2xl">→</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
