import { motion } from "framer-motion";
import { useEffect } from "react";

const SongGuesser = ({
  onSubmit,
  onSongGuess,
  songGuess,
  notSong,
  notNeighbor,
  setNotNeighbor,
  setNotSong,
  currentSong,
}) => {
  useEffect(() => {
    const handler = (e) => {
      if (e.key == "Enter") {
        onSubmit();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      {" "}
      <div className="song-guess-container">
        <input
          className="song-input"
          placeholder="Enter a song"
          value={songGuess}
          onChange={(event) => {
            onSongGuess(event.target.value);
            setNotNeighbor(false);
            setNotSong(false);
          }}
        ></input>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9, backgroundColor: "#6b6b6b" }}
          onMouseUp={onSubmit}
          className="submit-button"
        >
          Submit
        </motion.div>
      </div>
      {(notSong || notNeighbor) && (
        <div className="error-message">
          * {songGuess} does not share any motifs with {currentSong.name}
        </div>
      )}
    </>
  );
};
export default SongGuesser;
