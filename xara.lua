local discordia = require("discordia")
local client = discordia.Client()
local token = ""

--------------------
--/// SETTINGS ///--
--------------------
local settings = {
	prefix = "x!",
	filter = {
		blocked = {"nigger", "nigga", "fag", "faggot", "niggar"},
		messages = {"Thou shall not say blocked words! (Genesis 420:69)"}
	}
}

local OP = {} -- Operator's Library Functions, meant to help you clean up your code!
OP.stringlib = {}
OP.bot = {}

-- OP.Highlight is used to "highlight" certain comments, as they might be hard to see.
-- IDK tho, they're sorta grey in Atom. It might be diff in VSC)
function OP.highlight(message) end
function OP.stringlib.split(inputstr, sep)
	-- copied from stack overflow lmfao
	-- love, operator. this might help you <3
	if sep == nil then
		sep = "%s"
	end
	local t = {}
	for str in string.gmatch(inputstr, "([^" .. sep .. "]+)") do
		table.insert(t, str)
	end
	return t
end

function OP.stringlib.starts(String, Start)
	return string.sub(String, 1, string.len(Start)) == Start
end

function OP.stringlib.trim(s)
	return s:match "^%s*(.-)%s*$"
end

-- storing all images and gifs since 2020!

local list = {
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
}

--------------------
--/// COMMANDS ///--
--------------------

local commands = {
	credit = function(message, args)
		message.channel:send(
		"> Library: Discordia\n" ..
		"> Text Editor: VSCode\n" ..
		"> Language: Luvit\n" ..
		"> https://discord.gg/YCsamHz\n" ..
		"> Code edited by OperatorTheDope, ~~the dark lord of all!~~ an awesome programmer and writer."
		)
	end,
	check = function(message, args)
		message.channel:send("> :white_check_mark: Bot is online.")
	end,
	invite = function(message, args)
		message.channel:send("> :link: https://discord.gg/VVYfEat")
	end,
	recruit = function(message, args)
		message.channel:send("> :link: https://forms.gle/w2EKJ4TBmSrSszEe8")
	end,
	mario = function(message, args)
		math.randomseed(os.time())
		local mv = math.random(1, #list)
		message.channel:send(list[mv])
	end,
	coinflip = function(message, args)
		math.randomseed(os.time())
		local side = math.random(1, 2)
		if side == 1 then
			message.channel:send("Heads")
		elseif side == 2 then
			message.channel:send("Tails")
		else
			message.channel:send("The coin landed on its side!")
		end
	end,

	dev = function(message,args)
	--	OP.highlight("This command has subcommands! Wowies!")

		local subcommands = {
			testembed = function (message,args)
				message.channel:send({
					embed = {
						title = "This is an embed!",
						fields = {
							{name = "Field 1", value = "Some information", inline = true},
							{name = "Field 2", value = "More information", inline = true}
						},
						color = discordia.Color.fromRGB(114, 137, 218).value,
						timestamp = discordia.Date():toISO("T", "Z")
					}
				})
			end
		}

		if subcommands[args[1]] == nil then
			return
		end

		-- Shift the args left, like last time in the command parsing step.
		-- This is to make stuff consistent, so a subcommand doesn't get itself as the 1st argument.
		local scArgs = table.remove(args,1)

		subcommands[scArgs[1]](message,args)
	end
}

-- parse le command
-- make sure the message is the Discordia message
function OP.bot.parseCommand(message)
	-- Operator's Note: Discordia is so similar to the JS one, my knowledge of discord.JS makes me good at Discordia!

	local target = message.content
	-- If doesn't start with prefix, silently return. Shhh.
	if OP.stringlib.starts(target,settings.prefix) == false then
		return
	end

	-- Split the message into different parts with spacebar.
	-- before doing that, YEET the prefix off the message.
	local messageNoPrefix = string.sub(target, #settings.prefix + 1)

	local split = OP.stringlib.split(messageNoPrefix, " ")

	for k, v in pairs(split) do
    print(k,v)
	end
	-- is it a valid command or not..? if not, silently return.
	-- if you want to display something, feel free 2 editz
	if commands[split[1]] == nil then
		message.channel:send("> :no_entry: Invalid Command or Syntax")
		return
	end

	-- shift the table to the left, to remove the command being part of the argument.
	-- to be more clear, it removes the 1st element and shifts the others leftward.
	-- it is a little expensive, but its the best way i could find.
	local args = table.remove(split, 1)

	-- finally, run the command. yeehaw!
	commands[split[1]](message, args)
end

client:on("messageCreate", function(message)
	OP.bot.parseCommand(message) -- parse the command
end)

-------------------
--/// AUTOMOD ///--
-------------------
-- OP.highlight("This client:on() blocks words in the blacklist.")
client:on("messageCreate", function(message)
	str = message.content
	-- make a for loop "for" the words in the blacklist
	-- pun very much intended

	for i = 1, #settings.filter.blocked do
		if string.find(str, settings.filter.blocked[i]) then
			math.randomseed(os.time())
			value = math.random(1, #settings.filter.messages)
			message.author:send(settings.filter.messages[value])
			message:delete()
			break
		end
	end
end)

client:run("Bot " .. token)
