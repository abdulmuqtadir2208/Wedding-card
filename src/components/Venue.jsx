import wedding from "../data/wedding";

function Venue() {
  return (
    <section className="venue">
      <div className="section-heading">
        <p className="section-label">The celebration</p>

        <h2>Join Us</h2>

        <p className="section-description">
          We would be delighted to celebrate this special day
          with you.
        </p>
      </div>

      <div className="venue-card">
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
      </div>
    </section>
  );
}

export default Venue;