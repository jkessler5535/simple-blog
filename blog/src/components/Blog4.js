import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import  './Blog4.css';


const Blog4 = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const timeRemaining = getTimeRemaining("Dec 26, 2023");
      setCountdown(timeRemaining);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getTimeRemaining = (dueDate) => {
    const totalSeconds = Date.parse(dueDate) - Date.parse(new Date());
    const days = Math.floor(totalSeconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor((totalSeconds / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((totalSeconds / 1000 / 60) % 60);
    const seconds = Math.floor((totalSeconds / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  return (
    <div className="blog4">
      <Container>
        <div className="Jumbotron countdown-section">
          <h1 className="text-center">Page Coming Soon!</h1>
          <div className="countdown">
            <div className="countdown-item">
              <h2>{countdown.days}</h2>
              <p>Days</p>
            </div>
            <div className="countdown-item">
              <h2>{countdown.hours}</h2>
              <p>Hours</p>
            </div>
            <div className="countdown-item">
              <h2>{countdown.minutes}</h2>
              <p>Minutes</p>
            </div>
            <div className="countdown-item">
              <h2>{countdown.seconds}</h2>
              <p>Seconds</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Blog4;
 