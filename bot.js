const Discord = require("discord.js");
const calculate = require("node-static");
const client = new Discord.Client({autoReconnect:true});
const http = require('http');
const hook2 = new Discord.WebhookClient('376534450978422788', 'ufA849ESXIzmE7am6Z0mJw5fEJBW85zkDrAZfnAs1sm6LX3L25FZhxUgb8XXXPnY8e_g'); //376534450978422788/ufA849ESXIzmE7am6Z0mJw5fEJBW85zkDrAZfnAs1sm6LX3L25FZhxUgb8XXXPnY8e_g
var mante = ('У Файл бота есть вебхук!');
const hook = new Discord.WebhookClient('345506660850204673', 'l6L6dvynvrFEIanmiQBUHsUkZRZiIrbl6cgwy088e4HjXc8294IRK9nfb-ppox7k8NNO');
var server = ('0 \n P.S - 0 означает (выключен, Minecraft), а 1 наоборот (включен)');
var fs = require('fs');
var prompt = require('prompt');
const hookmante = new Discord.WebhookClient('376534450978422788', 'ufA849ESXIzmE7am6Z0mJw5fEJBW85zkDrAZfnAs1sm6LX3L25FZhxUgb8XXXPnY8e_g');
const hostname = '127.0.0.1';
const port = 3000;
const rich = require('discord-rich-presence')('340847842526494721');


var error_joke = ('E:\File Bot\node_modules\discord.js\src\structures\MessageEmbed.js:13       Object.defineProperty"this, client, "" value: message.client "" \n TypeError: Cannot read property {client} of undefined \n at new MessageEmbed (E:\File Bot\node_modules\discord.js\src\structures\MessageEmbed.js:13:60) \n at Client.client.on.message (E:\File Bot\bot.js:62:21) \n at Client.emit (events.js:193:15) \n at MessageCreateHandler.handle (E:\File Bot\node_modules\discord.js\src\client\websocket\packets\handlers\MessageCreate.js:9:34) \n at WebSocketPacketManager.handle (E:\File Bot\node_modules\discord.js\src\client\websocket\packets\WebSocketPacketManager.js:103:65) \n at WebSocketConnection.onPacket (E:\File Bot\node_modules\discord.js\src\client\websocket\WebSocketConnection.js:333:35) \n at WebSocketConnection.onMessage (E:\File Bot\node_modules\discord.js\src\client\websocket\WebSocketConnection.js:296:17) \n at WebSocket.onMessage (E:\File Bot\node_modules\ws\lib\event-target.js:120:16) \n at WebSocket.emit (events.js:188:13) \n at Receiver._receiver.onmessage (E:\File Bot\node_modules\ws\lib\websocket.js:137:47)');
client.login('MzQwODQ3ODQyNTI2NDk0NzIx.DH2jzg.r7TBvvvCYAks_TBr_iEXEwBMMdY');
var news = ('OdysseyOST! Теперь Марио!');
var news2 = ('Новость с дизайном команд'); // Новость

rich.updatePresence({
    state: 'А хочешь, я дам тебе бутерброд?',
    details: 'Привет, я Файл Бот!',
    startTimestamp: Date.now(),
    endTimestamp: Date.now() + 1337,
    largeImageKey: 'what',
    largeImageText: 'Чего, чё за хрень?!',
    smallImageKey: 'faaaak',
    smallImageText: 'Факт: из-за этого робота меня забанили на ХайпСкваде, но значок забыли убрать)',
    partyId: 'ae488379-351d-4a4f-ad32-2b9b01c91657',
    partySize: 1,
    partyMax: 666,
    spectateSecret: 'MTIzNDV8MTIzNDV8MTMyNDU0',
    joinSecret: 'MTI4NzM0OjFpMmhuZToxMjMxMjM=',
    instance: true,
});



function commandIs(str, msg){
    return msg.content.startsWith("g!" + str); // Префикс
}

client.on('ready', () => {
    console.log('Бот в онлайне!');
    client.user.setActivity('код | g!help', { type: 1 });  //client.user.setGame('g!help'); client.user.setActivity('код', { type: 3 });
    prompt.start(); //375944488696283136 5TzOisivTPsDL1cZ7MB80wmY94SDiSOpAQkPQh_8TVR3Wgrxd47w-TcKcV-x9UC9x2p6
});

