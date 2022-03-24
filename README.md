# Saint-Anonymous

A Discord bot to create Anonymous Prayer Requests and more

## Setup Instructions

1. Download this repo
2. Add a 'config.json' to the root directory. It should have the format below

See [this repo's Wiki - Chapter 2](https://github.com/JoshuaTheEngineer/joshua-creates-a-discord-bot/wiki/How-to-Create-a-Discord-Bot#ch-2-setup-your-discord-bot-app-for-the-server) for values.

```
{
    "clientId": "${CLIENT_ID}",
	"guildId": "${GUILD_ID}",
	"token": "${TOKEN}"
}
```

3. Run `npm install` to install dependencies
4. Run `node deploy-commands.js` to setup commands
5. Create a Discord invite link via [this repo's Wiki - Chapter 2](https://github.com/JoshuaTheEngineer/joshua-creates-a-discord-bot/wiki/How-to-Create-a-Discord-Bot#ch-2-setup-your-discord-bot-app-for-the-server).
6. Run `node .` to start the Bot.
