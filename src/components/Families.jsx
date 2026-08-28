import wedding from "../data/wedding";
import Reveal from "./Reveal";

function Families() {
  return (
    <section className="families" id="families">
      <Reveal className="section-heading">
        <p className="section-label">With love</p>

        <h2>Our Families</h2>

        <p className="section-description">
          With the blessings and love of our families,
          we invite you to celebrate this special occasion with us.
        </p>
      </Reveal>

      <div className="families-grid">
        <Reveal className="family-card">
          <span className="family-symbol">✦</span>

          <h3>{wedding.families.groom.title}</h3>

          <p>{wedding.families.groom.father}</p>
          <p>{wedding.families.groom.mother}</p>
        </Reveal>

        <Reveal className="family-card">
          <span className="family-symbol">✦</span>

          <h3>{wedding.families.bride.title}</h3>

          <p>{wedding.families.bride.father}</p>
          <p>{wedding.families.bride.mother}</p>
        </Reveal>
      </div>
    </section>
  );
}

export default Families;