import React from 'react'

class  Filter extends React.Component{
    constructor(){
        super()
        this.state = {
            items : [],
            itemx : [],
            filter :""
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
        //   this.setState({itemx: memes})
        // })
    }

    filter(event){
        this.setState({filter: event.target.value})
    }

    render(){
        let items = this.state.items
        // console.log(items)
        if(this.state.filter){
            items = items.filter( item => 
            item.name.toLowerCase()
            .includes(this.state.filter.toLowerCase()))
        }
        return(
            <div>
                <input type="text" className="form-control" onChange={this.filter.bind(this)}/>
                {items.map(item => <Org key={item.name} org={item}/>)}
            </div>
        )
       
    }

}

const Org = (props) => <h4 >{props.org.name}</h4>

export default Filter

