import React from 'react'
import ReactDOM from 'react-dom'
const imgmeme = {
 width: '550px',
 height: '350px'
}

const top = {
  position: 'absolute',
  top: '1%',
  left: '15%',
  fontSize: '35px',
  textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
}

const bottom = {
  position: 'absolute',
  bottom: '1%',
  left: '15%',
  fontSize: '35px',
  textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
}

const contimg = {
  position: 'relative',
  textAlign: 'center',
  color: 'white'

}
export default class Meme extends React.Component {

    constructor(){
    super()
    this.state = {
        topText: "ONE DOES NOT SIMPLY",
        bottomText: "PAUSE AN ONLINE GAME",
        randomimg: "http://i.imgflip.com/1bij.jpg",
        allMemeImgs: []    
    }
    
    this.handlememe = this.handlememe.bind(this)
    this.handleimg = this.handleimg.bind(this)

  }

  handlememe(event){
      const {name, value} = event.target
      this.setState({[name]: value})
  }

  async handleimg(event){
    event.preventDefault()
    const awal = await fetch("https://api.imgflip.com/get_memes")
    const next = await awal.json()
    const randNum = Math.floor(Math.random()  * 99) + 1
    const randImg = next.data.memes[randNum].url
    if(randImg){
      this.setState({randomimg: randImg});
    }
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
                  // value={this.state.topText}
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
                  // value={this.state.bottomText}
                  onChange={this.handlememe}
                  title=""/>
              </div>
              <div class="col-sm-2">
                <button type="submit" class="btn btn-primary">Generate</button>
              </div>
            </form>
          </div>
        <br></br>
        <div className="meme" style={contimg}>
          <p style={top} className="top" autocomplete="off">{this.state.topText}</p>
          <p style={bottom} className="bottom" autocomplete="off">{this.state.bottomText}</p>
          <img style={imgmeme} src={this.state.randomimg} alt="" />        
        </div>
      </div>
    )
  }

}
