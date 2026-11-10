const p1 = {
    fname:"sakib",
    lname:"chowdhury"
}

const p2 = {
    age:23,
    ID:39,
    __proto__:p1,
}


const p3 = {
    bmi:23,
    __proto__:p2
}


const mama = p2.lname;

console.log(mama);



let name = "sakib";

const a = 23;