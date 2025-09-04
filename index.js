const { createClient } = require('bedrock-protocol');
const axios = require('axios');

// Minecraft sunucu bilgileri
const client = createClient({
  host: 'annesinisevenler.aternos.me',
  port: 35195,
  username: 'HusniyeBot'
});

// Bağlantı olayları
client.on('connect', () => {
  console.log('✅ HusniyeBot sunucuya bağlandı!');
});

client.on('disconnect', (reason) => {
  console.log(`❌ Bağlantı kesildi: ${reason}`);
});

// Render’ı uyanık tutmak için ping sistemi
const renderURL = 'https://husniyebot.onrender.com';

setInterval(() => {
  axios.get(renderURL)
    .then(() => console.log(`📡 Render ping atıldı: ${new Date().toISOString()}`))
    .catch(err => console.error(`Ping hatası: ${err.message}`));
}, 30000);
