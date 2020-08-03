const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js')

module.exports = class PingCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'ping',
			aliases: ['check','ms','latency','lagtest','lag'],
			group: 'enders',
			memberName: 'ping',
			description: 'Get the latency between Discord and Xara.',
		});
	}

	run(message) {
		let pingEmbed = new MessageEmbed()
			.setColor('#26d100')
			.setTitle('Xara')
			.setAuthor('OperatorTheDope','https://i.imgur.com/uvHQ7oa.png')
			.setDescription('How fast is Xara\'s connection to Discord?')
			.setThumbnail('https://i.imgur.com/uvHQ7oa.png')
			.addFields(
				{ name: 'Latency', value: `My current latency is ${Math.round(this.client.ws.ping)} ms.` },
				{ name: 'What does latency mean?', value:
				`Latency (or lag) is the time it takes for a packet to reach the server over the Internet.
				 It affects how fast you get your responses.` },
			)
			.setTimestamp()
			.setFooter('Xara', 'https://i.imgur.com/uvHQ7oa.png');

		return message.embed(inviteEmbed);
	}
};
