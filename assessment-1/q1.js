let givenString = "DDUUDDUDUUUD"
const myArray = givenString.split("");
console.log(myArray)

function countValleys() {
    let seaLevel = 0;
    let valleys = 0;
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] == "U") {
            seaLevel++;
        }
        else {
            seaLevel--;
        }
        if (seaLevel == 0 && myArray[i] == "U") {
            valleys++;
        }
    }
    return valleys;
}
console.log(countValleys());