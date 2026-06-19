'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

type Booking = {
  id: number
  name: string
  email: string
  phone: string
  date: string
  startTime: string
  guests: number
  theme: string
  location: string
  addons: string | null
  message: string | null
  hearAbout: string | null
  status: string
  createdAt: string
}

function statusStyle(status: string) {
  if (status === 'confirmed') return { backgroundColor: '#dcfce7', color: '#166534' }
  if (status === 'cancelled') return { backgroundColor: '#fee2e2', color: '#991b1b' }
  return { backgroundColor: '#fef9c3', color: '#854d0e' }
}

export default function Dashboard() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState<number | null>(null)
  const router = useRouter()

  const fetchBookings = useCallback(async (token: string) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bookings`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      if (res.status === 401) {
        localStorage.removeItem('admin_token')
        router.push('/dashboard/login')
        return
      }
      const data = await res.json()
      setBookings(data)
    } finally {
      setLoading(false)
    }
  }, [router])

  useEffect(() => {
    const token = localStorage.getItem('admin_token')
    if (!token) {
      router.push('/dashboard/login')
      return
    }
    fetchBookings(token)
  }, [router, fetchBookings])

  async function updateStatus(id: number, status: string) {
    const token = localStorage.getItem('admin_token')
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bookings/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ status }),
    })
    setBookings(prev => prev.map(b => b.id === id ? { ...b, status } : b))
  }

  function logout() {
    localStorage.removeItem('admin_token')
    router.push('/dashboard/login')
  }

  if (loading) {
    return (
      <main style={{ backgroundColor: '#FAF7F4', minHeight: '100vh' }} className="flex items-center justify-center">
        <p style={{ color: '#B5637A', fontFamily: 'var(--font-cormorant)', fontSize: '1.1rem' }}>Loading bookings...</p>
      </main>
    )
  }

  const counts = {
    total: bookings.length,
    pending: bookings.filter(b => b.status === 'pending').length,
    confirmed: bookings.filter(b => b.status === 'confirmed').length,
    cancelled: bookings.filter(b => b.status === 'cancelled').length,
  }

  return (
    <main style={{ backgroundColor: '#FAF7F4', minHeight: '100vh' }} className="px-4 py-6 md:px-8 md:py-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <Image src="/logo_tp.png" alt="Picnic Lover Logo" width={110} height={50} style={{ objectFit: 'contain', height: 'auto' }} />
            <div>
              <h1 style={{ fontFamily: 'var(--font-playfair)', color: '#E8547A', fontSize: '1.8rem', lineHeight: 1.1 }}>Dashboard</h1>
              <p style={{ fontFamily: 'var(--font-cormorant)', color: '#B5637A', fontSize: '0.95rem' }}>Booking Management</p>
            </div>
          </div>
          <button
            onClick={logout}
            style={{ fontFamily: 'var(--font-cormorant)', fontWeight: '700', fontSize: '0.9rem', letterSpacing: '0.05em', color: '#B5637A', border: '1px solid #F2A0B4', borderRadius: '8px', padding: '0.5rem 1.2rem', backgroundColor: 'white', cursor: 'pointer' }}>
            LOGOUT
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total', value: counts.total, bg: '#FAF7F4', color: '#E8547A' },
            { label: 'Pending', value: counts.pending, bg: '#fef9c3', color: '#854d0e' },
            { label: 'Confirmed', value: counts.confirmed, bg: '#dcfce7', color: '#166534' },
            { label: 'Cancelled', value: counts.cancelled, bg: '#fee2e2', color: '#991b1b' },
          ].map(({ label, value, bg, color }) => (
            <div key={label} style={{ backgroundColor: bg, border: '1px solid #F2A0B4', borderRadius: '12px', padding: '1.2rem', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-playfair)', fontSize: '2rem', color, lineHeight: 1 }}>{value}</div>
              <div style={{ fontFamily: 'var(--font-cormorant)', color: '#B5637A', fontSize: '0.9rem', marginTop: '0.25rem' }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Table */}
        {bookings.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem', color: '#B5637A', fontFamily: 'var(--font-cormorant)', fontSize: '1.1rem', backgroundColor: 'white', borderRadius: '12px', border: '1px solid #F2A0B4' }}>
            No bookings yet.
          </div>
        ) : (
          <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #F2A0B4', overflow: 'hidden' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#F2A0B4' }}>
                    {['Submitted', 'Name', 'Date', 'Time', 'Guests', 'Theme', 'Location', 'Status', 'Details'].map(h => (
                      <th key={h} style={{ padding: '0.85rem 1rem', textAlign: 'left', fontFamily: 'var(--font-cormorant)', fontWeight: '700', color: '#2D1B1E', fontSize: '0.85rem', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((b, i) => (
                    <React.Fragment key={b.id}>
                      <tr
                        style={{ borderBottom: expanded === b.id ? 'none' : '1px solid #FAF7F4', backgroundColor: i % 2 === 0 ? 'white' : '#FDF5F7' }}>
                        <td style={{ padding: '0.85rem 1rem', fontFamily: 'var(--font-cormorant)', color: '#B5637A', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>
                          {new Date(b.createdAt).toLocaleDateString()}
                        </td>
                        <td style={{ padding: '0.85rem 1rem', fontFamily: 'var(--font-cormorant)', color: '#2D1B1E', fontWeight: '600', whiteSpace: 'nowrap' }}>
                          {b.name}
                        </td>
                        <td style={{ padding: '0.85rem 1rem', fontFamily: 'var(--font-cormorant)', color: '#2D1B1E', whiteSpace: 'nowrap' }}>
                          {b.date}
                        </td>
                        <td style={{ padding: '0.85rem 1rem', fontFamily: 'var(--font-cormorant)', color: '#2D1B1E', whiteSpace: 'nowrap' }}>
                          {b.startTime}
                        </td>
                        <td style={{ padding: '0.85rem 1rem', fontFamily: 'var(--font-cormorant)', color: '#2D1B1E' }}>
                          {b.guests}
                        </td>
                        <td style={{ padding: '0.85rem 1rem', fontFamily: 'var(--font-cormorant)', color: '#2D1B1E' }}>
                          {b.theme}
                        </td>
                        <td style={{ padding: '0.85rem 1rem', fontFamily: 'var(--font-cormorant)', color: '#2D1B1E' }}>
                          {b.location}
                        </td>
                        <td style={{ padding: '0.85rem 1rem' }}>
                          <select
                            value={b.status}
                            onChange={e => updateStatus(b.id, e.target.value)}
                            style={{ ...statusStyle(b.status), fontFamily: 'var(--font-cormorant)', fontWeight: '700', fontSize: '0.8rem', letterSpacing: '0.04em', border: 'none', borderRadius: '20px', padding: '0.3rem 0.8rem', cursor: 'pointer' }}>
                            <option value="pending">Pending</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                        </td>
                        <td style={{ padding: '0.85rem 1rem' }}>
                          <button
                            onClick={() => setExpanded(expanded === b.id ? null : b.id)}
                            style={{ fontFamily: 'var(--font-cormorant)', fontSize: '0.85rem', color: '#E8547A', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', padding: 0 }}>
                            {expanded === b.id ? 'Hide' : 'View'}
                          </button>
                        </td>
                      </tr>

                      {expanded === b.id && (
                        <tr style={{ backgroundColor: i % 2 === 0 ? 'white' : '#FDF5F7', borderBottom: '1px solid #FAF7F4' }}>
                          <td colSpan={9} style={{ padding: '0 1rem 1.2rem 1rem' }}>
                            <div style={{ backgroundColor: '#FAF7F4', borderRadius: '8px', padding: '1.2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.75rem' }}>
                              {[
                                { label: 'Email', value: b.email },
                                { label: 'Phone', value: b.phone },
                                { label: 'Add-Ons', value: b.addons || 'None' },
                                { label: 'Special Requests', value: b.message || 'None' },
                                { label: 'How They Heard', value: b.hearAbout || 'Not specified' },
                              ].map(({ label, value }) => (
                                <div key={label}>
                                  <div style={{ fontFamily: 'var(--font-cormorant)', color: '#B5637A', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>{label}</div>
                                  <div style={{ fontFamily: 'var(--font-cormorant)', color: '#2D1B1E', fontSize: '0.95rem' }}>{value}</div>
                                </div>
                              ))}
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
