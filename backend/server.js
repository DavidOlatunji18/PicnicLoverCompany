const express = require('express')
const cors = require('cors')
require('dotenv').config()

const authRoutes = require('./routes/auth')
const bookingRoutes = require('./routes/bookings')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/bookings', bookingRoutes)

app.get('/api/health', (req, res) => {
  res.json({ message: 'Picnic Lover backend is running!' })
})

app.listen(3001, () => {
  console.log('Backend running on http://localhost:3001')
})
