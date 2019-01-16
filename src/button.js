import React from "react";

const name1 = "Rick"
const name2 = "Morti"
const date = new Date()
const hours = date.getHours()
let time
const styles = {
    color : "blue",  
}        
const morning = {
    color : "yellow"
}          
function Button(props){
    if (hours < 12 ) {
        time = <h3 style={morning}>Good Morning</h3>
    }
    else if(hours >= 12 && hours > 17){
        time = "Good Afternoon"
    }
    else
        time = "Good Night"
    return(
      <div>    
        <h3 style={styles}>Hallo {name1 + " " + name2}</h3>
        <h3>Today is {date.getDate()+" "+date.getMonth()+1+" "+date.getFullYear()+", "+props.time}</h3>
        <h3>{time}</h3>
      </div>
    );
}
export default Button;