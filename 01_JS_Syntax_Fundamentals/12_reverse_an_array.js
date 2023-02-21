function reverse (n, arr){
    let result=[];
    for (let i=0; i<n; i++){
        result.push(arr[i]);
    }

    let output='';
    for (let i=result.length-1; i>=0; i--){
        output+=result[i]+' ';
    }
    console.log(output);
}

reverse(3, [10, 20, 30, 40, 50]);