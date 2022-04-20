const { Client, Intents } = require("discord.js");
require("dotenv").config();
const client = new Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// client.on("message", function (message) {
//   message.channel.send("My Message");
// });

client.on("messageCreate", (msg) => {
  // console.log(msg);
  msg.react("😍");
  msg.react("🥰");
  msg.react("😗");
  msg.react("😗");
  msg.react("🤓");
  // if (msg.content === "!ping") {
  //   msg.reply("pong");
  // }
});

client.login(process.env.BOT_TOKEN);
