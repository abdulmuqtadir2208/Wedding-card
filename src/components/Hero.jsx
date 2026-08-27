import wedding from "../data/wedding";

function Hero() {
  return (
    <section className="hero">
      <p className="hero-subtitle">Together with their families</p>

      <h1 className="hero-title">
        {wedding.groom.name}
        <span>&</span>
        {wedding.bride.name}
      </h1>

      <p className="hero-date">{wedding.weddingDate}</p>

      <p className="hero-scroll">Scroll to explore ↓</p>
    </section>
  );
}

export default Hero;