import { useState } from "react";
import wedding from "../data/wedding";

function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section className="gallery" id="gallery">
      <div className="section-heading">
        <p className="section-label">Memories</p>

        <h2>Our Story</h2>

        <p className="section-description">
          A collection of moments leading to this beautiful celebration.
        </p>
      </div>

      <div className="gallery-grid">
        {wedding.gallery.map((photo, index) => (
          <button
            className="gallery-item"
            key={index}
            onClick={() => setSelectedPhoto(photo)}
            aria-label={`Open photo ${index + 1}`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {selectedPhoto && (
        <div
          className="lightbox"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setSelectedPhoto(null)}
            aria-label="Close image"
          >
            ×
          </button>

          <img
            src={selectedPhoto.src}
            alt={selectedPhoto.alt}
            className="lightbox-image"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default Gallery;