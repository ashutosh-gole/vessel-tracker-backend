const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const { vessels, updateVesselData } = require("./services/vessels-data");

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

const PORT = 3000;

// Middleware
app.use(cors());

// Endpoint to fetch initial GeoJSON data
app.get("/api/vessels", (req, res) => {
  res.json(vessels);
});

// Simulate real-time updates every 5 seconds
setInterval(() => {
  const updatedData = updateVesselData();
  io.emit("vessels-updated", updatedData);
}, 5000);

// WebSocket connection
io.on("connection", (socket) => {
  console.log("Client connected");
  socket.emit("vessels-updated", vessels);

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
