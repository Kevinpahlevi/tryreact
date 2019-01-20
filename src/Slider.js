import React from 'react'
import ReactDOM from 'react-dom'

class Slider extends React.Component{
    constructor(){
        super()
        this.state = {
            red:0
        }
        this.update = this.update.bind(this)
    }

    update(e){
        // red :ReactDOM.findDOMNode(this.refs.red.refs.inp).value
    }

    render(){
        return(
            <div>
                <Sliderx ref="red" update={this.update}/>
                {this.state.red}
            </div>
        )
    }
}

class Sliderx extends React.Component{
    render(){
        return(
            <div>
               <input ref="inp" type="range"
               min="0"
               max="255"
               onChange={this.props.update}
               />
            </div>
        )
    }
}
export default Slider