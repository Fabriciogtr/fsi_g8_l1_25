const fs = require('fs');
const run = () => {
  let wordCharAt = '';
  const text = fs.readFileSync('./guia_practica_1.3.txt').toString();
  for (line of text.split('\n')) {
    for (char of line) {
      if (char !== " ") {
        if (char.charCodeAt(0) + 18 > 90)
          wordCharAt += String.fromCharCode((char.charCodeAt(0) + 18 + 64) % 90)
        else 
          wordCharAt += String.fromCharCode((char.charCodeAt(0) + 18) % 90)
      } else 
        wordCharAt += char
    }
    wordCharAt += "\n"
  }
  console.log(
    wordCharAt
    .replaceAll('@', ".")
    .replaceAll(':', "\"")
    .replaceAll(';', "\"")
    .replaceAll('>', ",")
  )
}
run()
// 18