import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    budget: '',
    message: ''
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
    <p className='opacity-75 pb-4'>(Contact)</p>
      <div className="w-full gap-12 flex flex-col md:flex-row justify-between">
        <div className="md:w-1/3">
          <h2 className="text-lg mb-4">Let's unlock together the next level of possibilities! Reach out.</h2>
          <div className="mb-6">
            <h3 className="text-sm mb-2">SOCIAL MEDIA</h3>
            <p className="text-xs">TWITTER - INSTAGRAM - GITHUB - TWITCH</p>
          </div>
          <div>
            <h3 className="text-sm mb-2">GET IN TOUCH</h3>
            <p className="text-xs">HELLO@DECENTPARADOX.TECH</p>
          </div>
          <div className="mt-4">
            <h3 className="text-sm mb-2">LOCATION</h3>
            <p className="text-xs">BANGALORE - INDIA</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="md:w-2/3 space-y-6">
          <div className="flex gap-6">
            <div className="w-1/2">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b pb-1"
              />
            </div>
            <div className="w-1/2">
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-transparent border-b pb-1"
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
                className="w-full bg-transparent border-b pb-1"
              />
            </div>
            <div className="w-1/2">
              <input
                type="text"
                name="budget"
                placeholder="Budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full bg-transparent border-b pb-1"
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
              className="w-full bg-transparent border-b pb-1"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="text-lg uppercase flex items-center gap-2 hover:text-gray-100 transition-colors">
              Submit
              <span className="text-2xl">→</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}