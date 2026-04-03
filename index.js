const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'play.lapizmc.space',
    username: 'Babu3090',
    version: '1.21.1',
    auth: 'offline'
  })

  bot.on('message', (jsonMsg) => {
    const message = jsonMsg.toString()
    console.log('Server says:', message)

    // Manual Auth for Babu3090
    if (message.includes('/register') || message.includes('register')) {
      bot.chat('/register MisuBabu@3939 MisuBabu@3939')
    }
    if (message.includes('/login') || message.includes('login')) {
      bot.chat('/login MisuBabu@3939')
    }
  })

  bot.on('spawn', () => {
    console.log('Babu3090 is in! Waiting for auth...')
    bot.physics.enabled = false
  })

  bot.on('end', () => {
    console.log('Disconnected. Reconnecting in 1 minute...')
    setTimeout(createBot, 60000)
  })

  bot.on('error', (err) => console.log('Error:', err))
}

createBot()
