function stringOccurrences (text, searchedWord){
    let textAsArray = text.split(' ');
    let counter=0;
    for (let word of textAsArray){
        if (word===searchedWord){
            counter+=1;
        }
    }
    console.log(counter)
}

stringOccurrences('This is a word and it also is a sentence','is');