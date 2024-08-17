function convertToRoman(num) {
    const obj = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let roman = '';

    // Iterate over the keys in the `obj` object
    for (let key in obj) {
        // While num is greater than or equal to the current value
        while (num >= obj[key]) {
            roman += key; // Append the Roman numeral symbol to the string
            num -= obj[key]; // Decrease the num by the value of the Roman numeral
        }
    }

    return roman;
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line
console.log(convertToRoman(36)); // Output: XXXVI

// do not edit below this line
module.exports = convertToRoman;