client.on('message', message => { // Команды
    var args = message.content.split(/[ ]+/);
    if (commandIs("Пинг", message)) {
        message.channel.send('Понг');
        console.log(message.author.username + " - Пинг");
    }
    if (commandIs("say", message)) {
        var args = message.content.split(" ")
        message.channel.startTyping()
        setTimeout(function () {
            message.channel.send(message.content.substring(args[0].length))
            message.channel.stopTyping()
        }, message.content.length * 100)
        console.log(message.author.username + " - Скажи");
    }
    if (commandIs("hello", message)) {
        message.channel.send('Привет!');
        console.log(message.author.username + " - Привет")
    }
    if (commandIs("tag", message)) {
        message.channel.send('Ваш тег: ' + message.author.tag);
        console.log("Теги")
    }
    if (commandIs("myname", message)) {
        message.channel.send('Я бот.');
        console.log("Моё имя");
    }
    if (commandIs("yourname", message)) {
        message.channel.send(`Твоё имя наверное: ` + message.author.username + '.');
        console.log("Твоё имя");
    }
    if (commandIs("help", message)) {
        message.channel.send('Ну ладно держи команды: \n g!help - помощь, \n g!yourname - бот узнает твоё имя, \n g!myname - кто я, \n g!hello - привествие. \n g!dp - Команда сделана в шутку \n g!Пинг - Понг \n g!dialog - Простой диалог. \n g!servers - На каком количестве серверовв запущен бот. \n g!say - Повторение ваших слов. \n MinecraftOST - OST Майнкрафта, GFallsOST - OST Гравити Фолз, OdysseyOST - OST Super Mario Odyssey, UndertaleOST - OST Undertale. \nПока больше нет команд на данный момент. \n Посмотрите секретные команды: http://www.sergeysites23.ultimatefreehost.in/fbot.net/scmd.txt \nПригласите бота на другой сервер: http://discordapp.com/oauth2/authorize?client_id=340847842526494721&scope=bot');
        console.log("Помоги!");
    }
    if (commandIs("txt", message)) {
        message.channel.send(error_joke);
        console.log("Ошибочка");
    }
    if (commandIs("dp", message)) {
        message.channel.send(`В этом шестнадцатаречном коде написан пароль и емал Сергея от Discord: 37584D4E14333C140E2E2D0E2E1E140E2F190E2E190E2E1A0E2E2E0E2F1B0E2E190E2E1E0E2F1B`);
        console.log("Взлом по шуточному");
    }
    if (commandIs("author", message)) {
        message.channel.send(`Автор бота: Пиксельная собака триггерит (Сергей)`);
        console.log("Автор");
    }
    if (commandIs("fs.write", message)) {
        var args = message.content.split(" ")
        var args2 = message.content.split(" + ")
        fs.writeFileSync(args2[0].substring(args[0].length), args2[1])
        message.channel.send(`Файл создан.`);
        console.log("Записать файл");
    }
    if (commandIs("servers", message)) {
        message.channel.send(`Бот запущен на ${client.guilds.size} серверах`);
        console.log("Сервера");
    }
    if (commandIs("file_read", message)) {
        var args = message.content.split(" ")
        fs.readFile(message.content.substring(args[0])), { encoding: 'utf-8' }, function (err, data) {
            console.log("Прочитать файл");
            if (err) {
                message.channel.sendMessage(err);
            } else {
                message.channel.sendMessage(data);
            }
        };
    }

    // Секретные команды

    if (commandIs("poop", message)) {
        const embed = new Discord.MessageEmbed()
        message.channel.send(message.author.username + ` - :poop: (:`);
        console.log("Говно");
    }
    if (commandIs("xp", message)) {
        message.channel.send(message.author.username + `, у тебя Windows слетела до XP`);
        console.log("Хехех, я хацкер!");
    }
    if (commandIs("system32", message)) {
        message.channel.send(message.author.username + `, у тебя папка system32 была удалена \n Перезагрузи комп и у тебя не загрузится комп!`);
        console.log("system32");
    }

//376534450978422788 ufA849ESXIzmE7am6Z0mJw5fEJBW85zkDrAZfnAs1sm6LX3L25FZhxUgb8XXXPnY8e_g
});

