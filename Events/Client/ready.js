const { Client } = require("discord.js");
const chalk = require("chalk");

module.exports = {
  name: "ready",
  once: true,
  /**
   * @param {Client} client
   */
  execute(client) {
    console.log(chalk.magenta("Pepper >") + " 🔃 Loading status...");
    const statusArray = [
      `help | !help, WATCHING`,
      "the Discord servers, COMPETING",
      "over your server :), WATCHING",
      "for Slash Commands, WATCHING",
    ];
    client.user.setStatus("idle");
    setInterval(() => {
      const random =
        statusArray[Math.floor(Math.random() * statusArray.length)].split(", ");
      const status = random[0];
      const mode = random[1];
      client.user.setActivity(status, { type: mode });
    }, 10000);
    console.log(chalk.magenta("Pepper >") + chalk.green(" ✅ Status loaded!"));
  },
};
