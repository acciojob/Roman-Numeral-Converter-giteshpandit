function convertToRoman(num) {
    const obj = {
        0: ['M', 1000],
        1: ['D', 500],
        2: ['C', 100],
        3: ['L', 50],
        4: ['X', 10],
        5: ['V', 5],
        6: ['I', 1]
    };

    let roman = '';

    // Special cases for subtractive notation
    const subtractiveNotations = {
        900: 'CM',
        400: 'CD',
        90: 'XC',
        40: 'XL',
        9: 'IX',
        4: 'IV'
    };

    // Check for subtractive notation first
    for (const key in subtractiveNotations) {
        while (num >= key) {
            roman += subtractiveNotations[key];
            num -= key;
        }
    }

    // Convert using the main Roman numeral mapping
    for (const key in obj) {
        const [symbol, value] = obj[key];
        while (num >= value) {
            roman += symbol;
            num -= value;
        }
    }

    return roman;
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line
console.log(convertToRoman(36)); // Output: XXXVI

// do not edit below this line
module.exports = convertToRoman;
