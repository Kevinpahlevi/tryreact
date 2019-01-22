import React from 'react'
import ReactDOM from 'react-dom'
import { decorate, observable, configure, action, computed } from "mobx"
import { observer } from "mobx-react"

class TodoStore{
    todos = ["test1", "tes2"]
    filter = "default"
    isifilter(e){
         this.filter = e
    }
}
decorate(TodoStore, {
    todos: observable,
    filter: observable,
    isifilter: action
})

var store = new TodoStore
export default store