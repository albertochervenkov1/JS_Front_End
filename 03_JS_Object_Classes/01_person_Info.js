function PersonInfo(firstName, lastName, age){
    age=Number(age);
    let person = {firstName:firstName, lastName:lastName, age:age};
    return person;
}