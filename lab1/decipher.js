const fs = require('fs');
const run = () => {
  let wordCharAt = '';
  const text = fs.readFileSync('./guia_practica_1.3.txt').toString();
  for (line of text.split('\n')) {
    for (char of line) { 
      if (char.charCodeAt(0) + 18 > 90){ // se pasa de arriba --> aplico modulo
        wordCharAt += String.fromCharCode((char.charCodeAt(0) + 18 + 64) % 90)
      }
      else if (char.charCodeAt(0) > 64) { // está dentro del conjunto [65, .., 90] 
        wordCharAt += String.fromCharCode((char.charCodeAt(0) + 18) % 90)
      } else
        wordCharAt += char
    }
    wordCharAt += "\n"
  }
  console.log(wordCharAt)
}
run()