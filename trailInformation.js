const { database } = require("./data.js")
const { totalTrailKilometers, shortestTrail, longestTrail, findBargainTrails, findPremiumTrails, getTrailDetails } = require("./functions/trailFunctions.js")

const trailTotal = totalTrailKilometers(database.trails)
const shortTrail = shortestTrail(database.trails)
const longTrail = longestTrail(database.trails)
const cheapTrails = findBargainTrails(database.trails)
const expensiveTrails = findPremiumTrails(database.trails)
const trailDetails = getTrailDetails(database.trails)        

const displayTrailInformation = () => {
    console.log('***************************************************')
    console.log('*****              T R A I L S                *****')
    console.log('***************************************************\n')

    console.log(`We service ${trailTotal} kilometers of wilderness trails across the US`)    
    
    console.log(`The shortest trail is ${shortTrail} kilometers`)
    
    console.log(`The longest trail is ${longTrail} kilometers \n`)
    
    console.log(`The least expensive trails are: \n\t${cheapTrails} \n`)
    
    console.log(`The most expensive trails are: \n\t${expensiveTrails} \n`)
    
//    console.log(`TRAIL DETAILS:`)
//    console.log(`--------------------------------- \n`)
    
//    console.log(trailDetails)
}

module.exports = { displayTrailInformation }