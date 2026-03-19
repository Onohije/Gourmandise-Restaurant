import React, { useState } from 'react';
import './Reservation.css';

const Reservation = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '1',
    note: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      const res = await fetch('/api/reserve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('Reservation successful!');
        setTimeout(onClose, 2000);
      } else {
        setStatus('Failed to reserve. Try again.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Error connecting to server.');
    }
  };

  return (
    <div className="app__reservation-overlay flex__center">
      <div className="app__reservation-container">
        <button className="app__reservation-close" onClick={onClose}>X</button>
        <h1 className="headtext__cormorant" style={{ marginBottom: '2rem', textAlign: 'center' }}>Book a Table</h1>
        <form onSubmit={handleSubmit} className="app__reservation-form flex__center">
          <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
          <div className="app__reservation-form_row">
            <input type="date" name="date" required value={formData.date} onChange={handleChange} />
            <input type="time" name="time" required value={formData.time} onChange={handleChange} />
            <input type="number" name="guests" min="1" max="20" required value={formData.guests} onChange={handleChange} placeholder="Guests" />
          </div>
          <textarea name="note" placeholder="Special Requests / Notes (Optional)" rows="3" value={formData.note} onChange={handleChange} style={{ width: '100%', padding: '0.75rem 1rem', background: 'transparent', border: '1px solid var(--color-golden)', borderRadius: '5px', color: 'var(--color-white)', fontFamily: 'var(--font-alt)', fontSize: '16px', marginTop: '1rem', resize: 'vertical' }} />
          <button type="submit" className="custom__button" style={{ marginTop: '2rem' }}>Confirm Booking</button>
          {status && <p className="p__opensans" style={{ marginTop: '1rem', color: '#DCCA87' }}>{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Reservation;
