const { MessageEmbed, MessageActionRow, ButtonBuilder, ButtonStyle } = require('discord.js');

/**
 * Display help menu with categories and paginated command lists.
 */
class HelpCommand {
    constructor(client) {
        this.client = client;
    }

    async execute(interaction) {
        const categories = this.getCategories();
        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Help Menu')
            .setDescription('Use the buttons to navigate through categories.');

        const buttons = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('prev_category')
                    .setLabel('Previous')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('next_category')
                    .setLabel('Next')
                    .setStyle(ButtonStyle.Primary)
            );

        await interaction.reply({ embeds: [embed], components: [buttons] });
    }

    getCategories() {
        // This function should return an object where the keys are category names
        // and the values are arrays of command names.
        return {
            'General': ['help', 'info', 'ping'],
            'Moderation': ['ban', 'kick', 'mute'],
            'Fun': ['joke', 'meme', 'quote'],
        };
    }
}

module.exports = HelpCommand;