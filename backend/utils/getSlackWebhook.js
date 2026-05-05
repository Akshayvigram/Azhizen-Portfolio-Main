const {
  SecretsManagerClient,
  GetSecretValueCommand
} = require("@aws-sdk/client-secrets-manager");

// CHANGE REGION if needed
const client = new SecretsManagerClient({
  region: "ap-southeast-2"
});

async function getSlackWebhook() {
  const command = new GetSecretValueCommand({
    SecretId: "backend/slack" // 👈 your secret name
  });

  const response = await client.send(command);
  // const response = "https://hooks.slack.com/services/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"

  // Secret stored as key-value JSON
  const secret = JSON.parse(response.SecretString);

  return secret.SLACK_WEBHOOK_URL;
}

module.exports = getSlackWebhook;
