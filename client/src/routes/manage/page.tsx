import { useState } from "react";
import "./index.css";
import { generateAuthHeader } from "@/generateToken";

interface ScoreData {
  playerName: string;
  score: number;
}

export default () => {
  const [gameIdStart, setGameIdStart] = useState("");
  const [gameIdQuery, setGameIdQuery] = useState("");

  const [scores, setScores] = useState<ScoreData[]>([]);
  const [message, setMessage] = useState({ text: '', type: '' });

  const showMessage = (text: string, type: 'success' | 'error') => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: '', type: '' }), 3000);
  };

  const handleStartGame = async () => {
    try {
      const response = await fetch('http://www.w23kg7.top:8898/start', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...generateAuthHeader({ gameId: gameIdStart }),
        },
        body: JSON.stringify({ gameId: gameIdStart }),
      });
      
      if (response.ok) {
        showMessage('Game started successfully!', 'success');
      } else {
        showMessage('Failed to start game', 'error');
      }
    } catch (error) {
      showMessage('Error starting game', 'error');
    }
  };

  const handleQueryScores = async () => {
    try {
      const response = await fetch(`http://www.w23kg7.top:8898/scores/${gameIdQuery}`, {
        headers: generateAuthHeader({ gameId: gameIdQuery }),
      });
      const data = await response.json();
      
      if (response.ok) {
        setScores(data);
        if (data.length === 0) {
          showMessage('No scores found for this game', 'error');
        }
      } else {
        showMessage('Failed to fetch scores', 'error');
      }
    } catch (error) {
      showMessage('Error fetching scores', 'error');
    }
  };

  const handleClearData = async () => {
    if (!window.confirm('Are you sure you want to clear all data?')) {
      return;
    }

    try {
      const response = await fetch('http://www.w23kg7.top:8898/clear', {
        method: 'POST',
        headers: generateAuthHeader({}),
      });
      
      if (response.ok) {
        setScores([]);
        showMessage('Data cleared successfully', 'success');
      } else {
        showMessage('Failed to clear data', 'error');
      }
    } catch (error) {
      showMessage('Error clearing data', 'error');
    }
  };

  if (!localStorage.getItem("color-game-token")) {
    return null;
  }

  return (
    <div className="manage-page">
      <div className="manage-section">
        <h2>Start Game</h2>
        <div className="manage-form">
          <input
            type="text"
            className="manage-input"
            value={gameIdStart}
            onChange={(e) => setGameIdStart(e.target.value)}
            placeholder="Enter Game ID"
          />
          <button className="manage-button" onClick={handleStartGame}>
            Start Game
          </button>
        </div>
      </div>

      <div className="manage-section">
        <h2>Query Scores</h2>
        <div className="manage-form">
          <input
            type="text"
            className="manage-input"
            value={gameIdQuery}
            onChange={(e) => setGameIdQuery(e.target.value)}
            placeholder="Enter Game ID"
          />
          <button className="manage-button" onClick={handleQueryScores}>
            Query Scores
          </button>
        </div>
        
        {scores.length > 0 && (
          <table className="score-table">
            <thead>
              <tr>
                <th>Player Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {scores.map((score, index) => (
                <tr key={index}>
                  <td>{score.playerName}</td>
                  <td>{score.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="manage-section">
        <h2>Clear Data</h2>
        <button className="manage-button danger" onClick={handleClearData}>
          Clear All Data
        </button>
      </div>

      {message.text && (
        <div className={`${message.type}-message`}>
          {message.text}
        </div>
      )}
    </div>
  );
};
