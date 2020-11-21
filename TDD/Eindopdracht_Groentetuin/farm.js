const getYieldForPlant = (crop, factor) => {
    if (factor === undefined) {
        let totalYield = crop.yield
        return totalYield
    } else {

        // let exFactorArray = Object.entries(factor)

        let cropArray = (Object.entries(crop));
        // console.log(cropArray[2]);
        let growthFactorArray = []
        for (const [key, value] of Object.entries(factor)) {
            // console.log(key);
            // console.log("logs exfactor array--->", exFactorArray);
            // console.log("logs cropfactor array--->", crop.factors);
            console.log("logs crop factors key", (crop.factors[key][value] + 100) / 100);
            growthFactorArray.push((crop.factors[key][value] + 100) / 100)
            // values are in 100
            // get all crop.factors[key][value]);plus 100  then divide by 100, and reduce
            // gets growthfactor eg: values: 100, -50 == 100+-50 == 50/100=0.5
            // eg.: values 100, -50, 50 == 100+-50+50 == 100 =1.0 
            console.log("logs growthfactor for all externals", growthFactorArray);
           

        }
        const reducer = (acc, val) => acc * val;
        growthFactor = growthFactorArray.reduce(reducer)
        let plantYield = crop.yield
        let totalYield = plantYield * growthFactor
        return totalYield
    }
}
// console.log("logs exFactor------------>>>", exFactorArray);
// exFactorArray.forEach(factor=>{
//     console.log(factor);
// })

// let cropFactorArray = [];
// for (const [key, value] of Object.entries(crop)) {
//     cropFactorArray.push(key, value);
// }
// console.log("logs cropFactor------------>>>", cropFactorArray);
// console.log(cropFactorArray.factors[0]);






// let extFactor = factor.sun
// let cropFactor = crop.factors.sun[extFactor]
// let growthPercentage = (100 + cropFactor) / 100
// let totalYield = crop.yield * growthPercentage
// return totalYield



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

