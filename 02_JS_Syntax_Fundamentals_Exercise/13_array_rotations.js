function arrRotation (arr, n){
    for (let i=1; i<=n; i++){
        firstNum = arr.shift();
        arr.push(firstNum);
    }
    let result = '';
    for (let i=0; i<arr.length; i++){
        result+=arr[i]+' '
    }
    console.log(result);
}

arrRotation([2, 4, 15, 31], 5);