myFun();//-------->second

var myFun = function (){
    console.log("First");
}

myFun(); //-----------> First


function myFun(){
    console.log("Second");
}

myFun(); //-----> First 