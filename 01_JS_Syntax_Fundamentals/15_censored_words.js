function censoredWord(text, word){
    let censored  = text.replace(word, repeat(word));
    while (censored.includes(word)){
        censored=censored.replace(word, repeat(word));
    }
    console.log(censored);    
        function repeat(word){
            let result='';
            for (let i=0; i<word.length; i++){
                result+='*';
        }
        return result;
    }
}
censoredWord('A small sentence with some words', 'small')