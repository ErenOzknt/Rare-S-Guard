const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.guild) return message.author.sendMessage('Bu Komutu Sadece Sunucularda Kulanabilirsiniz!');

    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let tag = 'そ'
    const codare = new Discord.RichEmbed()
        .setColor("RED")
    .setTitle(`<a:king:734176611007463465> そ 𝕀𝕟𝕗𝕚𝕟𝕚𝕥𝕪 𝔸𝕣𝕞𝕪 𝕂𝕚𝕟𝕘𝕕𝕠𝕞 <a:king:734176611007463465>`)
        .addField("Sunucudaki üye sayısı", message.guild.memberCount)
        .addField("Çevrimiçi üye sayısı", message.guild.members.filter(m => !m.user.bot && m.user.presence.status !== "offline").size)
        .addField("Seslideki üye sayısı", count)
        .addField("<a:pembeking:734177063178731641> Tagdaki üye sayısı <a:oeeey:763461308594782259>", message.guild.members.filter(m => m.user.username.includes(tag)).size)
    message.channel.send(codare);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sayı'],
    permLevel: 0
};

exports.help = {
    name: 'say',
    description: 'Say',
    usage: '+say'
};