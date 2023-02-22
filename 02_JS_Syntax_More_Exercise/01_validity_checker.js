function checker (x1,y1,x2,y2){

    isValid(x1,y1);
    isValid(x2,y2);
    isValid(x1,y1,x2,y2);

    function isValid(x1,y1,x2=0,y2=0){
        let distance = Math.sqrt((x2-x1)**2+(y2-y1)**2);
        let result='invalid';
        if (distance === Math.floor(distance)){
            result='valid';
        }
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${result}`);
    }
}