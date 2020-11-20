const getYieldForPlant = (crop, factor) => {
    if (factor === undefined) {
        return crop.yield
    } else {
        let sunFactor = factor.sun
        //   get crop factor
        let cropFactor = crop.factors.sun[sunFactor]
        //   calculate growthpercentage = yield * low/medium/high
        // low = 100 + factor /100
        console.log("logs cropfactorintensity--->", crop.factors.sun[sunFactor]);
        let growthPercentage = (100 + cropFactor) / 100
        console.log(growthPercentage);
        let totalYield = crop.yield * growthPercentage
        return totalYield

    }
}

const getYieldForCrop = (crop) => {
    let plantYield = crop.crop.yield
    let cropAmount = crop.numCrops;
    return (plantYield * cropAmount)
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



const getRevenueForCrop = (input) => {
    let salePrice = input.crop.salePrice
    let plantYield = input.crop.yield
    let cropAmount = input.numCrops
    let totalYield = (plantYield * cropAmount)
    let revenue = (salePrice * totalYield)
    return revenue

}


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

