const TeleBot = require('telebot');

const bot = new TeleBot('853390516:AAEcULt4RFe0UKGgNywvrYQvcDYMmotAK3k')

bot.on(/^\/s (.+)$/, async function(msg, props) {
  const id = msg.chat.id;
  const url = "https://google.com";
  const message = `Read more about [Google](${url}) now!!!!`;

  return bot.sendMessage(id, message, { parseMode: 'Markdown' });
});

bot.start();
