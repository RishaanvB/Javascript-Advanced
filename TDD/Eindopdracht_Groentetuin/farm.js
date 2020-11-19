const getYieldForPlant = function (veggieName) {
    return veggieName.yield
}

const getYieldForCrop = (veggieName) => {
    let plantYield = veggieName.crop.yield
    let cropAmount = veggieName.numCrops;
    return (plantYield * cropAmount)
}
//gets total crops yield--> multiplies yield and numCrop per cropitem
const getTotalYield = ({ crops }) => {
    let newArray = []
    crops.forEach(crop => {
        let plantYield = crop.crop.yield
        let cropAmount = crop.numCrops
        newArray.push(plantYield * cropAmount)
    });
    const reducer = (acc, val) => acc + val;
    let totalYield = newArray.reduce(reducer)
    return totalYield
}


// calculate costs for specific crop :getCostsForCrop
// costs = 1 veggie = 1 cost 
// costs are crop * costs


const getCostsForCrop = (input) => {
    let seedCost = input.crop.seedCosts
    let cropAmount = input.numCrops
    let costForCrop = (seedCost * cropAmount)
    return costForCrop
}

//calculate costs  for a crop (w/o external factors): function getRevenueForCrop
// revenue == saleprice * kg 
// saleprice = price per kg
// external factor = 1

const getRevenueForCrop = (input) => {
    let salePrice = input.crop.salePrice
    let plantYield = input.crop.yield
    let cropAmount = input.numCrops
    let totalYield = (plantYield * cropAmount)
    let revenue = (salePrice * totalYield)
    return revenue
    // get salesprice
    // yield is in kg
    // totalyield is yield * numcrops, already defined in getTotalYield
    // revenue = salesprice * totalyield
}


// calculate profit for a single crop w/o external factors: function getProfitForCrop
const getProfitForCrop = (input) => {

    // define revenue copy/paste 
    let salePrice = input.crop.salePrice
    let plantYield = input.crop.yield
    let cropAmount = input.numCrops
    let totalYield = (plantYield * cropAmount)
    let revenue = (salePrice * totalYield)
    console.log("logs revenue", revenue);

    // define costs copypaste
    let seedCost = input.crop.seedCosts
    console.log("logs seedCost", seedCost);
    let costForCrop = (seedCost * cropAmount)
    console.log("logs costs for crop", costForCrop);

    // define profit
    let profit = revenue - costForCrop
    console.log("logs profit", profit);
    return profit
    // profit = revenue -costs
    // costs = sowing one seed = seedCost //defined already in getCostsForCrop
}

module.exports = {
    getYieldForPlant: getYieldForPlant,
    getYieldForCrop: getYieldForCrop,
    getTotalYield: getTotalYield,
    getCostsForCrop: getCostsForCrop,
    getRevenueForCrop: getRevenueForCrop,
    getProfitForCrop: getProfitForCrop,
}