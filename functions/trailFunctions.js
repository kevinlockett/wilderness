// Get the sum of all trail kilometers
const totalTrailKilometers = (trails) => {
    let total = 0
    for (const trail of trails) {
        total += trail.lengthInKilometers
    }

    return(Math.round(10 * total) / 10)
}

// Get the shortest of all trails
const shortestTrail = (trailArray) => {
    let shortest = Number.POSITIVE_INFINITY
    for (const trail of trailArray)
        if (trail.lengthInKilometers < shortest) {
            shortest = trail.lengthInKilometers
        }
    
    return shortest
}

// Get the longest of all trails
const longestTrail = (allTrails) => {
    let longest = 0
    for (const trail of allTrails) {
        if (trail.lengthInKilometers > longest) {
            longest = trail.lengthInKilometers
        }
    }

    return longest
}

// Get least expensive trails
const findBargainTrails = (trails) => {
    let bargainTrails = []
    for (const trail of trails) {
        if (trail.price === "$") {
            bargainTrails.push(trail.trailName)
        }        
    }
    bargainTrails = bargainTrails.join(`\n\t`)
    return bargainTrails
}

// Get most expensive trails
const findPremiumTrails = (trails) => {
    let premiumTrails = []
    for (const trail of trails) {
        if (trail.price >= "$$$$") {
            premiumTrails.push(trail.trailName)
        }        
    }
    premiumTrails = premiumTrails.join(`\n\t`)
    return premiumTrails
}

//get trail details

const getTrailDetails = trails => {
    let details = []
    for (trail of trails) {
        details.push(`${trail.trailName} starts at [${trail.latitude}, ${trail.longitude}] and is ${trail.lengthInKilometers} kilometers long. \nThe highlighted plant for the trip is ${trail.plantHighlight}. \n`)
    }
    details = details.join(`\n`)
    return details
}

module.exports = {
    totalTrailKilometers, shortestTrail, longestTrail, findBargainTrails, findPremiumTrails, getTrailDetails
}