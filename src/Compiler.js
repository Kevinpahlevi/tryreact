import React from 'react'

class Compiler extends React.Component{
    constructor(){
        super();
        this.state = {
            input: '',
            output: '/* output ur jsx */',
            err: 'no error'
        }
    }
    update(e){
        let code = e.target.value;
        console.log(code)
        try{
            this.setState({
                output: window.Babel
                .transform(code, {presets: ['es2015', 'react']})
                .code,
                err: 'success'
            })
        }
        catch(err){
            this.setState({err: err.message})
        }
    }
    render(){
        return(
            <div>
                <div style={{width: '500px'}} className="container">
                <pre style=
                {this.state.err === 'success'||this.state.err === 'no error' ? {backgroundColor: "#99ff99" }:{backgroundColor: "#ff8080"}}>{this.state.err}</pre>
                <textarea className="form-control"onChange={this.update.bind(this)} 
                placeholder='input jsx here'></textarea>
                <pre >{this.state.output}</pre>
                </div>
            </div>
        )
    }
}



export default Compiler