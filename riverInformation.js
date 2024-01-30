const { database } = require("./data.js")
const { totalRiverKilometers, shortestRiver, longestRiver, findBargainRivers, findPremiumRivers, getRiverDetails } = require("./functions/riverFunctions.js")

const riverTotal = totalRiverKilometers(database.rivers)
const shortRiver = shortestRiver(database.rivers)
const longRiver = longestRiver(database.rivers)
const cheapRivers = findBargainRivers(database.rivers)
const expensiveRivers = findPremiumRivers(database.rivers)
const riverDetails = getRiverDetails(database.rivers)

const displayRiverInformation = () => {
    console.log('***************************************************')
    console.log('*****              R I V E R S                *****')
    console.log('***************************************************\n')

    console.log(`We offer expert guidance on ${riverTotal} kilometers of scenic rivers across the US`)

    console.log(`The shortest river tour is ${shortRiver} kilometers`)
    
    console.log(`The longest river tour is ${longRiver} kilometers \n`)
    
    console.log(`The least expensive river tours are: \n\t${cheapRivers} \n`)
    
    console.log(`The most expensive river tours are: \n\t${expensiveRivers} \n`)

    console.log(`RIVER DETAILS:`)
    console.log(`--------------------------------- \n`)
   
    console.log(riverDetails)
}

module.exports = { displayRiverInformation }