const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === '!ping') {
        
        console.log(`ping de ${message.author.username}, ${message.author.id},${message.author},${message.author.tag}`);
        message.reply('pong');

       }

    if (message.content === '!lapicero') {

        message.reply('eres puto');

        }

    if (message.content.startsWith('!stfu')) {
        const user = message.mentions.users.first();
        message.channel.send(`${user}, ${message.author} dice que te calles`);
        }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret