const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js')

let list = [
	"https://tenor.com/view/super-mario-nintendo-64-mario-3d-platformer-gif-17122136",
	"https://tenor.com/view/super-mario-spin-gif-4229075",
	"https://tenor.com/view/super-mario-win-mario-nintendo-gif-5470696",
	"https://tenor.com/view/mario-penguin-drop-gif-9070127",
	"https://tenor.com/view/mario-dancer-break-dance-swag-gif-16562740",
	"https://tenor.com/view/lakitu-camera-filming-movie-super-gif-17122109",
	"https://tenor.com/view/mario-hazy-maze-cave-64-gif-9399952",
	"https://tenor.com/view/nintendo64-mario-super-mario64-nintendo-peach-gif-16974171",
	"https://tenor.com/view/nintendo-super-mario-64-3d-platformer-lava-gif-17122159",
	"https://bit.ly/2W6tIHJ",
	"https://bit.ly/2VNoPmo",
	"https://bit.ly/3gsR0z5",
	"https://bit.ly/2C9ykpj",
	"https://bit.ly/2VScRbc",
	"https://bit.ly/3iCcuey",
	"https://bit.ly/2D5gS5B",
	"https://bit.ly/2ZKMyVy",
	"https://bit.ly/2NWJct1",
	"https://bit.ly/3eanexH"
]

function random(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

module.exports = class MarioCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'mario',
			group: 'memes',
			memberName: 'mario',
			description: 'Replies with a mario meme.',
			throttling: {
				usages: 1,
				duration: 10,
			},
		});
	}

	run(message) {
		return message.say(`Here you go! ${list[random(0,list.length)]}`);
	}
};
