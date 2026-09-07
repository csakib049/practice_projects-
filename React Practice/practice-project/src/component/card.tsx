interface cardProps {
    user:string;
    age:number;
}



const card = (props:cardProps) => {

    console.log(props);
    

    return (
        <div>
            <div>this is a card ...........{props.user}..</div>
            <div>I am {props.age} years old .</div>
        </div>
        
    )
}

export default card