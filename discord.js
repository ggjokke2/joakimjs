const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
	console.log("Bot Is Ready!")
})

client.on("message", async message => {
  const command = message.content
  if (command === "/help")
    {
      message.channel.send("JLMBTopia Server Commands Are:\n /whoisowner (Who Is Server Owner)\n /usapdt (Who is USA President) ")
    }
})

client.on("message", async message => {
  const command = message.content
  if (command === "hello")
    {
      message.channel.send("Hello!")
    }
})

client.on("message", async message => {
  const command = message.content
  if (command === "/usapdt")
    {
      message.channel.send("USA President is Joe Biden.")
    } 
}) 

