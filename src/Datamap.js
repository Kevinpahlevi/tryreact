import React from "react";

function Datamap(props){  
    return(
        <div>
            <span className="label label-warning">{props.id} {props.text}</span>
        </div>
    )
}
export default Datamap