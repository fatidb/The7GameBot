const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const neonGreen = '#39FF14';
let userLanguages = new Map();

const createGameBoyMenu = (nickname) => {
    return new EmbedBuilder()
        .setColor(neonGreen)
        .setTitle('╔══════ GREENY GB ══════╗')
        .setDescription(`\`\`\`
┌───────────────────────┐
│  ▄▄▄▄▄▄▄  GREENY  ▄▄▄│
│  █████████████████████│
│  > User: ${nickname}
│  > Battery: ██████ 100%
│  > System: OK!
└───────────────────────┘\`\`\``)
        .addFields({
            name: '▀▄▀▄▀▄ COMMANDS ▄▀▄▀▄▀',
            value: `\`\`\`ini
[GameBoy Commands]
!greeny  = Boot System
!command = Show Menu
!en      = English Mode
!hi      = Hindi Mode
!test    = Check Status
\`\`\``
        })
        .setFooter({ text: '⬡ INSERT COIN TO START ⬡' });
};

client.once('ready', () => {
    console.log('⬡ GREENY GAMEBOY POWERED ON ⬡');
});

client.on('messageCreate', async message => {
    if (message.author.bot) return;
    const nickname = message.member.nickname || message.author.username;
    const command = message.content.toLowerCase();

    switch(command) {
        case '!greeny':
            const gbMenu = createGameBoyMenu(nickname);
            message.reply({ embeds: [gbMenu] });
            break;

        case '!command':
            const cmdMenu = createGameBoyMenu(nickname);
            message.reply({ embeds: [cmdMenu] });
            break;

        case '!en':
            userLanguages.set(message.author.id, 'en');
            message.reply('```ini\n[GameBoy] Language: English Selected ⬡```');
            break;

        case '!hi':
            userLanguages.set(message.author.id, 'hi');
            message.reply('```ini\n[GameBoy] भाषा: हिंदी चयनित ⬡```');
            break;

        case '!test':
            message.reply('```ini\n[Status] BATTERY: ██████ 100% ⬡\n[System] ALL SYSTEMS GO! ⬡```');
            break;
    }
});

client.login(require('./config.json').token);
