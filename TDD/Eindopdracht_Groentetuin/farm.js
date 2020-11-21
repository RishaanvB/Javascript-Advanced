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
    if (factor === undefined) {
        console.log("factor is undefined");
        let plantYield = crop.crop.yield
        let cropAmount = crop.numCrops;
        let totalYield = plantYield * cropAmount
        // console.log("logs plantYield in if phase",totalYield);

        return totalYield
    }
    else {
        // console.log("does this even work???,");
        let growthFactorArray = []
        // calculates growthfactor for each of the given external factors in factor parameter, puts in array
        for (const [key, value] of Object.entries(factor)) {
            // console.log("logs external factor",key);
            // console.log("logs external intenstity",value);

            growthFactorArray.push((crop.crop.factors[key][value] + 100) / 100)
        }
        console.log("growthfactorarray----->", growthFactorArray);
        const reducer = (acc, val) => acc * val;
        // multiplies array of growthfactor and multiplies by plantYield
        growthFactor = growthFactorArray.reduce(reducer)
        let plantYield = crop.crop.yield
        let cropAmount = crop.numCrops
        let totalYield = plantYield * cropAmount

        console.log("logs plantYield in else phase", plantYield);
        let totalYieldforCrop = totalYield * growthFactor
        console.log("logs totalYield in end of else phase", totalYield);
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

