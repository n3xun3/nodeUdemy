
const { crearArchivoTabla } = require('./helpers/multiplica');
const argv = require('./config/yargs');

console.clear();

crearArchivoTabla(argv.b, argv.l, argv.h)
    .then ( name => console.log(name.rainbow,'creado'))
    .catch(err => console.log(err))
