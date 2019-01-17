import React from "react";

function Props(props){  
    return(
        <div>
            <span className="label label-warning">{props.text}</span>
            <span style={{display: !props.other && "none"}} className="label label-danger">{props.other}</span>
            <span style={{display: !props.tambahan.lain && "none"}} className="label label-default">{props.tambahan.lain}</span>
        </div>
    )
}
export default Props