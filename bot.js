const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '!';
const cooldowns = new Map();

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName);
    if (!command) return;

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    if (timestamps) {
        const expirationTime = timestamps.get(message.author.id) + (command.cooldown || 3) * 1000;
        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply(`Please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \\`${command.name}\` command.`);
        }
    } else {
        cooldowns.set(command.name, new Map());
    }

    cooldowns.get(command.name).set(message.author.id, now);

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.login('YOUR_TOKEN');