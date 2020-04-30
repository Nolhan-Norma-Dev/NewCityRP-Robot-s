const Discord = require("discord.js");
    module.exports.run = async (client, message, args) => {

    let messageToBot = args.join('');
    message.delete().catch();

    let embed = new Discord. MessageEmbed()
    .setTitle("Commande : -help")
    .setAuthor("NewCityRP Robot's", "https://zupimages.net/up/20/18/xxih.jpg")
    .setThumbnail("https://zupimages.net/up/20/18/xxih.jpg")
    .setDescription("Effectuer les commandes suivantes :\n\n**__-help-member__** : Pour les commandes pour **Tout le Monde**.\n\n**__-help-admin__** : Pour les commandes pour les **Admins**.\n\n⚠️ Ne faite pas attention aux emojie, c'est pour plus tard !⚠️")
    .setColor(" 0x061922 ")
    .setFooter(`© 2020 : Bot et message créé par l'agriculteur normand | Tous droits réservés.`, `https://zupimages.net/up/20/18/xxih.jpg`)
    
    message.channel.send(embed);
};

module.exports.help = {
    name: "help",
  };