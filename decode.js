const fs = require('fs');
const base64_message = fs.readFileSync('./base64_message.txt', 'utf8'); 
const b64_buff = Buffer.from(base64_message.trim(), 'base64'); 
const decoded = b64_buff.toString('utf8');
console.log(decoded);
