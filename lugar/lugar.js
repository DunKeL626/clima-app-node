const axios = require('axios')

const getLugarLatLng = async(dir) => {
    const encodeUrl = encodeURI(dir)
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'x-rapidapi-key': '1fbf48966dmshb90a90b9cce1c1fp1d10f3jsn8e40ce5cf79b' }
    })

    const resp = await instance.get()

    if (resp.data.Results.length === 0) throw new Error(`No hay resultados para ${dir}`)

    const data = resp.data.Results[0]
    const direccion = data.name
    const lat = data.lat
    const lng = data.lon

    return {
        direccion,
        lat,
        lng

    }

}

module.exports = {
    getLugarLatLng
}