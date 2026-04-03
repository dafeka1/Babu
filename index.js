const mineflayer = require('mineflayer')
const autome = require('mineflayer-auto-auth')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'play.lapizmc.space',
    username: 'Babu3090',
    version: '1.21.1',
    auth: 'offline'
  })

  // This one line replaces all your manual /login and /register detection
  autome(bot, 'MisuBabu@3939')

  bot.on('spawn', () => {
    console.log('Babu3090 is online and authenticated!')
    bot.physics.enabled = false
  })

  bot.on('kicked', (reason) => console.log('Kicked:', JSON.stringify(reason)))
  bot.on('error', (err) => console.log('Error:', err))

  // Reconnect logic
  bot.on('end', () => {
    console.log('Disconnected. Reconnecting in 60s...')
    setTimeout(createBot, 60000)
  })
}

createBot()
