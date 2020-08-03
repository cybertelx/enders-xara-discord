const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
	commandPrefix: 'x!',
	owner: [406435436810993674,293826314807410690],
	invite: 'https://discord.gg/VVYfEat',
});

client.registry
.registerDefaultTypes()
.registerGroups([
	['misc', 'Miscellaneous'],
	['enders', 'Enders'],
	['memes', 'Memes'],
])
.registerDefaultGroups()
.registerDefaultCommands()
.registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
	console.log(`Xara > Running as ${client.user.tag}.`);
	// Set the client user's activity
	client.user.setActivity('over the Fortress', { type: 'WATCHING' })
  	.catch(console.log);
});

client.on('error', console.error);

client.login("NzM1NTgyMzQ3MTI2MjQzNDI4.XxiWcg.Rq5XEjX5T_QKGT3v0fBD6Op1U-s");
