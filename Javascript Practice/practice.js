(function (){
    //devloper 1 
    let secret = "asdfsadfsdf";

    console.log(secret);
    
})();



//developer 2
let secret = "1234";
console.log(secret);


//developer 1 doesnt want his secret variable to get polluted by the global scope 
//so to prevent from global scope pollutoin he writes the secret insite a iife function 
// and we all know that writting a iife function will execute the function immediately 


((name)=>{
    console.log(`My name is ${name}`);
    
})("sakib");


((bon)=>{
   
     console.log(bon);
    
})("nazifa");





(function (){
    let secret = 23;
    console.log(secret);
})(); 



(function (){
    //devloper 1 
    let secret = "asdfsadfsdf";

    console.log(secret);
    
})();





(function sakib(s){
    let secret = "JL;kajsdf";
    console.log(secret);
    
})(sakib);


(fucntion sakib(ss)=>{
    let secret = "sasdlkfjas;dlf";

    console.log(secret);
})();


function  add(a:nunber , b: number):nunber{
    return a+b;
}