import { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'
import { prisma } from '@/lib/prisma'
import { sendBookingEmails } from '@/lib/email'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { name, email, phone, date, startTime, guests, theme, location, addons, message, hearAbout } = body

  if (!name || !email || !phone || !date || !startTime || !guests || !theme || !location) {
    return Response.json({ error: 'Please fill in all required fields' }, { status: 400 })
  }

  try {
    const booking = await prisma.booking.create({
      data: { name, email, phone, date, startTime, guests: parseInt(guests), theme, location, addons, message, hearAbout },
    })

    sendBookingEmails(booking as Record<string, unknown>).catch(err => console.error('Email send failed:', err))

    return Response.json({ success: true, booking }, { status: 201 })
  } catch {
    return Response.json({ error: 'Failed to create booking' }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  const token = request.headers.get('authorization')?.split(' ')[1]
  if (!token) return Response.json({ error: 'No token provided' }, { status: 401 })

  try {
    jwt.verify(token, process.env.JWT_SECRET!)
  } catch {
    return Response.json({ error: 'Invalid token' }, { status: 401 })
  }

  try {
    const bookings = await prisma.booking.findMany({ orderBy: { createdAt: 'desc' } })
    return Response.json(bookings)
  } catch {
    return Response.json({ error: 'Failed to fetch bookings' }, { status: 500 })
  }
}
