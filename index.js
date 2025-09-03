const { createClient } = require('bedrock-protocol');

const client = createClient({
  host: 'annesinisevenler.aternos.me',
  port: 35195,
  username: 'HusniyeBot',
  offline: true
});

client.on('join', () => {
  console.log('✅ HusniyeBot içeride nöbette!');
});

