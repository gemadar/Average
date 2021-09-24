function isAverage(arr, float) {
  for (i = 0; i < arr.length; i++) {
    let sum = arr[i] + arr[i + 1];
    let avg = sum / 2;
    if (avg != float) {
      console.log("false");
    } else if (avg == float) {
      console.log("true");
    }
  }
}

console.log(isAverage([1, 2, 3], 2.5));
/* averagePair([-1, 0, , 3, 4, 5, 6], 4.1) => false
averagePair([1, 2, 3], 2.5) => true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) => true */
