function datatype<T>(item:T):void{
    console.log(item);
    
}



datatype<string>("sakib");


datatype<boolean>(true);

datatype<number>(23);






function pair<A,B>(a:A,b:B):[A,B]{
    return [a,b];
}



pair("asdf",23);

pair(true,23);

