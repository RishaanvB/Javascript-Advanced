const age = 230;
const isFemale = false;
const driverStatus = 3;
const name = 'Sarah';
const totalAmount = 75;

if (totalAmount > 25 && totalAmount < 50) {
    console.log('Je krijgt gratis bitterballen')
} else if (totalAmount > 50 && totalAmount < 100)   {
    console.log('Je krijgt gratis nachos')
} else if (totalAmount >= 100) {
    console.log('Je krijgt een fles champagne')
} else {
    console.log('Je moet meer geld uitgeven om iets gratis te krijgen')
}

if (name === 'Bram' || name === 'Sarah') {
    console.log('gratis bier voor jou, Sarah of Bram');
} else {
    console.log('Je heet geen Bram of Sarah')
}


if (age >= 18 && age < 25) {
    console.log('Bouncer: Jij krijgt  50 % kortingggg!!!');
} else {
    console.log('Geen korting voor jou');
}


if (age >= 18 && age < 40) {
    console.log('Bouncer: Loop maar door, je bent ouder dan 18');
} else if (age > 40) {
    console.log('sorry, te oud voor deze tent');
} else {
    console.log('helaas pindakaas, Je bent te jong');
}


if (isFemale) {
    console.log('kom maar naar binnen');
} else {
    console.log('No Dicks Allowed');
}


if (driverStatus == 'bob') {
    console.log('Jij mag ons lekker naar huis brengen');
}

if (driverStatus != 'bob') {
    console.log('Regel jij maar een uber');
}

