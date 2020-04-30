const Discord = require("discord.js");

exports.run = (client, message, args) => {

    let messageToBot = args.join('');
    message.delete().catch();
    
    let embed = new Discord. MessageEmbed()
    .setTitle("Commande : -invite")
    .setThumbnail("https://zupimages.net/up/20/13/omgq.png")
    .setDescription(`**:infinity: Voici le lien d'invitation du serveur NewCityRp !**\n\n**:ballot_box_with_check: [Invité vos Amis !](https://discord.gg/PefSjyH)**`)
    .setColor("0x061922") 
    .setFooter(`© 2020 : Bot et message créé par l'agriculteur normand | Tout droits réservés.`, `https://zupimages.net/up/20/13/omgq.png`)
     message.channel.send(embed) 
};

module.exports.help = {
    name: "invite",
  };