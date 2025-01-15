import { useState } from 'react';
import { useNavigate } from '@modern-js/runtime/router';

export default () => {
  const [gameId, setGameId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/game?gameId=${gameId}`);
  };

  return (
    <div className="prepare-page">
      <h1>Join Game</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={gameId}
          onChange={(e) => setGameId(e.target.value)}
          placeholder="Enter Game ID"
          required
        />
        <button type="submit">Join Game</button>
      </form>
    </div>
  );
}