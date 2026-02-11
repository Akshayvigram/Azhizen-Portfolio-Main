const express = require("express");
const axios = require("axios");
const getSlackWebhook = require("../utils/getSlackWebhook");

const router = express.Router();

router.post("/notify-slack", async (req, res) => {
  try {
    const {
      jobTitle,
      firstName,
      lastName,
      email,
      phone,
      experienceCount
    } = req.body;

    const webhookUrl = await getSlackWebhook();

    const message = {
      text: `*New Job Application Received*\n
*Job:* ${jobTitle}
*Name:* ${firstName} ${lastName}
*Email:* ${email}
*Phone:* ${phone}
*Applied At:* ${new Date().toLocaleString()}
      `,
    };

    await axios.post(webhookUrl, message);

    res.json({ success: true });
  } catch (error) {
    console.error("Slack notification failed:", error.message);
    res.status(500).json({ error: "Slack notification failed" });
  }
});

module.exports = router;
