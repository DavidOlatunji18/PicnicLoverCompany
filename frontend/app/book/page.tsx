'use client'

import { useState, useRef, useEffect } from 'react'
import { MdSchedule } from 'react-icons/md'
import FadeIn from '../components/FadeIn'

function CustomSelect({
  options,
  value,
  onChange,
  placeholder,
  icon,
}: {
  options: string[]
  value: string
  onChange: (val: string) => void
  placeholder: string
  icon?: React.ReactNode
}) {
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState('')
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%',
          border: '1px solid #F2A0B4',
          borderRadius: '8px',
          padding: '0.85rem 1rem',
          fontFamily: 'var(--font-cormorant)',
          fontSize: '1rem',
          color: value ? '#2D1B1E' : '#B5637A',
          backgroundColor: '#fff',
          textAlign: 'left',
          minHeight: '48px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
        }}>
        <span>{value || placeholder}</span>
        {icon ?? <span style={{ color: '#F2A0B4', fontSize: '0.65rem' }}>▼</span>}
      </button>

      {open && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 4px)',
          left: 0,
          right: 0,
          backgroundColor: '#FFF0F4',
          border: '1px solid #F2A0B4',
          borderRadius: '8px',
          maxHeight: '220px',
          overflowY: 'auto',
          zIndex: 50,
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        }}>
          <div style={{ padding: '0.35rem' }}>
            {options.map(opt => (
              <div
                key={opt}
                onClick={() => { onChange(opt); setOpen(false) }}
                onMouseEnter={() => setHovered(opt)}
                onMouseLeave={() => setHovered('')}
                style={{
                  padding: '0.65rem 0.85rem',
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '1rem',
                  color: '#2D1B1E',
                  backgroundColor: value === opt
                    ? '#F2A0B4'
                    : hovered === opt
                    ? '#F9D0DC'
                    : 'transparent',
                  cursor: 'pointer',
                  borderRadius: '6px',
                  transition: 'background-color 0.15s ease',
                }}>
                {opt}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

const timeSlots = (() => {
  const slots = []
  for (let h = 8; h <= 20; h++) {
    for (let m = 0; m < 60; m += 15) {
      if (h === 20 && m > 0) break
      const hour12 = h % 12 === 0 ? 12 : h % 12
      const ampm = h < 12 ? 'AM' : 'PM'
      const minuteStr = m === 0 ? '00' : m.toString()
      slots.push(`${hour12}:${minuteStr} ${ampm}`)
    }
  }
  return slots
})()

const themes = ['PINK CHIC', 'GLOW', 'CHARM', 'ROMANTIC', 'WAVES', 'NEUTRAL CHIC', 'GENDER REVEAL']
const locations = [
  'East Potomac Park (Washington, DC)',
  'Gravelly Point Park (Arlington, VA)',
  'Columbia Park / Kentland Community Center Park (Landover, MD)',
  'Centennial Park (Ellicott City, MD)',
  'Allen Pond Park (Bowie, MD)',
]
const addonOptions = [
  'Extra Time — $50 per 30 min',
  'Painting Supplies — $20 per person',
  'Love Letter Writing Supplies — $20 per person',
  'Seating Cards — $2 per person',
]

const guestOptions = Array.from({ length: 10 }, (_, i) => i + 1)

const hearAboutOptions = [
  'Instagram',
  'TikTok',
  'Friend/Family',
  'Client Referral',
  'Returning Client',
  'Google',
  'Picnic Park',
  'Other',
  'Prefer not to say',
]

type FormData = {
  date: string
  startTime: string
  guests: string
  theme: string
  location: string
  addons: string[]
  name: string
  email: string
  phone: string
  message: string
  hearAbout: string
}

export default function Book() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [form, setForm] = useState<FormData>({
    date: '',
    startTime: '',
    guests: '',
    theme: '',
    location: '',
    addons: [],
    name: '',
    email: '',
    phone: '',
    message: '',
    hearAbout: '',
  })

  const update = (field: keyof FormData, value: string) =>
    setForm(prev => ({ ...prev, [field]: value }))

  const toggleAddon = (addon: string) => {
    setForm(prev => ({
      ...prev,
      addons: prev.addons.includes(addon)
        ? prev.addons.filter(a => a !== addon)
        : [...prev.addons, addon],
    }))
  }

  const handleSubmit = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('http://localhost:3001/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          guests: parseInt(form.guests),
          addons: form.addons.join(', '),
          hearAbout: form.hearAbout || null,
        }),
      })
      if (!res.ok) throw new Error('Failed to submit')
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const labelStyle = {
    fontFamily: 'var(--font-cormorant)',
    color: '#B5637A',
    fontSize: '0.95rem',
    display: 'block',
    marginBottom: '0.4rem',
  }

  const inputStyle = {
    width: '100%',
    border: '1px solid #F2A0B4',
    borderRadius: '8px',
    padding: '0.85rem 1rem',
    fontFamily: 'var(--font-cormorant)',
    fontSize: '1rem',
    color: '#2D1B1E',
    backgroundColor: '#fff',
    outline: 'none',
    minHeight: '48px',
  }

  const sectionHeading = {
    fontFamily: 'var(--font-playfair)',
    color: '#E8547A',
    fontSize: 'clamp(1.4rem, 3vw, 2rem)',
    marginBottom: '0.5rem',
  }

  if (submitted) {
    return (
      <main style={{ backgroundColor: '#FAF7F4', minHeight: '100vh' }}
        className="flex items-center justify-center px-6 py-20">
        <div className="text-center max-w-md">
          <p style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</p>
          <h1 style={{ fontFamily: 'var(--font-playfair)', color: '#E8547A', fontSize: '2rem', marginBottom: '1rem' }}>
            You're All Set!
          </h1>
          <p style={{ fontFamily: 'var(--font-cormorant)', color: '#B5637A', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Thank you for reaching out, {form.name}! We've received your booking request and will be in touch at <strong>{form.email}</strong> shortly.
          </p>
        </div>
      </main>
    )
  }

  return (
    <main style={{ backgroundColor: '#FAF7F4', minHeight: '100vh', paddingTop: '4rem', paddingBottom: '5rem' }}>
      <div className="max-w-xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <FadeIn onMount direction="left" delay={0.3}>
          <h1 style={{ fontFamily: 'var(--font-playfair)', color: '#E8547A', fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '0.5rem' }}
            className="text-center">
            Book Your Picnic
          </h1>
          <p style={{ fontFamily: 'var(--font-cormorant)', color: '#B5637A', fontSize: '1.1rem', marginBottom: '2.5rem' }}
            className="text-center">
            Fill out the form below and we'll be in touch to confirm your experience.
          </p>
        </FadeIn>

        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-1 sm:gap-2 mb-10">
          {[1, 2, 3, 4].map(s => (
            <div key={s} className="flex items-center gap-1 sm:gap-2">
              <div style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: step >= s ? '#E8547A' : '#F2A0B4',
                color: 'white',
                fontFamily: 'var(--font-cormorant)',
                fontWeight: '700',
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                transition: 'background-color 0.3s',
              }}>
                {s}
              </div>
              {s < 4 && (
                <div style={{
                  width: 'clamp(20px, 6vw, 40px)',
                  height: '1px',
                  backgroundColor: step > s ? '#E8547A' : '#F2A0B4',
                  transition: 'background-color 0.3s',
                }} />
              )}
            </div>
          ))}
        </div>

        {/* Form Card */}
        <div style={{ backgroundColor: '#fff', border: '1px solid #F2A0B4', borderRadius: '16px' }} className="p-5 sm:p-8">

          {/* Step 1 — Date & Guests */}
          {step === 1 && (
            <div className="flex flex-col gap-5">
              <h2 style={sectionHeading}>Event Details</h2>
              <div>
                <label style={labelStyle}>Preferred Date *</label>
                <input
                  type="date"
                  style={inputStyle}
                  value={form.date}
                  onChange={e => update('date', e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div>
                <label style={labelStyle}>Preferred Start Time *</label>
                <CustomSelect
                  options={timeSlots}
                  value={form.startTime}
                  onChange={val => update('startTime', val)}
                  placeholder="Select a time"
                  icon={<MdSchedule size={20} style={{ color: '#F2A0B4' }} />}
                />
              </div>
              <div>
                <label style={labelStyle}>Number of Guests *</label>
                <CustomSelect
                  options={guestOptions.map(n => `${n}${n === 10 ? '+ (service fee applies)' : ''}`)}
                  value={form.guests}
                  onChange={val => update('guests', val)}
                  placeholder="Select guests"
                />
              </div>
            </div>
          )}

          {/* Step 2 — Theme, Location & Add-ons */}
          {step === 2 && (
            <div className="flex flex-col gap-5">
              <h2 style={sectionHeading}>Customize Your Experience</h2>
              <div>
                <label style={labelStyle}>Choose a Theme *</label>
                <CustomSelect
                  options={themes}
                  value={form.theme}
                  onChange={val => update('theme', val)}
                  placeholder="Select a theme"
                />
              </div>
              <div>
                <label style={labelStyle}>Preferred Location *</label>
                <CustomSelect
                  options={[...locations, 'Other (specify in special requests)']}
                  value={form.location}
                  onChange={val => update('location', val)}
                  placeholder="Select a location"
                />
                <p style={{ fontFamily: 'var(--font-cormorant)', color: '#B5637A', fontSize: '0.85rem', marginTop: '0.35rem' }}>
                  Don't see your location? Select "Other" and add details in special requests.
                </p>
              </div>
              <div>
                <label style={labelStyle}>Add-Ons (optional)</label>
                <div className="flex flex-col gap-2 mt-1">
                  {addonOptions.map(addon => (
                    <label key={addon} className="flex items-center gap-3 cursor-pointer"
                      style={{ fontFamily: 'var(--font-cormorant)', color: '#2D1B1E', fontSize: '0.95rem' }}>
                      <input
                        type="checkbox"
                        checked={form.addons.includes(addon)}
                        onChange={() => toggleAddon(addon)}
                        style={{ accentColor: '#E8547A', width: '16px', height: '16px' }}
                      />
                      {addon}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3 — Contact Info */}
          {step === 3 && (
            <div className="flex flex-col gap-5">
              <h2 style={sectionHeading}>Your Information</h2>
              <div>
                <label style={labelStyle}>Full Name *</label>
                <input type="text" style={inputStyle} placeholder="Jane Doe"
                  value={form.name} onChange={e => update('name', e.target.value)} />
              </div>
              <div>
                <label style={labelStyle}>Email Address *</label>
                <input type="email" style={inputStyle} placeholder="jane@email.com"
                  value={form.email} onChange={e => update('email', e.target.value)} />
              </div>
              <div>
                <label style={labelStyle}>Phone Number *</label>
                <input type="tel" style={inputStyle} placeholder="443-000-0000"
                  value={form.phone} onChange={e => update('phone', e.target.value)} />
              </div>
              <div>
                <label style={labelStyle}>Special Requests (optional)</label>
                <textarea style={{ ...inputStyle, resize: 'none' }} rows={4}
                  placeholder="Any special details, celebrations, or requests..."
                  value={form.message} onChange={e => update('message', e.target.value)} />
              </div>
              <div>
                <label style={labelStyle}>How did you hear about us? *</label>
                <CustomSelect
                  options={hearAboutOptions}
                  value={form.hearAbout}
                  onChange={val => update('hearAbout', val)}
                  placeholder="Select an option"
                />
              </div>
            </div>
          )}

          {/* Step 4 — Review */}
          {step === 4 && (
            <div className="flex flex-col gap-4">
              <h2 style={sectionHeading}>Review Your Request</h2>
              {[
                { label: 'Date', value: form.date ? form.date.split('-').slice(1).concat(form.date.split('-')[0]).join('/') : '' },
                { label: 'Start Time', value: form.startTime || 'Not specified' },
                { label: 'Guests', value: form.guests },
                { label: 'Theme', value: form.theme },
                { label: 'Location', value: form.location },
                { label: 'Add-Ons', value: form.addons.length ? form.addons.join(', ') : 'None' },
                { label: 'Name', value: form.name },
                { label: 'Email', value: form.email },
                { label: 'Phone', value: form.phone },
                { label: 'Message', value: form.message || 'None' },
                { label: 'How did you hear about us?', value: form.hearAbout || 'Not specified' },
              ].map(({ label, value }) => (
                <div key={label} style={{ borderBottom: '0.5px solid #F2A0B4', paddingBottom: '0.75rem' }}>
                  <p style={{ fontFamily: 'var(--font-cormorant)', color: '#B5637A', fontSize: '0.85rem' }}>{label}</p>
                  <p style={{ fontFamily: 'var(--font-cormorant)', color: '#2D1B1E', fontSize: '1rem' }}>{value}</p>
                </div>
              ))}
              {error && (
                <p style={{ fontFamily: 'var(--font-cormorant)', color: '#E8547A', fontSize: '0.95rem' }}>{error}</p>
              )}
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-6">
          {step > 1 ? (
            <button onClick={() => setStep(s => s - 1)}
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontWeight: '700',
                color: '#E8547A',
                fontSize: '1rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}>
              ← Back
            </button>
          ) : <div />}

          {step < 4 ? (
            <button
              onClick={() => setStep(s => s + 1)}
              disabled={
                (step === 1 && (!form.date || !form.startTime || !form.guests)) ||
                (step === 2 && (!form.theme || !form.location)) ||
                (step === 3 && (!form.name || !form.email || !form.phone || !form.hearAbout))
              }
              style={{
                backgroundColor: '#E8547A',
                color: 'white',
                fontFamily: 'var(--font-cormorant)',
                fontWeight: '700',
                fontSize: '1rem',
                padding: '0.75rem 2rem',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                opacity: (
                  (step === 1 && (!form.date || !form.startTime || !form.guests)) ||
                  (step === 2 && (!form.theme || !form.location)) ||
                  (step === 3 && (!form.name || !form.email || !form.phone || !form.hearAbout))
                ) ? 0.5 : 1,
              }}>
              Next →
            </button>
          ) : (
            <button onClick={handleSubmit} disabled={loading}
              style={{
                backgroundColor: '#E8547A',
                color: 'white',
                fontFamily: 'var(--font-cormorant)',
                fontWeight: '700',
                fontSize: '1rem',
                padding: '0.75rem 2rem',
                borderRadius: '9999px',
                border: 'none',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.7 : 1,
              }}>
              {loading ? 'Submitting...' : 'Submit Request'}
            </button>
          )}
        </div>
      </div>
    </main>
  )
}
