var maximumUnitsBruteForce = function (boxTypes, truckSize) {
  let availableSize = truckSize;
  let resultantUnits = 0;
  let sortedArrayFromHighestUnits = boxTypes.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < sortedArrayFromHighestUnits.length; i++) {
    if (availableSize <= 0) {
      return resultantUnits;
    }
    for (let j = 0; j < sortedArrayFromHighestUnits[i][0]; j++) {
      if (availableSize <= 0) {
        return resultantUnits;
      } else {
        resultantUnits = resultantUnits + sortedArrayFromHighestUnits[i][1];
        availableSize--;
        console.log(sortedArrayFromHighestUnits[i][1]);
      }
    }
  }
  return resultantUnits;
};

var maximumUnitsOptimized = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);

  let resultantUnits = 0;

  for (let i = 0; i < boxTypes.length; i++) {
    let [numberOfBoxes, unitsPerBox] = boxTypes[i];

    let boxesToTake = Math.min(truckSize, numberOfBoxes);
    resultantUnits += boxesToTake * unitsPerBox;
    truckSize -= boxesToTake;

    if (truckSize === 0) break;
  }

  return resultantUnits;
};

const boxTypes = [
  [1, 3],
  [2, 2],
  [3, 1],
];
const truckSize = 4;

console.log(maximumUnitsOptimized(boxTypes, truckSize));
