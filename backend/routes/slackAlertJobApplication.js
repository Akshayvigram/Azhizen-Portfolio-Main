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
      city,
    } = req.body;

    const webhookUrl = await getSlackWebhook();

    // const webhookUrl = "https://hooks.slack.com/services/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";
    const message = {
      text: `*New Job Application Received*\n
*Job:* ${jobTitle}
*Name:* ${firstName} ${lastName}
*Email:* ${email}
*Phone:* ${phone}
*City:* ${city}
*Applied At:* ${new Date().toLocaleString()}
      `,
    };

    await axios.post(webhookUrl, message);

    res.json({ success: true, message: "Alert Sent" });
  } catch (error) {
    console.error("Slack notification failed:", error.message);
    res.status(500).json({ error: "Slack notification failed" });
  }
});

module.exports = router;
