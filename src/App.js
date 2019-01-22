import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbara from './Navbara.js'
import Button from './button.js'
import Props from './Props.js'
import Datamap from './Datamap.js'
import Datax from './Datax.js'
import Logo from './Logo.js'
import Filter from './Filter'
import Compiler from './Compiler'
import Slider from './Slider'
import Highorder from './Highorder'
import Mobtry from './Mobtry'
import Todolist from './TodoList'
import store from './TodoStore'
import ReactDOM from 'react-dom';


const margin = {
  marginBottom : "30px",
  marginTop : "30px"

}
const dataout = Datax.map(x => <Datamap id={x.id} text={x.text}/>)

class TryCom extends Component{
  render(){
    return(
      <div>
        
        <div class="alert alert-success">
          <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
          <strong>Component</strong> this from class tryCom using Component function
        </div>
        
      </div>
    )
  }
}

class FormHandler extends Component{
  constructor(){
    super()
    this.state = {
      namevalue : ""
    }
    this.formchange = this.formchange.bind(this)
  }
  formchange(event){
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  render(){
    return(
      <div>
        <br></br>
        <form action="" method="POST" role="form">
      
          <div class="form-group">
            <label for="">Form Handlers</label>
            <input type="text" class="form-control" name="namevalue" id="" placeholder="Input field" onChange={this.formchange} />
            your name is : {this.state.namevalue}
          </div>
        </form>
      </div>
    )
  }
}

// class Meme extends Component {
//  constructor(){
//     super()
//     this.state = {
//         topText: "",
//         bottomText: "",
//         randomimg: "http://i.imgflip.com/1bij.jpg",
//         allMemeImgs: [],      
//     }
//     this.handlememe = this.handlememe.bind(this)
//   }

//   componentDidMount(){
//     fetch("https://api.imgflip.com/get_memes")
//           .then(response => response.json())
//           .then(response =>{
//             const {memes} = response.data
//             this.setState({allMemeImgs: memes})
//           })
//           console.log(this.state.allMemeImgs)
//   }
  
//   handlememe(event){
//       const {name, value} = event.target
//       this.setState({[name]: value})
//   }

//   handleimg(event){
//       event.preventDefault()
//       const randNum = Math.floor(Math.random()  * 10)
//       const randImg = this.state.allMemeImgs[randNum].url
//       this.setState({
//             randomimg : randImg
//       })
//   }

//   render(){
//     return(
//       <div>
//         <span style={margin} class="badge">Meme Generator</span>

//         <div class="form-group">
//           <form onSubmit={this.handleimg} className="meme-form">
//             <div class="col-sm-5">
//                 <input 
//                   type="text" 
//                   placeholder="topText" 
//                   name="topText" 
//                   id="input" 
//                   class="form-control"
//                   value={this.state.topText}
//                   onChange={this.handlememe}
//                   title=""/>
//               </div>
//               <div class="col-sm-5">
//                 <input 
//                   type="text" 
//                   placeholder="bottomText" 
//                   name="bottomText" 
//                   id="input" 
//                   class="form-control" 
//                   value={this.state.bottomText}
//                   onChange={this.handlememe}
//                   title=""/>
//               </div>
//               <div class="col-sm-2">
//                 <button type="submit" class="btn btn-primary">Generate</button>
//               </div>
//             </form>
//           </div>

//         <br></br>
//         {console.log(this.state.allMemeImgs[0].url)}
//         <div className="meme">
//           <img src={this.state.randomimg} alt="" />
//           <h2 className="top">{this.state.topText}</h2>
//           <h2 className="bottom">{this.state.bottomText}</h2>
//         </div>
//       </div>
//     )
//   }

// }

class Item extends Component{
  componentWillMount(){
    console.log("will mounwt")

  }

  componentDidMount(){
    console.log("did mounwt")

  }

