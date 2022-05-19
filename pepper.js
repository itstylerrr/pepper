const DiscordJS = require("discord.js");
const WOKCommands = require("wokcommands");
const path = require("path");
const { bot, owner, extras } = require("./pepper.json");
const { promisify } = require("util");
const { glob } = require("glob")
const PG = promisify(glob)
const ascii = require('ascii-table');

const { Intents } = DiscordJS;

const client = new DiscordJS.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
});

client.on("ready", () => {
  new WOKCommands(client, {
    commandsDir: path.join(__dirname, "Commands"),
    // featuresDir: path.join(__dirname, 'Features'),
    // messagesPath: '',
    typeScript: false,
    showWarns: true,
    delErrMsgCooldown: 60,
    defaultLangauge: "english",
    ignoreBots: false,
    ephemeral: true,
    dbOptions: {
      keepAlive: true,
    },
    testServers: [owner.development.serverId],
    botOwners: owner.development.developers,
    disabledDefaultCommands: [],
    mongoUri: extras.mongo_uri,
    debug: true,
  }).setCategorySettings([
    {
      name: "Fun & Games",
      emoji: "🎮",
    },
    {
      name: "Economy",
      emoji: "💸",
    },
    {
      name: "Configuration",
      emoji: "🚧",
      hidden: true,
    },
    {
      name: "Information",
      emoji: "ℹ️",
    },
    {
      name: "Moderation",
      emoji: "🚔",
    },
    {
      name: "Bot Owner",
      emoji: "👑",
      hidden: true,
    },
    {
      name: "Utilities",
      emoji: "🧰",
    },
  ]);
});

["Events"].forEach(handler => {
    require(`./Handlers/${handler}`)(client, PG, ascii)
});

client.login(bot.token);
