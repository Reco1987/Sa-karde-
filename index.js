const { createClient } = require('bedrock-protocol');
const axios = require('axios');
const express = require('express');

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
const renderURL = 'https://husniyebot.onrender.com'; // kendi Render URL’in

setInterval(() => {
  axios.get(renderURL)
    .then(() => console.log(`📡 Render ping atıldı: ${new Date().toISOString()}`))
    .catch(err => console.error(`Ping hatası: ${err.message}`));
}, 30000); // her 30 saniyede bir ping

// Render’ın HTTP port taramasını geçmek için Express sunucusu
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('HusniyeBot çalışıyor!');
});

app.listen(PORT, () => {
  console.log(`🌐 Express sunucusu ${PORT} portunda çalışıyor`);
});
