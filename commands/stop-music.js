const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stop-music')
        .setDescription('Stop music.'),
        async execute(message) {
            const voice = require('@discordjs/voice');
            const connection = voice.getVoiceConnection(message.guildId);
            if(connection) {
                connection.disconnect();
                message.reply({content: "Saint Anonymous stopped playing music.", ephemeral: true});
            } else {
                message.reply({content: "Saint Anonymous already stopped playing music.", ephemeral: true});
            }
        }
}