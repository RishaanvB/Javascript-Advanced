const getYieldForPlant = (crop, factor) => {
    if (factor === undefined) {
        let totalYield = crop.yield
        return totalYield
    }
    else {
        let growthFactorArray = []
        // calculates growthfactor for each of the given external factors in factor parameter, puts in array
        for (const [key, value] of Object.entries(factor)) {
            growthFactorArray.push((crop.factors[key][value] + 100) / 100)
        }
        const reducer = (acc, val) => acc * val;
        // multiplies array of growthfactor and multiplies by plantYield
        growthFactor = growthFactorArray.reduce(reducer)
        let plantYield = crop.yield
        let totalYield = plantYield * growthFactor
        return totalYield
    }
}





const getYieldForCrop = (crop, factor) => {
    let plantYield = crop.crop.yield
    let cropAmount = crop.numCrops;
    let totalYield = plantYield * cropAmount
    if (factor === undefined) {
        // console.log("factor is undefined"); //<--Why is this logging multiple times?
        return totalYield
    }
    else {
        let growthFactorArray = []
        // calculates growthfactor for each of the given external factors in factor parameter, puts in array
        for (const [key, value] of Object.entries(factor)) {
            growthFactorArray.push((crop.crop.factors[key][value] + 100) / 100)
        }
        const reducer = (acc, val) => acc * val;
        // multiplies array of growthfactor and multiplies by plantYield
        growthFactor = growthFactorArray.reduce(reducer)
        let totalYieldforCrop = totalYield * growthFactor
        return totalYieldforCrop
    }

}


const getTotalYield = ({ crops }) => {
    let newArray = []
    crops.forEach(crop => {
        newArray.push(getYieldForCrop(crop))
    });
    const reducer = (acc, val) => acc + val;
    let totalYield = newArray.reduce(reducer)
    return totalYield
}




const getCostsForCrop = (input) => {
    let seedCost = input.crop.seedCosts
    let cropAmount = input.numCrops
    let costForCrop = (seedCost * cropAmount)
    return costForCrop
}



const getRevenueForCrop = (input,factor) => {
    let salePrice = input.crop.salePrice
    let plantYield = input.crop.yield
    let cropAmount = input.numCrops
    let totalYield = (plantYield * cropAmount)
    let revenue = (salePrice * totalYield)
    return revenue

}

// external factors do NOT  affect getCostsforCrop
// external factors DO affect getRevenueforCrop, so first update getRevenueForCrop???
const getProfitForCrop = (input) => {
    let profit = getRevenueForCrop(input) - getCostsForCrop(input)
    return profit

}

// bereken de winst voor meerdere crops (zonder omgevingsfactoren): getTotalProfit

const getTotalProfit = ({ crops }) => {
    let newArray = []
    crops.forEach(crop => {
        newArray.push(getProfitForCrop(crop))
    });
    const reducer = (acc, val) => acc + val;
    let totalYield = newArray.reduce(reducer)
    return totalYield
}
module.exports = {
    getYieldForPlant: getYieldForPlant,
    getYieldForCrop: getYieldForCrop,
    getTotalYield: getTotalYield,
    getCostsForCrop: getCostsForCrop,
    getRevenueForCrop: getRevenueForCrop,
    getProfitForCrop: getProfitForCrop,
    getTotalProfit: getTotalProfit,
}

