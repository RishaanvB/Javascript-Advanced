// Deel 1

let num = 0;

for (num = 0; num <= 20; num++) {

    if (num % 2 == 0) {
        console.log(num + ' is even');
    } else {
        console.log(num + ' is odd');
    }
}

//Deel 2

for (num = 1; num <= 10; num++) {

    console.log(num + ' x 9 = ' + num * 9)

}

// Deel 3


for (score = 60; score <= 100; score++) {
    function assignGrade(score) {
        if (score > 90) {
            return 'A';
        } else if (score > 80) {
            return 'B';
        } else if (score > 70) {
            return 'C';
        } else if (score > 65) {
            return 'D';
        } else {
            return 'F';
        }
    }

    console.log('Voor ' + score + ' punten krijg je een ' + assignGrade(score));


}