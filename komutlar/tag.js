const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {

  message.channel.send(' <a:king:734176611007463465> **Yüce Tagımız**<a:uyar:730792832662503555> \n**そ** Klanımıza Katılmak İçin Tagımızı İsminize Ekleyin').then(message=>{
    var espriler = ['<a:no:696825145322635264> Yüce Tagımız \n- yaprock']
    var espri = espriler[Math.floor(Math.random() * espriler.length)];
    });
}
                     
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['y'],
    permLevel: 0
};

exports.help = {
    name: "tags",
  category: "",
  usage: "tags"
}