const express = require("express");
const cors = require("cors");
const slackAlertJobApplication = require("./routes/slackAlertJobApplication");

const app = express();

// ✅ Enable CORS for Vite frontend
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
}));

// Parse JSON
app.use(express.json());

// Routes
app.use("/api", slackAlertJobApplication);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
