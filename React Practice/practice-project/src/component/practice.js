const obj = [
    {
        user:"sakib",
        age:25
    },{
        user:"shahriar",
        age:25
    },{
        user:"nazifa",
        age:15
    }
];


const o = obj.map(elem => elem);

console.log(o);

//---------------------
const obj2 = [
    {
        user:"max",age:23
    },
    {
        user:"max2",age:25
    },
    {
        user:"max3",age:25
    },
]



const oo = obj2.map(elem => elem);


const oo2 = obj2.map((elem)=> {return elem;});

console.log(oo);
console.log(oo2);












