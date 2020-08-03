const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js')

const formsEmbed = new MessageEmbed()
	.setColor('#26d100')
	.setTitle('Xara')
	.setAuthor('OperatorTheDope','https://i.imgur.com/uvHQ7oa.png')
	.setDescription('You want to join Enders, right..?')
	.setThumbnail('https://i.imgur.com/uvHQ7oa.png')
	.addFields(
		{ name: 'Do you want to join?', value: `[Alright sure.](https://forms.gle/w2EKJ4TBmSrSszEe8 'What are you waiting for?')` },
	)
	.setTimestamp()
	.setFooter('Xara', 'https://i.imgur.com/uvHQ7oa.png');

module.exports = class RecruitCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'recruit',
			group: 'enders',
			memberName: 'recruit',
			description: 'Do you want to become an Ender?',
		});
	}

	run(message) {
		return message.embed(formsEmbed);
	}
};
