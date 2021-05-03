const fs = require('fs');
const color = require('colors');


const crearArchivoTabla = async(base, listar, hasta=10) => {

    try {
        let salida = '';
        let consola = '';
        
        for(let i=1; i < hasta; i++){
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        }
        if(listar === true){
            console.log('========================================='.green);
            console.log('            Tabla del:'.green, color.blue(base));
            console.log('========================================='.green);

            console.log(consola);
        }
        
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt`;
    }catch (error) {
        throw(error);
    }
   
}

module.exports = {
    crearArchivoTabla
}