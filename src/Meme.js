import React from 'react'
import ReactDOM from 'react-dom'

export default class Meme extends React.Component {

    constructor(){
    super()
    this.state = {
        topText: "",
        bottomText: "",
        randomimg: "http://i.imgflip.com/1bij.jpg",
        allMemeImgs: [],
        myObj : {
            "name":"John",
            "age":30,
            "cars": [
              {"name":"Ford", "models":["Fiesta", "Focus", "Mustang"]},
              {"name":"BMW", "models":["320", "X3", "X5"]},
              {"name":"Fiat", "models":["500", "Panda"] }
            ]
          }      
    }
    
    this.handlememe = this.handlememe.bind(this)
  }

 componentDidMount(){
     console.log('did meme')
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(response =>{
        if (response.data) {
          const {memes} = response.data
          this.setState({allMemeImgs: memes})
        }  
    })
 }

  handlememe(event){
      const {name, value} = event.target
      this.setState({[name]: value})
  }

  handleimg(event){
    //   event.preventDefault()
    //   const randNum = Math.floor(Math.random()  * 10)
    //   const randImg = this.state.allMemeImgs[randNum].url
    //   this.setState({
    //         randomimg : randImg
    //   })
  }

  render(){
    
         {console.log(this.state.myObj)}
         {console.log(this.state.allMemeImgs[0])}  
    return(
      <div>
        <span class="badge">Meme Generator</span>

        <div class="form-group">
          <form onSubmit={this.handleimg} className="meme-form">
            <div class="col-sm-5">
                <input 
                  type="text" 
                  placeholder="topText" 
                  name="topText" 
                  id="input" 
                  class="form-control"
                  value={this.state.topText}
                  onChange={this.handlememe}
                  title=""/>
              </div>
              <div class="col-sm-5">
                <input 
                  type="text" 
                  placeholder="bottomText" 
                  name="bottomText" 
                  id="input" 
                  class="form-control" 
                  value={this.state.bottomText}
                  onChange={this.handlememe}
                  title=""/>
              </div>
              <div class="col-sm-2">
                <button type="submit" class="btn btn-primary">Generate</button>
              </div>
            </form>
          </div>

        <div className="meme">
          <img src={this.state.randomimg} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    )
  }

}
