import { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'
import { prisma } from '@/lib/prisma'

export async function PATCH(request: NextRequest, ctx: RouteContext<'/api/bookings/[id]'>) {
  const token = request.headers.get('authorization')?.split(' ')[1]
  if (!token) return Response.json({ error: 'No token provided' }, { status: 401 })

  try {
    jwt.verify(token, process.env.JWT_SECRET!)
  } catch {
    return Response.json({ error: 'Invalid token' }, { status: 401 })
  }

  const { id } = await ctx.params
  const { status } = await request.json()

  try {
    const booking = await prisma.booking.update({
      where: { id: parseInt(id) },
      data: { status },
    })
    return Response.json(booking)
  } catch {
    return Response.json({ error: 'Failed to update booking' }, { status: 500 })
  }
}
