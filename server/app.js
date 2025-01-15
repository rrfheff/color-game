const express = require("express");
const cors = require("cors");
const app = express();
const port = 8501;
const crypto = require("crypto");

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// In-memory storage (for demonstration - consider using a database in production)
const gameStore = {
  readyPlayers: {}, // { gameId: [playerNames] }
  scores: {}, // { gameId: { playerName: score } }
};

const cheatList = [];

// Add at the top with other constants
const clients = new Map(); // Store SSE clients: { gameId: [response objects] }
const SECRET_KEY = "KEfw-asdf-1234-5678-9012"; // In production, use environment variables

// Add this utility function
function validateRequest(payload, token, timestamp) {
  if (!payload) return false;

  // Token is only valid for 10 seconds
  const now = Date.now();
  if (now - parseInt(timestamp) > 10000) return false;

  const expectedToken = crypto
    .createHmac("sha256", SECRET_KEY)
    .update(JSON.stringify({
      ...payload,
      timestamp,
    }))
    .digest("hex");


  const valid = token === expectedToken;
  if (!valid && payload.userName && !cheatList.includes(payload.userName)) {
    cheatList.push(payload.userName);
  }

  return valid;
}

// Endpoint 2: Start Game
app.post("/start", (req, res) => {
  const { gameId } = req.body;
  const { token, timestamp } = req.headers;
  if (!validateRequest(req.body, token, timestamp)) {
    return res.status(403).json({ error: "Invalid token" });
  }

  if (!gameStore.readyPlayers[gameId]) {
    return res.status(400).json({ error: "Game not found" });
  }

  // Initialize scores for this game
  gameStore.scores[gameId] = {};

  // Notify all waiting clients for this game
  const gameClients = clients.get(gameId) || [];
  gameClients.forEach((client) => {
    client.write(`data: ready\n\n`);
  });

  res.json({
    success: true,
    message: "Game started",
    players: gameStore.readyPlayers[gameId],
  });
});

// Endpoint 3: Record Score
app.post("/record", (req, res) => {
  const { gameId, userName, score } = req.body;
  const { token, timestamp } = req.headers;
  // Create payload object (excluding token)
  const payload = { gameId, userName, score };

  // Validate the request
  if (!validateRequest(payload, token, timestamp)) {
    return res.status(403).json({ error: "Don't cheat bro!" });
  }

  if (!gameStore.scores[gameId]) {
    gameStore.scores[gameId] = {};
  }

  gameStore.scores[gameId][userName] = score;

  res.json({
    success: true,
    scores: gameStore.scores[gameId],
  });
});

// Endpoint 4: Query Scores
app.get("/scores/:gameId", (req, res) => {
  const { gameId } = req.params;
  const { token, timestamp } = req.headers;

  if (!validateRequest(req.params, token, timestamp)) {
    return res.status(403).json({ error: "Invalid token" });
  }

  if (!gameStore.scores[gameId]) {
    return res.status(404).json({ error: "Game not found" });
  }

  res.json(
    Object.entries(gameStore.scores[gameId])
      .map(([playerName, score]) => ({
        playerName,
        score,
      }))
      .sort((a, b) => b.score - a.score)
  );
});

// Endpoint 5: Clear Store
app.post("/clear", (req, res) => {
  const { gameId } = req.body;
  const { token, timestamp } = req.headers;
  if (!validateRequest(req.body, token, timestamp)) {
    return res.status(403).json({ error: "Invalid token" });
  }

  if (gameId) {
    // Clear specific game
    delete gameStore.readyPlayers[gameId];
    delete gameStore.scores[gameId];
  } else {
    // Clear all
    gameStore.readyPlayers = {};
    gameStore.scores = {};
  }

  res.json({ success: true });
});

// Add new endpoint for game start notifications
app.get("/listen/:gameId", (req, res) => {
  const { gameId } = req.params;
  const { userName } = req.query;

  // Set headers for SSE
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  if (!gameStore.readyPlayers[gameId]) {
    gameStore.readyPlayers[gameId] = [];
  }

  if (!gameStore.readyPlayers[gameId].includes(userName)) {
    gameStore.readyPlayers[gameId].push(userName);
  }
  // Store client connection
  if (!clients.has(gameId)) {
    clients.set(gameId, []);
  }
  clients.get(gameId).push(res);

  // Remove client on connection close
  req.on("close", () => {
    const gameClients = clients.get(gameId);
    clients.set(
      gameId,
      gameClients.filter((client) => client !== res)
    );
  });
});

// Start server
app.listen(port, () => {
  console.log(`Game server listening at http://localhost:${port}`);
});
