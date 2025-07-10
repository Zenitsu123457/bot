const mineflayer = require('mineflayer');

let bot;
function startBot() {
  bot = mineflayer.createBot({
    host: 'xaboudix.aternos.me', // عدل هذا إذا تغير IP
    port: 24202,                  // عدل هذا إذا تغير البورت
    username: 'AFK_Bot',
    version: false
  });

  bot.on('login', () => console.log('✅ Bot logged in!'));
  bot.on('end', () => {
    console.log('❌ Bot disconnected, retrying in 5s...');
    setTimeout(startBot, 5000);
  });
  bot.on('error', err => console.log('⚠️ Error:', err));
}

startBot();
