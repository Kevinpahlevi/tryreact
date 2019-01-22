import React from 'react'
import ReactDOM from 'react-dom'
import { decorate, observable, configure, action, computed } from "mobx"
import { observer } from "mobx-react"


const Timer = observer(class TodoList extends React.Component{
    add(e){
        if(e.which === 13){
            this.props.store.createtodo(e.target.value)
            e.target.value = ""
        }
    }
    filter(e){
        this.props.store.filter = e.target.value
    }
    isi(e){
        this.props.store.isifilter(e.target.value)
    }
    render(){
        const {todos, filter, filtertodo} = this.props.store
        const todosli = filtertodo.map(todo=> (
            <li><input type="checkbox" /> {todo}</li>
            
        ))
        this.isi = this.isi.bind(this)
        return(
            <div>
                {filter}
                <input type="text" placeholder="search" value={this.props.store.filter} className="filter form-control" onChange={this.filter.bind(this)} />
                <input type="text"  placeholder="add" className="filter form-control" onKeyPress={this.add.bind(this)} />
               
                {todosli}<br></br>
                
                {/* {this.props.store.filter}<br></br>
                <button className="btn btn-primary" onClick={this.isi} value={34442}> test</button>
                <button className="btn btn-primary" onClick={this.isi} value={23442}> test</button>
                <button className="btn btn-primary" onClick={this.isi} value={23242}> test</button> */}

            </div>
        )
    }

})
decorate(Timer, {
    isi: action,
    filter: action,
    add: action
})
export default Timer