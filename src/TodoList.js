import React from 'react'
import ReactDOM from 'react-dom'
import { decorate, observable, configure, action, computed } from "mobx"
import { observer } from "mobx-react"


const Timer = observer(class TodoList extends React.Component{
    isi(e){
        this.props.store.isifilter(e.target.value)
    }
    render(){
        this.isi = this.isi.bind(this)
        return(
            <div>
                {this.props.store.todos[0]}<br></br>
                {this.props.store.filter}<br></br>
                <button className="btn btn-primary" onClick={this.isi} value={34442}> test</button>
                <button className="btn btn-primary" onClick={this.isi} value={23442}> test</button>
                <button className="btn btn-primary" onClick={this.isi} value={23242}> test</button>

            </div>
        )
    }

})
decorate(Timer, {
    isi: action
})
export default Timer