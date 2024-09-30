import { useEffect } from "react";
import { useState, useRef } from "react";
import "./AudioPlayer.css";

const AudioPlayer = ({ audioSrc }) => {
  // State variable to manage the player's status and current time.
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);

  //Function to seek to a specific time in the audio.
  const handleSeek = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };

  // Function to update the current time and duration of the audio
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  // Function to handle playing the audio.
  const handlePlay = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  // Function to handle pausing the audio.
  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  //Function to toggle between play and pause state.
  const handlePlayPause = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  // Function to format the duration of the audio in 'mm:ss' format.
  function formatDuration(durationSeconds) {
    const minutes = Math.floor(durationSeconds / 60);
    const seconds = Math.floor(durationSeconds % 60);
    const formattedSeconds = seconds.toString().padStart(2, "0");
    return `${minutes}:${formattedSeconds}`;
  }

  // Use an effect to listen for 'timeupdate' events from the audi element and update
  useEffect(() => {
    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    // Clean up the event listener when the component unmounts
    return () => {
      audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <div className="player-card">
      {/*<img
        src="/imagenes/logito.png"
        alt="Cover Image"
        className="player-card-image"
  />*/}

      <div>
        {/* Play/Pause button with a dynamic icon */}
        <button onClick={handlePlayPause} className="player-btn">
          {isPlaying ? (
            <img src="/imagenes/pause.png" width="52" height="52" />
          ) : (
            <img src="/imagenes/playboton.png" width="50" height="50" />
          )}
        </button>
      </div>

      <div className="contenedor-input-duration">
        {/* Input range for seeking within the audio track.  */}
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleSeek}
        />

        {/* The <audio> element for playing the audio. */}
        <audio ref={audioRef} src={audioSrc} />

        {/* Display current and total duration of the track*/}
        <div className="track-duration">
          <p style={{ color: "white" }}>{formatDuration(currentTime)}</p>
          <p style={{ color: "white" }}>{formatDuration(duration)}</p>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
