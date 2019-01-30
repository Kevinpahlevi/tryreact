import React from "react";


const API_KEY = "7443b7e1356d7b2eca40bfb9c049a6c1"

const Form = props => (
	<form onSubmit={props.getWeather}>
		<input className="form-control" type="text" name="city" placeholder="City..."/>
		<input className="form-control" type="text" name="country" placeholder="Country..."/>
		<button className="btn btn-primary">Get Weather</button>
    <br></br>
	</form>
);

const Titles = () => (
	<div>
		<h1 className="title-container__title">Weather Finder</h1>
		<h3 className="title-container__subtitle">Find out temperature, conditions and more...</h3>
	</div>
);

const Weather = props => (
	<div className="weather__info">
	 {	
	 	props.city && props.country && <p className="weather__key"> Location: 
	 		<span className="weather__value"> { props.city }, { props.country }</span>
	 	</p> 
	 }
	 { 	
	 	props.temperature && <p className="weather__key"> Temperature: 
	 		<span className="weather__value"> { props.temperature }	</span>
	 	</p> 
	 }
	 { 	
	 	props.humidity && <p className="weather__key"> Humidity: 
	 		<span className="weather__value"> { props.humidity } </span>
	 	</p> 
	 }
	 { 	
	 	props.description && <p className="weather__key"> Conditions: 
	 		<span className="weather__value"> { props.description } </span>
	 </p> 
	 }
	 { 
	 	props.error && <p className="weather__error">{ props.error }</p>  
	 }
	</div>
);

class Weathers extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+','+country+'&appid='+API_KEY+'&units=metric');
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
      console.log(data)
      // console.log('ada')
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values."
      });
      console.log('tidak ada')
    }
  }
  render() {
    return (
      <div>
       <h3>Weather from openweathermap.org</h3>        
       <Form getWeather={this.getWeather} />
        <Weather 
          temperature={this.state.temperature} 
          humidity={this.state.humidity}
          city={this.state.city}
          country={this.state.country}
          description={this.state.description}
          error={this.state.error}
        />           
      </div>
    );
  }
};

export default Weathers;