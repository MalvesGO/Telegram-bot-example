## Telegram BOT API example in Nodejs

This is an example program to demonstrate communicating with a BOT created in Telegram's new [BOT API][1]. The nodejs library [`node-telegram-bot`][2] provides an easy way to interface the [Telegram's BOTs][3].

[Telegram's BOTs][3] are essentially an autonomous software API entity that helps in *suppling / receiving* control, information, and content data via the [Telegram Chat client ][4].

This program has simple actuation function which enables or disables two variables representing two physical Relay unit. It also has reporting for temperature, humidity and status of Relay units. Currently both relay units are emulated using variables, but the same can be replaced with actual I/O actuations. Similarly the temperature and humidity values are dummy data can be replaced with correct info based on actual sensor input.

Here is a list of the Commands supported for the BOT in this example:

  * `/gettemp` - To obtain current Temperature

  * `/gethumidity` - To obtain current Humidity values

  * `/getoutputs` - To receive the status of the Relay control units

  * `/setout1 on` or `/setout1 off` - Command the BOT to turn on the Relay1 or turn it off accordingly.

  *`/setout2 on` or `/setout2 off` - Command the BOT to turn on the Relay2 or turn it off accordingly.

Additionally there is one more program to help find the **User ID** details `telegram_getuserid_bot.js`. This is needed to be enable the actual BOT (`telegram_bot.js`)to work.

This software Example has been released under [MIT Open Software License ][5]


  [1]: <https://core.telegram.org/bots/api/>
  [2]: <https://github.com/depoio/node-telegram-bot>
  [3]: <https://core.telegram.org/bots>
  [4]: <https://telegram.org/>
  [5]: <https://github.com/boseji/ESP8266-Store/raw/master/LICENSE>