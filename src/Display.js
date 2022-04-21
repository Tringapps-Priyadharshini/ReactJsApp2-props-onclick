
function Display(props){
    return(
        <div>
            {props.display.map((i)=><div className="userstyle">{i.username}</div>)}
        </div>
    );

}

export default Display;


