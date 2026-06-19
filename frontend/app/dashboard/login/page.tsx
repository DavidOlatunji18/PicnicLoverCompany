'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      if (!res.ok) {
        setError('Invalid email or password')
        return
      }
      const { token } = await res.json()
      localStorage.setItem('admin_token', token)
      router.push('/dashboard')
    } catch {
      setError('Could not connect to server')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    width: '100%',
    border: '1px solid #F2A0B4',
    borderRadius: '8px',
    padding: '0.65rem 0.9rem',
    fontFamily: 'var(--font-cormorant)',
    fontSize: '1rem',
    color: '#2D1B1E',
    backgroundColor: '#FAF7F4',
    outline: 'none',
    boxSizing: 'border-box' as const,
  }

  return (
    <main
      style={{ backgroundColor: '#FAF7F4', minHeight: '100vh' }}
      className="flex items-center justify-center px-6">
      <div style={{
        backgroundColor: 'white',
        border: '1px solid #F2A0B4',
        borderRadius: '16px',
        width: '100%',
        maxWidth: '420px',
        boxShadow: '0 4px 24px rgba(232, 84, 122, 0.08)',
      }}
      className="p-6 sm:p-10">
        <div className="flex justify-center mb-6">
          <Image src="/logo_tp.png" alt="Picnic Lover Logo" width={130} height={58} style={{ objectFit: 'contain', height: 'auto' }} />
        </div>

        <h1 style={{ fontFamily: 'var(--font-playfair)', color: '#E8547A', fontSize: '1.6rem', marginBottom: '0.25rem', textAlign: 'center' }}>
          Admin Login
        </h1>
        <p style={{ fontFamily: 'var(--font-cormorant)', color: '#B5637A', marginBottom: '2rem', textAlign: 'center', fontSize: '1rem' }}>
          Picnic Lover Co. Dashboard
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label style={{ fontFamily: 'var(--font-cormorant)', color: '#2D1B1E', fontSize: '0.95rem', display: 'block', marginBottom: '0.4rem' }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              style={inputStyle}
            />
          </div>

          <div>
            <label style={{ fontFamily: 'var(--font-cormorant)', color: '#2D1B1E', fontSize: '0.95rem', display: 'block', marginBottom: '0.4rem' }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                style={{ ...inputStyle, paddingRight: '2.8rem' }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(prev => !prev)}
                style={{ position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#B5637A', fontSize: '0.8rem', fontFamily: 'var(--font-cormorant)', fontWeight: '700', letterSpacing: '0.04em', padding: 0 }}>
                {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
              </button>
            </div>
          </div>

          {error && (
            <p style={{ color: '#E8547A', fontFamily: 'var(--font-cormorant)', fontSize: '0.95rem', margin: 0 }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              backgroundColor: '#E8547A',
              color: 'white',
              fontFamily: 'var(--font-cormorant)',
              fontWeight: '700',
              fontSize: '1rem',
              letterSpacing: '0.08em',
              borderRadius: '8px',
              padding: '0.75rem',
              border: 'none',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1,
              marginTop: '0.5rem',
            }}>
            {loading ? 'Signing in...' : 'SIGN IN'}
          </button>
        </form>
      </div>
    </main>
  )
}
