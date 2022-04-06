const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "BOT",
  description: "Invite",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`Information`)
    .setDescription(`<:link:845315257430048788>  [invite bot](https://discord.com/api/oauth2/authorize?client_id=961217956648468500&permissions=8&scope=bot) or [support server ](https://discord.gg/XzpaTrvkPj)`)
    .setColor("RANDOM")
    .setFooter(`made by Dinosik `)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}