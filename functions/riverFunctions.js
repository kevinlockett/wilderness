// Get the sum of all river kilometers
const totalRiverKilometers = (rivers) => {
    let total = 0
    for (const river of rivers) {
        total += river.lengthInKilometers
    }

    return(Math.round(10 * total) / 10)
}

// Get the shortest of all rivers
const shortestRiver = (rivers) => {
    let shortest = Number.POSITIVE_INFINITY
    for (const river of rivers)
        if (river.lengthInKilometers < shortest) {
            shortest = river.lengthInKilometers
        }
    
    return shortest
}

// Get the longest of all rivers
const longestRiver = (rivers) => {
    let longest = 0
    for (const river of rivers) {
        if (river.lengthInKilometers > longest) {
            longest = river.lengthInKilometers
        }
    }

    return longest
}

// Get least expensive river tours
const findBargainRivers = (rivers) => {
    let bargainRivers = []
    for (const river of rivers) {
        if (river.price === "$") {
            bargainRivers.push(river.river)
        }        
    }
    bargainRivers = bargainRivers.join(`\n\t`)
    return bargainRivers
}

// Get most expensive river tours
const findPremiumRivers = (rivers) => {
    let premiumRivers = []
    for (const river of rivers) {
        if (river.price >= "$$$$") {
            premiumRivers.push(river.river)
        }        
    }
    premiumRivers = premiumRivers.join(`\n\t`)
    return premiumRivers
}

const getRiverDetails = rivers => {
    let details = []
    for (river of rivers) {
        details.push(`${river.river} starts at [${river.latitude}, ${river.longitude}] and is ${river.lengthInKilometers} kilometers long. \nThe unique fish for the trip is ${river.uniqueFish}. \n`)
    }
    details = details.join(`\n`)
    return details
}

module.exports = {
    totalRiverKilometers, shortestRiver, longestRiver, findBargainRivers, findPremiumRivers, getRiverDetails
}
