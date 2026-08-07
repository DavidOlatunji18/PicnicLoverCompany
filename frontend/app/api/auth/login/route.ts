import { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

export async function POST(request: NextRequest) {
  const { email, password } = await request.json()

  if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
    return Response.json({ error: 'Invalid credentials' }, { status: 401 })
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET!, { expiresIn: '8h' })
  return Response.json({ token })
}
