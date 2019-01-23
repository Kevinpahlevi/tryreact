import React from 'react'
import ReactDOM from 'react-dom'
import { decorate, observable, configure, action, computed } from "mobx"
import { observer } from "mobx-react"

class TodoStore{
    todos = ["Egg" , "Meat" , "Beans" , "Milk"]
    filter = ""
    isifilter(e){
         this.filter = e
    }
    get filtertodo(){
        var match = new RegExp(this.filter, "i")
        return this.todos.filter(todo=> !this.filter || match.test(todo))
    }
    createtodo(e){
        this.todos.push(e)
    }
    clear(){
        console.log(',,,,')
        // this.todos
    }
}
decorate(TodoStore, {
    todos: observable,
    filter: observable,
    isifilter: action,
    createtodo: action,
    clear: action
})

var store = new TodoStore
export default store