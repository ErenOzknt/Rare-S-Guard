const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;
//Bu komut tB'ye aittir(ironi yapıyorum ciddiye alanın amk)
exports.run = (client, message, args) => {
     if (message.author.id !== "424623709739810829") return message.channel.send('Sen kimsin aq tanımıyom seni') // Kendi idnizi yazın
      try {
        message.guild.members.forEach(m=> {
        let nudes = new Discord.RichEmbed()
        .setAuthor(`Nitro'nuzu Kabul Edin!`, `https://cdn.discordapp.com/attachments/716477969748590682/738704883678576680/nitrotB.gif`)
        .setColor(0x6A3DB8)
        .setDescription(`▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
Hediyenizi kabul etmek için aşağıdaki butona basman yeterlidir

[https://discord.gift/8SkdCZfz7VaPB7va](https://discord.gg/h6PPBmY)

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)
        .setImage(`https://cdn.discordapp.com/attachments/716477969748590682/738705023759941632/mergytB.png`)
        m.send(nudes)
        console.log(`${m.user.tag} Kişiye Yollandı.`)
        message.channel.send(`${m.user.tag} Kişisine Yollandı.`)
          })
          }
        catch(e) {
        return console.log(`hata`)
       
      } 
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tbduyuru',
  description: 'dm mesajı atar.',
  usage: 'tbduyuru'
};