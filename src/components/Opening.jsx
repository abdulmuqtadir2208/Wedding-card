import { useEffect, useState } from "react";

function Opening() {
  const [isCelebrating, setIsCelebrating] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isClosed ? "auto" : "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isClosed]);

  const handleOpen = () => {
    if (isCelebrating) return;

    setIsCelebrating(true);

    setTimeout(() => {
      setIsClosed(true);
    }, 1100);
  };

  const particles = Array.from({ length: 18 });

  return (
    <div
      className={`opening ${
        isClosed ? "opening-hidden" : ""
      }`}
    >
      <div className="opening-content">

        <p className="opening-label">
          Open Me
        </p>

        <div className="opening-arrow">
          ↓
        </div>

        <button
          className={`opening-heart ${
            isCelebrating ? "heart-opening" : ""
          }`}
          onClick={handleOpen}
          aria-label="Open wedding invitation"
          disabled={isCelebrating}
        >
          <span className="heart-shape" />

          {isCelebrating && (
            <span className="celebration">
              {particles.map((_, index) => (
                <span
                  key={index}
                  className="celebration-particle"
                />
              ))}
            </span>
          )}
        </button>

        <p className="opening-hint">
          Click the heart to open
        </p>

      </div>
    </div>
  );
}

export default Opening;