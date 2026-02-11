const express = require("express");
const cors = require("cors");
const slackAlertJobApplication = require("./routes/slackAlertJobApplication");

const app = express();

// ✅ Enable CORS for Vite frontend
// app.use(cors({
//   origin: "http://localhost:5173",
//   methods: ["GET", "POST"],
// }));


// app.use(cors({
//   origin: [
//     "http://localhost:5173",
//     "https://azhizen-portfolio-main.vercel.app/",
//     "https://azhizen-portfolio-main.vercel.app",
//     "https://www.azhizen.com/"
//   ],
//   methods: ["GET", "POST"]
// }));


const allowedOrigins = [
  "http://localhost:5173",
  "https://azhizen-portfolio-main.vercel.app",
  "https://www.azhizen.com/"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST"],
}));

// Parse JSON
app.use(express.json());

// Routes
app.use("/api", slackAlertJobApplication);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