  componentWillUnmount(){
    console.log("unmount")

  }
  render(){
    return(
    
      <span class="badge">Badge success mount!</span>
      
    )
  }
 
}

// Component simply 
const Itema = () => 
<span class="badge">Badge A</span>



class Life extends Component{
  constructor(){
    super()
    this.setState = {

    }
  }
    mount(){
      ReactDOM.render(<Item />, document.getElementById('target'))
    }
    unmount(){
      ReactDOM.unmountComponentAtNode(document.getElementById('target'))
    }

    mounta(){
      ReactDOM.render(<Itema />, document.getElementById('targeta'))
    }
    unmounta(){
      ReactDOM.unmountComponentAtNode(document.getElementById('targeta'))
    }

    render(){
      return(
        <div>
        <button type="button" class="btn btn-primary" onClick={this.mount.bind(this)}>Mount Badge</button>
        <button type="button" class="btn btn-info" onClick={this.unmount.bind(this)}>Unmount Badge</button>
        <button type="button" class="btn btn-primary" onClick={this.mounta.bind(this)}>Mount Badge a</button>
        <button type="button" class="btn btn-info" onClick={this.unmounta.bind(this)}>Unmount Badge a</button>
        <div className="target" id="target"></div>
        <div className="target" id="targeta"></div>
        </div>
       
      )
    }
  }

class Updatecompo extends Component{
  constructor() {
    super()
    this.state = {
       increasing: true
    }
  }

  update(){
    ReactDOM.render(
      <Updatecompo val={this.props.val+1}/>, document.getElementById('update')
    )
  }

  componentWillReceiveProps(nextProps){
      this.setState({
        increasing: nextProps > this.props.val
      })
  }
  shouldComponentUpdate(nextProps, nextState){
    return nextProps % 3 === 0
  }
  render(){
    return(
      <div id="update">
      {/* {console.log(this.state.increasing)} */}
      <button type="button" class="btn btn-danger" onClick={this.update.bind(this)}>
      {this.props.val}
      </button>
      </div>
    )
  }
}
Updatecompo.defaultProps = {val : 0}


class App extends Component {
  constructor(){
    super()
    this.state = {
      kondisi : "Yes",
      log : true,
      count : 0,
      loading : true,
      time : new Date()
    }
    this.event = this.event.bind(this)
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
 
  componentDidMount(){
    this.timerID = setInterval(() => this.tick(), 1000);
    setTimeout(() => {
      this.setState({
        loading : false
      })
    }, 3000)
  }

  event(){
    this.setState(prevState => {
      return{
        count: prevState.count+1
      }
    })
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }
  
  render() {
    let logstate
    if (this.state.log === true) {
        logstate = "in"    
    }
    else
        logstate = "out"

    return (
      <div className="App">
       
        <div className="App-header">
        <Logo loading={this.state.loading}/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React test
                      </a>
          <Button time={this.state.time.toLocaleTimeString()}/>
          <Props text="ini props" other="ini lain" tambahan={{lain: ""}}/>
          <Props text="ini juga props" tambahan={{lain: ""}}/>
          <Props text="ini props" other="ini lain" tambahan={{lain: ""}}/>
          <Props text="ini juga props" other="etc" tambahan={{lain: ""}}/>
          <hr></hr>
          <h3>Mapping</h3>
          <Datamap id="5" text="tets"/>
          {dataout}
          <hr></hr>
          <h3>Component</h3>
          <TryCom />
          <hr></hr>
          <h3>State</h3>
          {this.state.kondisi}
          <h4> current condition : log{logstate} </h4>
          <h3>Event Handling</h3>
          {this.state.count}
          <button onClick={this.event} type="button" class="btn btn-primary">Click Me</button>
          <FormHandler />
          {/* <Meme /> */}
          <h3>Mount Unmount</h3>
          <Life />
          <h3>Updatecompo with state</h3>
          <Updatecompo />
          <br></br>
          <Filter />
          <br></br>
          <h3>High order</h3>
          <Highorder />
          <h3>Compiler JSX with Babel</h3>
          <Compiler />  
          <Slider />
          <Mobtry />
          <h3>MobxEggheads</h3>
          <Todolist store={store}/> 
          </div>
      </div>
    );
  }
}

export default App;
