const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js')

const inviteEmbed = new MessageEmbed()
	.setColor('#26d100')
	.setTitle('Xara')
	.setAuthor('OperatorTheDope','https://i.imgur.com/uvHQ7oa.png')
	.setDescription('Bring your friends!')
	.setThumbnail('https://i.imgur.com/uvHQ7oa.png')
	.addFields(
		{ name: 'Invite Link', value: `https://discord.gg/VVYfEat` },
	)
	.setTimestamp()
	.setFooter('Xara', 'https://i.imgur.com/uvHQ7oa.png');

module.exports = class InviteCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'invite',
			group: 'enders',
			memberName: 'invite',
			description: 'Bring friends to this server!',
		});
	}

	run(message) {
		return message.embed(inviteEmbed);
	}
};
