type GreetProps = {
    name:string,
    somecount :number
}
export const Greet = (props:GreetProps)=>{
    return(
        <div>
            <h1 >Welcome {props.name} <br/> ur count is {props.somecount}</h1>
        </div>
    )
};
