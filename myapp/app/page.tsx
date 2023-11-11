"use client"
import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(60); // Initial time in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div style={{ textAlign: 'center',marginTop:'200px', }}>
      <h1 style={{fontSize:'3rem',fontWeight:'bold',fontFamily:'cursive'}}>Countdown Timer App</h1>
      <p style={{fontSize:'4rem',fontWeight:'bold',fontFamily:'cursive'}}>{formatTime(timeLeft)}</p>
    </div>
  );
};

export default CountdownTimer;
