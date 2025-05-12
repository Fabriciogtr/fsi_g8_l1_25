const { log } = require('console');
const fs = require('fs');

function procesar(contenido) {
  contenido = contenido.split('<TR>');
  contenido.shift();
  let toJoin = [];
  for (row of contenido) {
    let cleanRow = "|";
    let columns = row.split('</TD>');
    columns.pop()
    let surname = '';
    for (let i = 0; i < columns.length; i++) {
      let processed = columns[i]
        .replaceAll(/<[^>]*>/g, '')
        .replaceAll(/acute;/g, '')
        .replaceAll(/nbsp;/g, '')
        .replaceAll(/&/g, '')
        // .replaceAll(/@hackme.fsi.org/g, '')
        .trim();
      switch (i) {
        case 0:
          surname = processed.split(',')[0];
          processed = processed.padEnd(48);
        break;
        case 1: 
          processed = processed.padEnd(16);
        break;
        case 2: 
          processed += processed.includes(surname.toLowerCase()) ? " TRUE " : " FALSE "
          processed = processed.padEnd(48);
        break;
      }
      cleanRow += processed + " |"
    }
    toJoin.push(cleanRow);
  }
  
  let resultado = toJoin.join("\n");
  return resultado;
}

function procesarArchivo(archivoEntrada, archivoSalida) {
  try {
    console.log(`Leyendo archivo: ${archivoEntrada}`);
    const contenidoOriginal = fs.readFileSync(archivoEntrada, 'utf8');
    
    console.log('Aplicando modificaciones...');
    const contenidoModificado = procesar(contenidoOriginal);
    
    console.log(`Guardando resultado en: ${archivoSalida}`);
    fs.writeFileSync(archivoSalida, contenidoModificado, 'utf8');
    
    console.log('¡Proceso completado con éxito!');
  } catch (error) {
    console.error('Error durante el proceso:', error.message);
  }
}

const args = process.argv.slice(2);
if (args.length >= 2) {
  const archivoEntrada = args[0];
  const archivoSalida = args[1];
  procesarArchivo(archivoEntrada, archivoSalida);
} else {
  console.log('Uso: node nombre_archivo archivo_html archivo_dest');
}