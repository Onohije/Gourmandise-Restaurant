import React, { useState } from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubscribe = async () => {
    if (!email) return;
    setStatus('Subscribing...');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('Subscribed successfully!');
        setEmail('');
      } else {
        setStatus('Subscription failed. Try again.');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setStatus('Network error. Try again later.');
    }
  };

  return (
    <div className='app__newsletter'>
      <div className='app__newsletter-heading'>
        <SubHeading title="Newsletter" />
        <h1 className='headtext__cormorant'>Subscribe to Our Newsletter</h1>
        <p className='p__opensans'>And never miss latest Updates!</p>
      </div>
      <div className='app__newsletter-input flex__center'>
        <input 
          type="email" 
          placeholder='Enter your e-mail address' 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button 
          className='custom__button' 
          onClick={handleSubscribe}
        >
          Subscribe
        </button>
      </div>
      {status && <p className="p__opensans" style={{ marginTop: '1rem', color: '#DCCA87', textAlign: 'center' }}>{status}</p>}
    </div>
  );
};

export default Newsletter;