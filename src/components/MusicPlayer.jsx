import { useEffect, useRef, useState } from "react";
import wedding from "../data/wedding";

function MusicPlayer() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const audioRef = useRef(null);

  const currentNasheed = wedding.nasheeds[currentIndex];

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;

    setProgress(0);

    if (isPlaying) {
      audio.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, [currentIndex]);

  const togglePlay = () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    }
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;

    if (!audio || !audio.duration) return;

    setProgress(
      (audio.currentTime / audio.duration) * 100
    );
  };

  const handleSeek = (event) => {
    const audio = audioRef.current;

    if (!audio || !audio.duration) return;

    const value = Number(event.target.value);

    audio.currentTime =
      (value / 100) * audio.duration;

    setProgress(value);
  };

  const nextNasheed = () => {
    setCurrentIndex(
      (currentIndex + 1) % wedding.nasheeds.length
    );

    setIsPlaying(true);
  };

  const previousNasheed = () => {
    setCurrentIndex(
      (currentIndex - 1 + wedding.nasheeds.length) %
        wedding.nasheeds.length
    );

    setIsPlaying(true);
  };

  const handleEnded = () => {
    setCurrentIndex(
      (currentIndex + 1) % wedding.nasheeds.length
    );
  };

  return (
    <div
      className={`music-player ${
        isOpen ? "music-player-open" : ""
      }`}
    >
      <button
        className="music-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={
          isOpen
            ? "Close music player"
            : "Open music player"
        }
        aria-expanded={isOpen}
      >
        <span className="music-icon">
          {isPlaying ? "♫" : "♪"}
        </span>
      </button>

      {isOpen && (
        <div className="music-panel">

          <audio
            ref={audioRef}
            src={currentNasheed.src}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleEnded}
            preload="metadata"
          />

          {/* Album Disc */}

          <div
            className={`album-disc ${
              isPlaying ? "album-disc-playing" : ""
            }`}
          >
            <img
              src={currentNasheed.cover}
              alt={`${currentNasheed.title} cover`}
              className="album-cover"
            />

            <div className="disc-center">
              <span />
            </div>
          </div>

          {/* Song Information */}

          <p className="music-label">
            Nasheed
          </p>

          <h3 className="music-title">
            {currentNasheed.title}
          </h3>

          <p className="music-artist">
            {currentNasheed.artist}
          </p>

          {/* Progress */}

          <input
            className="music-progress"
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleSeek}
            aria-label="Music progress"
          />

          {/* Controls */}

          <div className="music-controls">

            <button
              className="music-control"
              onClick={previousNasheed}
              aria-label="Previous Nasheed"
            >
              ◀
            </button>

            <button
              className="music-play"
              onClick={togglePlay}
              aria-label={
                isPlaying
                  ? "Pause Nasheed"
                  : "Play Nasheed"
              }
            >
              {isPlaying ? "❚❚" : "▶"}
            </button>

            <button
              className="music-control"
              onClick={nextNasheed}
              aria-label="Next Nasheed"
            >
              ▶
            </button>

          </div>

          <p className="music-count">
            {currentIndex + 1} /{" "}
            {wedding.nasheeds.length}
          </p>

        </div>
      )}
    </div>
  );
}

export default MusicPlayer;