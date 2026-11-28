import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const WinScreen = ({
  newGame,
  wonGame,
  solution,
  wonDaily,
  onRandom,
  setDifficulty,
  mode,
  hideWin,
  setHideWin,
}) => {
  const [showSolution, setShowSolution] = useState(false);
  const navigate = useNavigate();

  const MAX_DIFFICULTY = 5;
  const MIN_DIFFICULTY = 2;

  return (
    <>
      {wonGame && <Confetti />}
      {!hideWin && (
        <div className="win-text-container">
          <div className="win-top">
            <motion.div
              className="win-x"
              whileHover={{ scale: 1.1, color: "yellow" }}
              whileTap={{ scale: 0.9 }}
              onMouseUp={() => {
                setHideWin(true);
              }}
            >
              X
            </motion.div>
          </div>
          {wonGame && <div className="win-text">YOU WIN!!!</div>}
          {!wonGame && <div className="win-text">GAME OVER</div>}
          <div className="answer-reveal-container">
            <div className="answer">Shortest Solution: {solution.length}</div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onMouseUp={() => {
                setShowSolution(!showSolution);
              }}
              className={`win-button button-border ${showSolution ? "selected" : ""}`}
            >
              Show?
            </motion.div>
          </div>
          {showSolution && (
            <div className="solution-container">
              {solution.map((songName) => {
                return <div className="solution-song">{songName}</div>;
              })}
            </div>
          )}
          {mode == "endless" && (
            <>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="button-border win-button"
                onMouseUp={() => {
                  navigate("/");
                }}
              >
                Play Daily?
              </motion.div>
            </>
          )}
          {mode == "daily" && (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="button-border win-button"
              onMouseUp={() => {
                navigate("/endless");
              }}
            >
              Endless Mode?
            </motion.div>
          )}
          {mode == "endless" && (
            <motion.div
              className="play-again"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onMouseUp={() => {
                if (onRandom) {
                  var tempDiff =
                    Math.floor(
                      Math.random() * (MAX_DIFFICULTY - MIN_DIFFICULTY),
                    ) + MIN_DIFFICULTY;
                  setDifficulty(tempDiff);
                } else {
                  newGame();
                }
              }}
            >
              Play Again?
            </motion.div>
          )}
        </div>
      )}
    </>
  );
};
export default WinScreen;
