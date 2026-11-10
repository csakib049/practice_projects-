const person = {
    name:"sakib",
    age:13,
    contact:"018234044694"
}


const person2 = {
    id:390,
    address:"asdf",
    __proto__:person
}

const person3 = {
    city:"dhaka",
    thana:"rupnogor",
    __proto__:person2
}


console.log(person3.age);