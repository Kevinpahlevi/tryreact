import React from 'react'

class  Filter extends React.Component{
    constructor(){
        super()
        this.state = {
            items : [],
            itemx : []
        }
    }
    componentWillMount(){
        fetch('https://swapi.co/api/people/?format=json')
        .then(response => response.json())
        .then(({results: items})=>
              this.setState({items})  
        )

        // fetch("https://api.imgflip.com/get_memes")
        // .then(response => response.json())
        // .then(response =>{
        //   const {memes} = response.data
        //   this.setState({items: memes})
        // })
    }
    filter(event){
        this.setState({filter: event.target.value})
    }

    render(){
        let items = this.state.items
        if(this.state.filter){
            items = items.filter(item => item.name.toLowerCase()
            .include(this.state.filter.toLowerCase()))
        }
        return(
            <div>
                <input type="text" onChange={this.filter.bind(this)}/>
                {items.map(item => <h4 key={item.name}>{item.name}</h4>)}
            </div>
        )
    }
}

export default Filter