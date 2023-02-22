function pascalCaseSplitter(text){
    const pattern = /[A-Z][a-z]+/g;
    let words = text.match(pattern);
    console.log(words.join(', '));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');