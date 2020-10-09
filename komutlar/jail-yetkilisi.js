const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {
  
   var başarılı = ['**İŞTE BU!** <a:onayland:730792323746627618>', '**SÜPER!** <a:onayland:730792323746627618>', '**NASIL YAPTIN BUNU?!** <a:onayland:730792323746627618>', '**MÜKEMMEL!** <a:onayland:730792323746627618>', '**SEVDİM BUNU!** <a:onayland:730792323746627618>', '**ŞİMDİ OLDU!** <a:onayland:730792323746627618>'];
   var x = başarılı[Math.floor(Math.random() * başarılı.length)];

   var başarısız = ['**TÜH!** <a:arpi:734176376575492136>', '**OLMADI BU!** <a:arpi:734176376575492136>', '**HAY AKSİ!** <a:arpi:734176376575492136>', '**HADİ ORADAN!** <a:arpi:734176376575492136>', '**OLMADI YA!** <a:arpi:734176376575492136>', '**BÖYLE OLMAZ?!** <a:arpi:734176376575492136>', '**HADİ YA!** <a:arpi:734176376575492136>'];
   var x2 = başarısız[Math.floor(Math.random() * başarısız.length)];
  
if (!message.member.hasPermission('MANAGE_GUILD')) return message.reply(`**${ayarlar.prefix}jail-yetkilisi ayarla/sıfırla** isimli komutu kullanabilmek için \`SUNUCUYU YÖNET\` yetkisine sahip olman gerekiyor.`)
if (!args[0]) return message.reply(`Sistemi kullanabilmek için, .jail-yetkilisi ayarla/sıfırla @rol yazmalısın.\nDetaylı bilgi için: .yardım sustur-kanal`)
   
  
  if (args[0] == 'ayarla') {
  
  let yetkilirol = message.mentions.roles.first() || message.guild.roles.find(c => c.name === args[1].join(' '))
  if (!yetkilirol) return message.channel.send(x2 + ` Bir rol etiketle.`)
  
  db.set(`jailyetkilisi_${message.guild.id}`, yetkilirol.id)
  message.channel.send(x + ` Jail yetkilisi ${yetkilirol} olarak ayarlandı.`)
  } 
  

  if (args[0] == 'sıfırla') {
    db.delete(`jailyetkilisi_${message.guild.id}`)
    message.channel.send(x + ` Jail yetkilisi başarıyla sıfırlandı.`)
  }
  
  
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['jailyetkilisi'],
 permLevel: 0
};

exports.help = {
 name: 'jail-yetkilisi',
 description: 'Hangi role sahip kişilerin jaile atabileceğini ayarlarsınız.',
 usage: 'jail-yetkilisi ayarla/sıfırla @rol',
 kategori: '**MODERASYON**',
 permLvl: '**SUNUCUYU YÖNET**'
};