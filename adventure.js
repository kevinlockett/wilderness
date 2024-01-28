const { trails } = require("./data/trailData.js")
const { rivers } = require("./data/riverData.js")
const { totalTrailKilometers, shortestTrail, longestTrail, findBargainTrails, findPremiumTrails, getTrailDetails } = require("./functions/trailFunctions.js")
const { totalRiverKilometers, shortestRiver, longestRiver, findBargainRivers, findPremiumRivers, getRiverDetails } = require("./functions/riverFunctions.js")
    

console.log(`
    B J Ö R N ' S   W I L D N E R N E S S   A D V E N T U R E S
    ***********************************************************

                                                        ###
        ______                                         #o###
       /     /\\     (              ______            #####o###
      /     /  \\     )            /     /\\          #o#\\#|#/###
     /_____/----\\_    (          /     /  \\          ###\\|/#o#
    '     '          ).         /_____/----\\_         # }|{  #
   _ ___          O (:') o      '  '     '   '          }|{
  (@))_))        O ~/~~\\~ o                             }|{
                  o     O                          ____/   \\____
                     O
`)


console.log('***************************************************')
console.log('*****              T R A I L S                *****')
console.log('***************************************************\n')
const trailTotal = totalTrailKilometers(trails)
console.log(`We service ${trailTotal} kilometers of wilderness trails across the US`)

const shortTrail = shortestTrail(trails)
console.log(`The shortest trail is ${shortTrail} kilometers`)

const longTrail = longestTrail(trails)
console.log(`The longest trail is ${longTrail} kilometers \n`)

const cheapTrails = findBargainTrails(trails)
console.log(`The least expensive trails are: \n\t${cheapTrails} \n`)

const expensiveTrails = findPremiumTrails(trails)
console.log(`The most expensive trails are: \n\t${expensiveTrails} \n`)

console.log(`TRAIL DETAILS:`)
console.log(`--------------------------------- \n`)

const trailDetails = getTrailDetails(trails)
console.log(trailDetails)

console.log('***************************************************')
console.log('*****              R I V E R S                *****')
console.log('***************************************************\n')
const riverTotal = totalRiverKilometers(rivers)
console.log(`We offer expert guidance on ${riverTotal} kilometers of scenic rivers across the US`)

const shortRiver = shortestRiver(rivers)
console.log(`The shortest river tour is ${shortRiver} kilometers`)

const longRiver = longestRiver(rivers)
console.log(`The longest river tour is ${longRiver} kilometers \n`)

const cheapRivers = findBargainRivers(rivers)
console.log(`The least expensive river tours are: \n\t${cheapRivers} \n`)

const expensiveRivers = findPremiumRivers(rivers)
console.log(`The most expensive river tours are: \n\t${expensiveRivers} \n`)

console.log(`RIVER DETAILS:`)
console.log(`--------------------------------- \n`)

const riverDetails = getRiverDetails(rivers)
console.log(riverDetails)
