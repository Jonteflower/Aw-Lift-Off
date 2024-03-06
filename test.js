const axios = require('axios')

async function test() {
    const url = 'https://europe-west1-stats-website-969a2.cloudfunctions.net/python_scraper'
    const res = await axios.post(url)
    const data = res.data
    const newEuroObject = {
        Date: data.Date,
        Euro1: data.EuroNumbers[0],
        Euro2: data.EuroNumbers[1],
        Number1: data.Numbers[0],
        Number2: data.Numbers[1],
        Number3: data.Numbers[2],
        Number4: data.Numbers[3],
        Number5: data.Numbers[4],
    }
    console.log(data)
    console.log(newEuroObject)
}

async function getData(){
    const url = 'https://europe-west1-stats-website-969a2.cloudfunctions.net/scrapeLatest'
    const res = await axios.post(url)
    const data = res.data
    console.log(data)
}

getData()