import { useState } from "react";
import wedding from "../data/wedding";
import Reveal from "./Reveal";

function RSVP() {
  const [response, setResponse] = useState(null);

  return (
    <section className="rsvp" id="rsvp">
      <Reveal className="rsvp-content">
        <p className="section-label">RSVP</p>

        <h2>{wedding.rsvp.title}</h2>

        <p className="rsvp-message">
          {wedding.rsvp.message}
        </p>

        {!response ? (
          <div className="rsvp-actions">
            <button
              className="rsvp-button rsvp-primary"
              onClick={() => setResponse("yes")}
            >
              Yes, I'll Be There
            </button>

            <button
              className="rsvp-button"
              onClick={() => setResponse("no")}
            >
              Sorry, I Can't Make It
            </button>
          </div>
        ) : (
          <div className="rsvp-response">
            {response === "yes" ? (
              <>
                <div className="rsvp-symbol">✦</div>
                <h3>We can't wait to celebrate with you!</h3>
                <p>Thank you for letting us know.</p>
              </>
            ) : (
              <>
                <div className="rsvp-symbol">♡</div>
                <h3>We'll miss you!</h3>
                <p>Thank you for letting us know.</p>
              </>
            )}
          </div>
        )}
      </Reveal>
    </section>
  );
}

export default RSVP;