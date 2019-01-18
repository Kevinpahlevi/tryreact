import React from 'react'
const HOC = (InnerComponent) => class extends React.Component{
   constructor(){
       super()
       this.state = {count: 0}
   }
   update(){
       this.setState({count: this.state.count +1})
   }
    componentWillMount(){
    console.log('will mount--')
   }
    render(){
        return(
            <InnerComponent 
            {...this.props}
            {...this.state}
            update={this.update.bind(this)}
            />
    )}
}
class Highorder extends React.Component{
    render(){
        return(
            <div>
                <Button>Button from compo stateless Button</Button>
                <hr/>
                <LabelHOC>label from const LabelHOC who pass HOC compo and Label</LabelHOC>
            </div>
        )
    }
}

const Button = HOC((props) => <button onClick={props.update}className="btn btn-primary">
                                {props.children} - {props.count}</button>)

class Label extends React.Component{
    render(){
        return(
            <label onMouseOver={this.props.update} style={{fontSize: '10px', marginTop: '-50px'}}>
            {this.props.children} - {this.props.count}</label>
        )
    }
}

const LabelHOC = HOC(Label)

export default Highorder