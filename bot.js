const Discord = require("discord.js");

const client = new Discord.Client();

client.on("ready", function () {
    console.log("Bot started!");
});

client.on('message', async (message) => {
    const content = message.content.toLowerCase();
    if (content === 'starti' && message.member && message.member.voice && message.member.voice.channel && message.author.id === "411220992577503242") {
        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play('https://streams.ilovemusic.de/iloveradio104.mp3');
        dispatcher.setVolume(0.1);
    }
});

client.login("Njk4NTE2NDMyMTc0MTg2NjI3.XpG-vQ.ozOWLrDGHqJ2RG72KBeojg15Yxs");
