const { MessageEmbed } = require("discord.js");
module.exports = {
name: "info",
description: "`info bot`",
category: "Global",
aliases: ["detail"],
run: async (client, message, args, level) => {
//command
  if(message.author.id != 696991307155111967){
    const noperms = new MessageEmbed()
    .setDescription("Owner - Dinosik#5507 ")
    .setColor("YELLOW");
    return message.channel.send(noperms)
  } 

let servers_count = message.client.guilds.cache.size;
var myarray = [];
message.client.guilds.cache.keyArray().forEach(async function(item, index) {

let guildMember = message.client.guilds.cache.get(item).memberCount;
myarray.push(guildMember)
})
let sum = myarray.reduce(function (a, b) {
return a + b
});

let totalSeconds = message.client.uptime / 1000;
let days = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400;
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);

let uptime = `\`\`\`${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds\`\`\``;

let embed = new MessageEmbed()

.setTitle(`**[Support Server]**`)
  .setDescription(`Music Bot Kwai **${message.client.user.username}** My Owner: Dinosik#5507.`)

  .setTitle(`${message.client.user.username} Stats`)
  .addFields(
    { name: "Watching Servers:", value: `\`\`\`${servers_count}\`\`\``, inline: true },
    { name: "Watching Users:", value: `\`\`\`${sum}\`\`\``, inline: true },
    { name: " Channels",value: `\`\`\`${message.client.channels.cache.size}\`\`\``, inline: true },
    { name: "Ping:",value: `\`\`\`${Math.round(message.client.ws.ping)} ms\`\`\``, inline: true },

  )
  .setColor("3498DB")
  .setFooter("Thank for using bot")  

return message.channel.send(embed);
    return message.react("<:astroz_correct:825597747800309770>");
}
};

console.log("stats working")