function phonebookParser (input){
    let phonebook = {};
    for (const line of input){
        let [name,phoneNumber] = line.split(' ');
        if (!phonebook.hasOwnProperty(name)){
            phonebook[name] = phoneNumber;
        }
        
    }
    for (const key in phonebook){
        console.log(`${key} -> ${phonebook[key]}`);
    }
}