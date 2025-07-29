type headingprops ={
    children :string
}

function Heading(props:headingprops) {
    return ( 
        <div><h2>{props.children}</h2></div>
     );
}

export default Heading;