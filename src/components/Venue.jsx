import wedding from "../data/wedding";
import Reveal from "./Reveal";

function Venue() {
  return (
    <section className="venue" id="venue">
      <Reveal className="section-heading">
  <p className="section-label">The celebration</p>

  <h2>Join Us</h2>

  <p className="section-description">
    We would be delighted to celebrate this special day
    with you.
  </p>
</Reveal>

      <Reveal className="venue-card">
        <div className="venue-symbol">✦</div>

        <h3>{wedding.venue.name}</h3>

        <p className="venue-address">
          {wedding.venue.address}
        </p>

        <p className="venue-date">
          6 November 2026 · 7:30 PM
        </p>

        <a
          href={wedding.venue.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="venue-button"
        >
          Get Directions
        </a>
     </Reveal>
    </section>
  );
}

export default Venue;