function sortNames(names){
    let i=1;
    for (let name of names.sort()){
        console.log(`${i}.${name}`);
        i++;
    }
}

sortNames(["John"]);