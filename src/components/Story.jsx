import wedding from "../data/wedding";
import Reveal from "./Reveal";

function Story() {
  return (
    <section className="story" id="story">
      <Reveal className="story-content">
        <p className="section-label">Our Story</p>

        <h2>{wedding.story.title}</h2>

        <div className="story-divider">✦</div>

        <p className="story-message">
          {wedding.story.message}
        </p>
      </Reveal>
    </section>
  );
}

export default Story;