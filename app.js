const Botmaster = require('botmaster');

const botmaster = new Botmaster();


const MessengerBot = Botmaster.botTypes.MessengerBot;


const messengerSettings = {
  credentials: {
    verifyToken: 'abcd1234',
    pageToken: 'EAASOe0ZBk0okBAKHvaUNkVjSokKCpgtZC7vBDeXp688VZCBZCIHHlP601VRZCyLKMZCYmCzmC2KjQTf53sWxzdMxjTQFqK2UfIKdemwceFyE0JLh6MuO0Ois1yOYuuAWbZCKSldxYeACDTmcvUXUXMWoCytJ1rIfY3yM7ZAOZCqvS7QZDZD',
    fbAppSecret: '2e9ef919130f5a4068c9297aa93c129c',
  },
  webhookEndpoint: '/webhook1234', // botmaster will mount this webhook on https://Your_Domain_Name/messenger/webhook1234
};

const messengerBot = new MessengerBot(messengerSettings);

botmaster.addBot(messengerBot);

botmaster.on('update', (bot, update) => {
  console.log(update, null, 2);
  bot.reply(update, 'Hello World!');
});