import React from "react";
import logo from './logo.svg';
const textloading = {
    color : "green"
}
const sizeloading = {
    height : "100px",
    width : "150px",
    marginTop : "50px"
}         
function Logo(props){
   if(props.loading !== true){
        return(
          <img src={logo} className="App-logo" alt="logo" />
        )     
   }
   else{
    return(
        <div>
        <img style={sizeloading} src="/loading2.gif" className="loadinglogo" alt="loading"/>
        <h3 style={textloading}>Wait loading with didmount method....</h3>
        </div>
    )
    }
}
export default Logo;