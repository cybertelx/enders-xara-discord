const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js')

function random(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

const creditEmbed = new MessageEmbed()
	.setColor('#26d100')
	.setTitle('Xara')
	.setAuthor('OperatorTheDope','https://i.imgur.com/uvHQ7oa.png')
	.setDescription('This is credit to my creators.')
	.setThumbnail('https://i.imgur.com/uvHQ7oa.png')
	.addFields(
		{ name: 'Original Developer', value: 'ixNoah (ixNoah#7146)' },
		{ name: 'Made for', value: 'Zarcana (Zarcana#8483)', inline: true },
		{ name: 'Rewritten by', value: 'OperatorTheDope (operator#7596)', inline: true },
		{ name: 'More Info', value:
		`This Discord bot was originally coded very sloppily in Discordia,
		 then was rewritten to be much better, but then Repl.it didn\'t
		 support Luvit, so it was rewritten by Operator for Node.JS. `, inline: false },
	)
	.setTimestamp()
	.setFooter('Xara', 'https://i.imgur.com/uvHQ7oa.png');

module.exports = class CreditsCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'credits',
			group: 'misc',
			memberName: 'credits',
			description: 'Who made this bot?'
		});
	}

	run(message) {
		return message.embed(creditEmbed);
	}
};
