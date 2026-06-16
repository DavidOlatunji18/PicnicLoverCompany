const express = require('express')
const { PrismaClient } = require('@prisma/client')
const authMiddleware = require('../middleware/auth')
const router = express.Router()
const prisma = new PrismaClient()

// POST /api/bookings — customer submits booking form
router.post('/', async (req, res) => {
  const { name, email, phone, date, startTime, guests, theme, location, addons, message, hearAbout } = req.body

  if (!name || !email || !phone || !date || !startTime || !guests || !theme || !location) {
    return res.status(400).json({ error: 'Please fill in all required fields' })
  }

  try {
    const booking = await prisma.booking.create({
      data: { name, email, phone, date, startTime, guests: parseInt(guests), theme, location, addons, message, hearAbout }
    })
    res.status(201).json({ success: true, booking })
  } catch (err) {
    res.status(500).json({ error: 'Failed to create booking' })
  }
})

// GET /api/bookings — admin only, get all bookings
router.get('/', authMiddleware, async (req, res) => {
  try {
    const bookings = await prisma.booking.findMany({
      orderBy: { createdAt: 'desc' }
    })
    res.json(bookings)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch bookings' })
  }
})

// PATCH /api/bookings/:id — admin only, update booking status
router.patch('/:id', authMiddleware, async (req, res) => {
  const { id } = req.params
  const { status } = req.body

  try {
    const booking = await prisma.booking.update({
      where: { id: parseInt(id) },
      data: { status }
    })
    res.json(booking)
  } catch (err) {
    res.status(500).json({ error: 'Failed to update booking' })
  }
})

module.exports = router
