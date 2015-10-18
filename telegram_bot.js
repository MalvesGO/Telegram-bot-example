//Library Include
var Bot = require('node-telegram-bot');

// Initialize a new Telegram Bot
var bot = new Bot({
	token: '<TOKEN>'
})

// Auth ID obtained by using the telegram_getuserid_bot.js
//   Helps to make sure that the Bot is commanded by only one User or set of users
var AuthorizedUsers = [1111111,]

// Actuated Entities
var Relay1 = false;
var Relay2 = false;

// Attach event on every received message 
bot.on('message', function (message) {
  //echo(message);
  parseMessage(message);
});

// Start the bot
bot.start();
console.log("BOT ready!");

// Function that handles a new message
function echo(message) {
  
  bot.sendMessage({
	  chat_id: message.chat.id,
	  text: 'User ID ' + message.from.id + ' says "' + message.text + '"',
  });
}

// Function that checks if the user is authorized (its id is in the array)
function isAuthorized(userid) {

  for(i = 0; i < AuthorizedUsers.length; i++) 
    if(AuthorizedUsers[i] == userid) return true;
 
  return false;
}

// Function to Process various commands received by the Message
// Function that handles a new message
function parseMessage(message) {

  if(!isAuthorized(message.from.id)) return;

  switch(true) {
  
    case message.text == "/gettemp":
      bot.sendMessage({
        chat_id: message.chat.id,
        text: 'Actual temperature: ' + 25 + '°C',
      });
      break;

    case message.text == "/gethumidity":
      bot.sendMessage({
        chat_id: message.chat.id,
        text: 'Actual humidity: ' + 30 + '%',
      });
      break;

    case message.text == "/getoutputs":
      bot.sendMessage({
        chat_id: message.chat.id,
        text: 'Actual outputs status:\nOutput 1 is ' + 
            Relay1 + '\nOutput 2 is ' + Relay2,
      });
      break;

    case /^\/setout1/.test(message.text):
      var command = message.text.replace("/setout1 ", "");
      if(command.toLowerCase() == "on") {
        Relay1=true;
        bot.sendMessage({
          chat_id: message.chat.id,
          text: 'Output 1 turned ON',
        });
      } else if(command.toLowerCase() == "off") {
        Relay1=false;
        bot.sendMessage({
          chat_id: message.chat.id,
          text: 'Output 1 turned OFF',
        });
      } else
        bot.sendMessage({
          chat_id: message.chat.id,
          text: 'Unknown command: ' + command,
        });    
    break;

    case /^\/setout2/.test(message.text):
      var command = message.text.replace("/setout2 ", "");
      if(command.toLowerCase() == "on") {
        Relay2 = true;
        bot.sendMessage({
          chat_id: message.chat.id,
          text: 'Output 2 turned ON',
        });
      } else if(command.toLowerCase() == "off") {
        Relay2 = false;
        bot.sendMessage({
          chat_id: message.chat.id,
          text: 'Output 2 turned OFF',
        });
      } else
        bot.sendMessage({
          chat_id: message.chat.id,
          text: 'Unknown command: ' + command,
        });
    break;
  }
}
