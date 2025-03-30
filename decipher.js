const fs = require('fs');
const run = () => {
  let wordCharAt = '';
  const text = fs.readFileSync('./guia_practica_1.3.txt').toString();
  let i = 0
  for (line of text.split('\n')) {
    i ++ 
    if (i === 6 || i === 7)
      console.log("linea: ", line)
    
    for (char of line) { 
      if (char !== " ") {
          if (char.charCodeAt(0) + 18 > 90){ // se pasa de arriba --> aplico modulo
            wordCharAt += String.fromCharCode((char.charCodeAt(0) + 18 + 64) % 90)
          }
          else if (char.charCodeAt(0) > 64) { // está dentro del conjunto [65, .., 90] 
            wordCharAt += String.fromCharCode((char.charCodeAt(0) + 18) % 90)
          } else
            wordCharAt += char
      } else  
        wordCharAt += char
    }
    wordCharAt += "\n"
  }
  console.log(
    wordCharAt
    // .replaceAll('@', ".")
    // .replaceAll(':', "\"")
    // .replaceAll(';', "\"")
    // .replaceAll('>', ",")
  )
}
run()
// 18