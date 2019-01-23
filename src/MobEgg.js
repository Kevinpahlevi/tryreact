import React from 'react'
import ReactDOM from 'react-dom'
import { decorate, observable, configure, action, computed } from "mobx"
import { observer } from "mobx-react"

const appState = observable({
    count: 0
})
appState.increment = function(){
    this.count++
}
appState.decrement = function(){
    this.count--
}


const Mobegg = observer(class MobEgg extends React.Component{
    render(){
        return(
            <div>
                Counter: {this.props.store.count}
                <button className="btn" onClick={this.handleInc.bind(this)}>+</button>
                <button  className="btn" onClick={this.handleDec.bind(this)}>-</button>
            </div>
        )
    }
    handleInc = () =>{
        this.props.store.increment()
    }
    handleDec = () => {
        this.props.store.decrement()
    }
})
export default Mobegg

