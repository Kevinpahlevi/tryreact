import React, { Component } from 'react'
import {Alert, Badge} from 'react-bootstrap'


export default class Reactboots extends Component {

    render(){
    return(
     <div>
         <h4>React bootstrap</h4>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="light">Light</Badge>
        <Badge variant="dark">Dark</Badge>
     </div>   
    )

}

}


