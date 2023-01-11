const fs = require ('fs');

const fileName = process.argv[2];

const data = fs.readFileSync(fileName, 'utf8');
console.log(data)

const monArray = data.split(" ").map(x => parseInt(x))

function bubbleSort(arr) {
    for (i = arr.length - 1; i > 0; i--) {
        for (j = 0; j < i; j++) {
            if (arr[j + 1] < arr[j]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
console.log(bubbleSort(monArray));