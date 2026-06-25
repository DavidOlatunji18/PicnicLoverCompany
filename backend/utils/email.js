const { SESClient, SendEmailCommand } = require('@aws-sdk/client-ses')

const ses = new SESClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
})

function ownerEmailHtml(booking) {
  return `
    <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #FAF7F4; border-radius: 12px;">
      <h2 style="color: #E8547A; margin-bottom: 4px;">New Booking Request</h2>
      <p style="color: #B5637A; margin-top: 0; margin-bottom: 24px;">Someone just submitted a booking through the website.</p>

      <table style="width: 100%; border-collapse: collapse;">
        ${row('Name', booking.name)}
        ${row('Email', booking.email)}
        ${row('Phone', booking.phone)}
        ${row('Date', booking.date)}
        ${row('Start Time', booking.startTime)}
        ${row('Guests', booking.guests)}
        ${row('Theme', booking.theme)}
        ${row('Location', booking.location)}
        ${row('Add-Ons', booking.addons || 'None')}
        ${row('Special Requests', booking.message || 'None')}
        ${row('How They Heard', booking.hearAbout || 'Not specified')}
      </table>

      <p style="color: #B5637A; margin-top: 24px; font-size: 0.9rem;">
        Log in to your dashboard to update this booking's status.
      </p>
    </div>
  `
}

function customerEmailHtml(booking) {
  return `
    <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #FAF7F4; border-radius: 12px;">
      <h2 style="color: #E8547A; margin-bottom: 4px;">We've received your request!</h2>
      <p style="color: #B5637A; margin-top: 0; margin-bottom: 24px;">
        Hi ${booking.name}, thank you for reaching out to Picnic Lover Co.! We've received your booking request and will be in touch with you shortly to confirm the details.
      </p>

      <h3 style="color: #E8547A; margin-bottom: 12px;">Your Booking Summary</h3>
      <table style="width: 100%; border-collapse: collapse;">
        ${row('Date', booking.date)}
        ${row('Start Time', booking.startTime)}
        ${row('Guests', booking.guests)}
        ${row('Theme', booking.theme)}
        ${row('Location', booking.location)}
        ${booking.addons ? row('Add-Ons', booking.addons) : ''}
        ${booking.message ? row('Special Requests', booking.message) : ''}
      </table>

      <p style="color: #2D1B1E; margin-top: 24px; line-height: 1.7;">
        If you have any questions in the meantime, feel free to reach out to us at
        <a href="mailto:picnicloverco@gmail.com" style="color: #E8547A;">picnicloverco@gmail.com</a>.
      </p>

      <p style="color: #B5637A; margin-top: 24px; font-size: 0.9rem;">
        With love,<br/>
        <strong style="color: #E8547A;">Picnic Lover Co.</strong>
      </p>
    </div>
  `
}

function row(label, value) {
  return `
    <tr>
      <td style="padding: 8px 12px; color: #B5637A; font-size: 0.9rem; white-space: nowrap; vertical-align: top;">${label}</td>
      <td style="padding: 8px 12px; color: #2D1B1E; border-bottom: 1px solid #F2A0B4;">${value}</td>
    </tr>
  `
}

async function sendBookingEmails(booking) {
  const sender = process.env.SENDER_EMAIL
  const ownerEmail = process.env.OWNER_EMAIL

  const ownerCommand = new SendEmailCommand({
    Source: sender,
    Destination: { ToAddresses: [ownerEmail] },
    Message: {
      Subject: { Data: `New Booking Request — ${booking.name}` },
      Body: { Html: { Data: ownerEmailHtml(booking) } },
    },
  })

  const customerCommand = new SendEmailCommand({
    Source: sender,
    Destination: { ToAddresses: [booking.email] },
    Message: {
      Subject: { Data: `We've received your booking request! — Picnic Lover Co.` },
      Body: { Html: { Data: customerEmailHtml(booking) } },
    },
  })

  await Promise.all([ses.send(ownerCommand), ses.send(customerCommand)])
}

module.exports = { sendBookingEmails }
