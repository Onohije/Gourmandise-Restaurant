const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory storage for prototype
const reservations = [];
const subscribers = [];

app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }
  subscribers.push(email);
  console.log(`New subscriber: ${email}`);
  res.status(200).json({ message: 'Subscribed successfully' });
});

app.post('/api/reserve', (req, res) => {
  const { name, email, date, time, guests, note } = req.body;
  if (!name || !email || !date || !time || !guests) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  const reservation = { name, email, date, time, guests, note: note || '' };
  reservations.push(reservation);
  console.log('New reservation:', reservation);
  res.status(200).json({ message: 'Reservation confirmed', reservation });
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
