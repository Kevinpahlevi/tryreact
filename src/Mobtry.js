import React, { Component } from 'react';
import { decorate, observable, configure, action, computed } from "mobx"
import { observer } from "mobx-react"
import DevTools from 'mobx-react-devtools'

configure({ enforceActions: true })

class Store {
  employeesList = [
    { name: "John Doe", salary: 150 },
    { name: "Richard Roe", salary: 225 },
  ]
  error = "no error"

  clearList() {
    this.employeesList = []
  }

  pushEmployee(e) {
    this.employeesList.push(e)
  }
  getError(){
      return this.error
  }
  setError(e){
      this.error = e  
  }
  get totalSum() {
    let sum = 0
    this.employeesList.map(e => sum = sum + e.salary)
    return sum
  }

  get highEarnersCount() {
    return this.employeesList.filter(e => e.salary > 500).length
  }
}

decorate(Store, {
  employeesList: observable,
  error: observable,
  clearList: action,
  pushEmployee: action,
  totalSum: computed
})

const appStore = new Store()

const Row = (props) => {
  return (<tr>
    <td>{props.data.name}</td>
    <td>{props.data.salary}</td>
  </tr>)
}

class Table extends Component {
  render() {
    const { store } = this.props
    return (<div>
        
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                {store.employeesList.map((e, i) =>
                <Row
                key={i}
                data={e}
                />
            )}
            </tbody>
        </table>
            TOTAL: {store.totalSum}
            <br></br>
      <div className="badge">
        You have <u>{store.highEarnersCount} team members </u>that earn more that 500$/day.
      </div>
    </div>)
  }
}
Table = observer(Table)

class Controls extends Component {
  addEmployee = () => {
    const name = prompt("The name:")
    const salary = parseInt(prompt("The salary:"), 10)
    if(name&&salary){
    this.props.store.pushEmployee({ name, salary })
    this.props.store.setError("Success submit")
    }
    else{
        this.props.store.setError("Please fill name and salary")
    }
  }

  clearList = () => {
    this.props.store.clearList()
  }

  render() {
    // console.log(this.props.error)
    return (<div className="controls">
        <h3>-{this.props.store.getError()}-</h3>
      <button className="btn btn-danger" onClick={this.clearList}>clear table</button>
      <button className="btn btn-primary" onClick={this.addEmployee}>add record</button>
    </div>)
  }
}

class Mobtry extends Component {
  render() {
    return (
      <div>
        <h1>Mobx Table</h1>
        <DevTools />
        <Controls store={appStore} />
        <Table store={appStore} />
      </div>
    )
  }
}

export default Mobtry;
