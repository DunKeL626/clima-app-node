const axios = require('axios')

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=c9991647484901c40ca233e90632f512&units=metric`)

    return resp.data.main.temp
}

module.exports = {
    getClima
}