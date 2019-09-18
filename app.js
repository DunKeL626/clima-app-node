const info = require('./info/info')
const argv = require('./config/yargs').argv

info.getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)