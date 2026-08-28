import { useEffect, useState } from "react";

function Opening() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "auto" : "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className={`opening ${isOpen ? "opening-hidden" : ""}`}>
      <div className="opening-content">
        <p className="opening-label">Open Me</p>

        <div className="opening-arrow">↓</div>

        <button
          className="opening-heart"
          onClick={handleOpen}
          aria-label="Open wedding invitation"
        >
          <span>♥</span>
        </button>

        <p className="opening-hint">
          Click the heart to open
        </p>
      </div>
    </div>
  );
}

export default Opening;