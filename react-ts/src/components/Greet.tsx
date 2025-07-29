type GreetProps = {
    name:string
}
export const Greet = (props:GreetProps)=>{
    return(
        <div>
            <h1 style={{display:"flex",justifyContent:"center",alignItems:"center"}}>Welcome {props.name}</h1>
        </div>
    )
}