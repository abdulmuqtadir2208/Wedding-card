import { useEffect, useState } from "react";
import wedding from "../data/wedding";

function Countdown() {
  const calculateTimeLeft = () => {
    const difference =
      new Date(wedding.weddingDate).getTime() - new Date().getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isComplete: true,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),
      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),
      seconds: Math.floor(
        (difference / 1000) % 60
      ),
      isComplete: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown">
      <p className="countdown-label">Counting down to the celebration</p>

      {timeLeft.isComplete ? (
        <h2 className="countdown-complete">
          The celebration has begun!
        </h2>
      ) : (
        <div className="countdown-grid">
          <div className="countdown-item">
            <span>{timeLeft.days}</span>
            <small>Days</small>
          </div>

          <div className="countdown-item">
            <span>{timeLeft.hours}</span>
            <small>Hours</small>
          </div>

          <div className="countdown-item">
            <span>{timeLeft.minutes}</span>
            <small>Minutes</small>
          </div>

          <div className="countdown-item">
            <span>{timeLeft.seconds}</span>
            <small>Seconds</small>
          </div>
        </div>
      )}
    </section>
  );
}

export default Countdown;