function sortNumbers(arr) {
    let sortedArr = arr.sort();


    let middleIdx = Math.ceil(sortedArr.length/2);
    let smallNums = sortedArr.slice(0, middleIdx);
    let largeNums = sortedArr.slice(middleIdx, sortedArr.length);


    let result = [];
    let maxLength=Math.max(smallNums.length, largeNums.length);
    for (let i = 0; i < maxLength; i++) {
      result.push(smallNums[i]);
      if (i < largeNums.length) {
        result.push(largeNums[largeNums.length - 1 - i]);
      }
    }

    // console.log(result);
    // for (let i=0; i<result.length; i++){
    //     console.log(result[i]);
    // }
    return result;
  }


sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);