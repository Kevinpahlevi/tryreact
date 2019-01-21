import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';

class Slider extends React.Component{
    constructor(){
        super()
        this.state = {
            red:0
        }
        this.update = this.update.bind(this)
    }

    update(e){
        this.setState(
            {
                red :ReactDOM.findDOMNode(this.refs.red.refs.inp).value
            }
        )
    }

    render(){
        return(
            <div>
                <Sliderx ref="red" 
                 min={0}
                 max={1255}
                 step={1}
                 val={this.state.red}  
                 type="range"
                 label="Red" 
                update={this.update}/>
                
            </div>
        )
    }
}

class Sliderx extends React.Component{
    render(){
        return(
            <div>
               <input ref="inp" 
               type={this.props.type}
               min={this.props.min}
               max={this.props.max}
               step={this.props.step}
               defaultValue={this.props.val}
               onChange={this.props.update}
               />
               <h4>{this.props.val}</h4>
            </div>
        )
    }
}

Sliderx.PropTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    val: PropTypes.number,
    step: PropTypes.number,
    label: PropTypes.string,
    update: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['number','range'])
}

Sliderx.defaultProps = {
    min: 0,
    max: 0,
    val: 0,
    step: 1,
    label: '',
    type: 'range'
}
export default Slider