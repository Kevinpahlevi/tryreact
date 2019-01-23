import React from 'react'
import ReactDOM from 'react-dom'
import { decorate, observable, configure, action, computed } from "mobx"
import { observer } from "mobx-react"

class TodoStore{
    todos = ["Egg" , "Meat" , "Beans" , "Milk"]
    filter = ""
    nilai1 = 4
    nilai2 = 3
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
    get kali(){
        return this.nilai1 * this.nilai2
    }
}
decorate(TodoStore, {
    todos: observable,
    filter: observable,
    isifilter: action,
    createtodo: action,
    clear: action,
    nilai1: observable,
    nilai2: observable,
    kali: computed
})

var store = new TodoStore
export default store