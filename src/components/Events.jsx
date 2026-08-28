import wedding from "../data/wedding";
import Reveal from "./Reveal";

function Events() {
  return (
    <section className="events" id="events">
      <Reveal className="section-heading">
        <p className="section-label">The celebrations</p>

        <h2>Wedding Events</h2>

        <p className="section-description">
          Join us as we celebrate these special moments together.
        </p>
      </Reveal>

      <div className="events-list">
        {wedding.events.map((event, index) => (
          <Reveal className="event-card" key={index}>
            <span className="event-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="event-content">
              <h3>{event.name}</h3>

              <p className="event-date">{event.date}</p>

              <p>{event.time}</p>

              <p>{event.venue}</p>

              <p className="event-address">{event.address}</p>
              <a
                href={event.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="event-button"
                >
                View Location
                </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Events;