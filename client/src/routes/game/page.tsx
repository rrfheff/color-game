import { useState, useEffect } from "react";
import "./index.css";
import { useSearchParams } from "@modern-js/runtime/router";
import { generateAuthHeader } from "@/generateToken";

// Define types for our color game
type ColorOption = {
  name: string;
  value: string;
};

const COLORS: ColorOption[] = [
  { name: "Red", value: "#FF0000" },
  { name: "Green", value: "#008000" },
  { name: "Blue", value: "#0000FF" },
  { name: "Yellow", value: "#FFD700" },
  { name: "Black", value: "#000000" },
  { name: "White", value: "#FFFFFF" },
  { name: "Purple", value: "#800080" },
  { name: "Pink", value: "#FFC0CB" },
  { name: "Gray", value: "#808080" },
];

const MAX_ERRORS = 3;
const MAX_INTERVAL = 5000; // 5 seconds
const MIN_INTERVAL = 3000; // 3 seconds
const INTERVAL_DECREASE = 200; // Decrease by 200ms each round

const Index = () => {
  const [searchParams] = useSearchParams();
  const gameId = searchParams.get("gameId");
  const [isWaiting, setIsWaiting] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [currentWord, setCurrentWord] = useState<ColorOption | null>(null);
  const [displayColor, setDisplayColor] = useState<ColorOption | null>(null);
  const [previousColor, setPreviousColor] = useState<ColorOption | null>(null);
  const [options, setOptions] = useState<ColorOption[]>([]);
  const [gamePhase, setGamePhase] = useState<
    "welcome" | "display" | "question" | "error" | "gameOver"
  >("welcome");
  const [score, setScore] = useState(0);
  const [errorCount, setErrorCount] = useState(0);
  const [errorType, setErrorType] = useState<"timeout" | "wrong" | null>(null);
  const [roundCount, setRoundCount] = useState(0);
  const [currentInterval, setCurrentInterval] = useState(MAX_INTERVAL);
  const [remainingTime, setRemainingTime] = useState<number>(0);

  const handleStartGame = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!playerName.trim()) {
      return;
    }
    // if gameId is not provided, start a offline game
    if (!gameId) {
      generateRound();
      setGamePhase("display");
      return;
    }

    setIsWaiting(true);

    const eventSource = new EventSource(
      `http://www.w23kg7.top:8898/listen/${gameId}?userName=${playerName}`,
    );
    eventSource.onmessage = function (event) {
      if (event.data === "ready") {
        setIsWaiting(false);
        generateRound();
        setGamePhase("display");
      }
    };
  };

  // Add reset game function
  const resetGame = () => {
    setScore(0);
    setErrorCount(0);
    setErrorType(null);
    setRoundCount(0);
    setCurrentInterval(MAX_INTERVAL);
    generateRound();
    setGamePhase("display");
  };

  // Generate random colors for display
  const generateRound = () => {
    const wordColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    const textColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    setCurrentWord(wordColor);
    setDisplayColor(textColor);
  };

  // Generate answer options
  const generateOptions = (correctColor: ColorOption) => {
    const shuffledColors = [...COLORS]
      .filter((c) => c !== correctColor)
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);

    const allOptions = [...shuffledColors, correctColor].sort(
      () => Math.random() - 0.5
    );

    setOptions(allOptions);
  };

  // Start new round
  useEffect(() => {
    generateRound();
  }, []);

  // Add function to calculate interval based on round count
  const calculateInterval = (round: number) => {
    const newInterval = MAX_INTERVAL - round * INTERVAL_DECREASE;
    return Math.max(newInterval, MIN_INTERVAL);
  };

  // Modified useEffect for timer with countdown
  useEffect(() => {
    if (gamePhase === "display") {
      setRemainingTime(currentInterval / 1000);
      const mainTimer = setTimeout(() => {
        setPreviousColor(displayColor);
        generateOptions(displayColor!);
        generateRound();
        setGamePhase("question");
      }, currentInterval);

      // Add countdown timer
      const countdownInterval = setInterval(() => {
        setRemainingTime((prev) => Math.max(0, prev - 0.1));
      }, 100);

      return () => {
        clearTimeout(mainTimer);
        clearInterval(countdownInterval);
      };
    } else if (gamePhase === "question") {
      setRemainingTime(currentInterval / 1000);
      const mainTimer = setTimeout(() => {
        setErrorType("timeout");
        setErrorCount((prev) => prev + 1);
        setGamePhase("error");

        setTimeout(() => {
          if (errorCount + 1 >= MAX_ERRORS) {
            setGamePhase("gameOver");
          } else {
            setRoundCount(0);
            setCurrentInterval(MAX_INTERVAL);
            generateRound();
            setGamePhase("display");
          }
        }, 2000);
      }, currentInterval);

      // Add countdown timer
      const countdownInterval = setInterval(() => {
        setRemainingTime((prev) => Math.max(0, prev - 0.1));
      }, 100);

      return () => {
        clearTimeout(mainTimer);
        clearInterval(countdownInterval);
      };
    }
  }, [gamePhase, displayColor, errorCount, currentInterval]);

  // Modified handleAnswer
  const handleAnswer = (selectedColor: ColorOption) => {
    if (selectedColor === previousColor) {
      setScore(score + 1);
      setRoundCount((prev) => prev + 1);
      const newInterval = calculateInterval(roundCount + 1);
      setCurrentInterval(newInterval);
      setPreviousColor(displayColor);
      generateOptions(displayColor!);
      generateRound();
    } else {
      setErrorType("wrong");
      setErrorCount((prev) => prev + 1);
      setGamePhase("error");

      setTimeout(() => {
        if (errorCount + 1 >= MAX_ERRORS) {
          setGamePhase("gameOver");
        } else {
          setRoundCount(0); // Reset round count on error
          setCurrentInterval(MAX_INTERVAL); // Reset interval on error
          generateRound();
          setGamePhase("display");
        }
      }, 2000);
    }
  };

  // Helper function to render hearts
  const renderHearts = () => {
    const hearts = [];
    const remainingHearts = MAX_ERRORS - errorCount;

    for (let i = 0; i < remainingHearts; i++) {
      hearts.push(
        <span key={i} className="heart">
          ❤️
        </span>
      );
    }
    for (let i = remainingHearts; i < MAX_ERRORS; i++) {
      hearts.push(
        <span key={i} className="heart empty">
          🖤
        </span>
      );
    }

    return hearts;
  };

  useEffect(() => {
    if (gamePhase === "gameOver" && gameId) {
      fetch(`http://www.w23kg7.top:8898/record`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...generateAuthHeader({
            gameId: gameId,
            userName: playerName,
            score: score,
          }),
        },
        body: JSON.stringify({
          gameId: gameId,
          userName: playerName,
          score: score,
        }),
      })
    }
  }, [gamePhase]);

  return (
    <div className="container-box">
      {gamePhase === "welcome" ? (
        <div className="welcome-screen">
          <h1>Welcome to Color Memory Game!</h1>

          <div className="game-rules">
            <h2>How to Play:</h2>
            <ol>
              <li>A colored word will be shown for 5 seconds</li>
              <li>
                Then you'll see a new word and must remember the{" "}
                <strong>color</strong> of the previous word
              </li>
              <li>
                Select the correct color from the options within the time limit
              </li>
              <li>
                You have 3 lives (❤️❤️❤️) - game ends if you make 3 mistakes
              </li>
              <li>
                The game gets faster as you progress:
                <ul>
                  <li>Starting time: 5 seconds</li>
                  <li>Time decreases by 0.2 seconds each round</li>
                  <li>Minimum time: 3 seconds</li>
                </ul>
              </li>
              <li>
                Mistakes happen when you:
                <ul>
                  <li>Choose the wrong color</li>
                  <li>Don't answer within the time limit</li>
                </ul>
              </li>
              <li>
                After any mistake:
                <ul>
                  <li>Time resets to 5 seconds</li>
                </ul>
              </li>
            </ol>
          </div>

          {!isWaiting ? (
            <form onSubmit={handleStartGame}>
              <input
                type="text"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                placeholder="Enter your name"
                className="name-input"
                maxLength={20}
                required
              />
              <button type="submit" className="start-button">
                Start Game
              </button>
              {!gameId && (
                <p className="offline-hint">
                  No game ID detected - you'll be playing in offline mode
                </p>
              )}
            </form>
          ) : (
            <div className="waiting-screen">
              <h2>Waiting for game to start...</h2>
              <p>Game ID: {gameId}</p>
              <button
                onClick={() => setIsWaiting(false)}
                className="cancel-button"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="stats">
            <span>Player:</span>
            <span className="player-name">{playerName}</span>
            <span>HP:</span>
            <span className="hearts">{renderHearts()}</span>
            <span>Score:</span>
            <span>{score}</span>
          </div>

          {gamePhase === "display" && currentWord && displayColor && (
            <div className="color-word" style={{ color: displayColor.value }}>
              {currentWord.name}
            </div>
          )}

          {gamePhase === "question" && currentWord && displayColor && (
            <>
              <div className="color-word" style={{ color: displayColor.value }}>
                {currentWord.name}
              </div>
              <div className="question-phase">
                <div className="question">
                  What was the color of the previous word?
                </div>
                <div className="timer-display">
                  Time remaining: {remainingTime.toFixed(1)}s
                </div>
                <div className="options">
                  {options.map((color, index) => (
                    <button
                      key={color.name}
                      onClick={() => handleAnswer(color)}
                      className="option-button"
                    >
                      {String.fromCharCode(65 + index)}: {color.name}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          {gamePhase === "error" && (
            <div className="error-message">
              {errorType === "timeout"
                ? "Time's up! The correct color was "
                : "Wrong answer! The correct color was "}
              <b>{previousColor?.name}</b>
            </div>
          )}

          {gamePhase === "gameOver" && (
            <div className="game-over">
              <div>Game Over! Final Score: {score}</div>
              <button onClick={resetGame} className="play-again-button">
                Play Again
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Index;
