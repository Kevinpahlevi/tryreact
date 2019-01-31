import React from 'react'
import ReactDOM from 'react-dom'
import { decorate, observable, configure, action, computed } from "mobx"
import { observer } from "mobx-react"

const DerajatList = (props) => 
         <select className="form-control form-control-sm" id={props.derajat} onChange={props.act}> 
            <option value="Celcius">Celcius</option>
            <option value="Fahrenheit">Fahrenheit</option>
            <option value="Kelvin">Kelvin</option>
        </select>

class Suhu extends React.Component{
    constructor(){
        super()
        this.state={
            derajatAwal: "Celcius",
            derajatTujuan: "Celcius",
            nilaiAwal: 0,
            nilaiAkhir: 0

        }
     }
    setDerajatAwal(){
    var e = document.getElementById("awal")
    var a = e.options[e.selectedIndex].value
        this.setState({
            derajatAwal: a
        })
    }
    
    setDerajatTujuan(){
    var e = document.getElementById("tujuan")
    var a = e.options[e.selectedIndex].value
        this.setState({
            derajatTujuan: a
        })
    }
    setNilaiawal(e){
    if(!(/^\d+$/.test(e.target.value))){
        console.log('bukan angka')
        document.getElementById('hitung').disabled = true
    }
    else{
        document.getElementById('hitung').disabled = false
        this.setState({
            nilaiAwal: e.target.value
        })
    }    
    }

    hitung(){
    var e = this.state.nilaiAwal    
        switch(this.state.derajatAwal){
            case "Celcius":
                switch(this.state.derajatTujuan){
                    case "Celcius":
                    this.setState({nilaiAkhir: e})
                    break;        
                    case "Fahrenheit":
                    var hasil = (e * 9 / 5) + 32 
                    this.setState({nilaiAkhir: hasil})
                    break;
                    case "Kelvin":
                    var hasil = (e*1) + 273.15
                    this.setState({nilaiAkhir: hasil})
                    break;
                }
                break;        
            case "Fahrenheit":
                switch(this.state.derajatTujuan){
                    case "Celcius":
                    var hasil = (e-32) * 5/9
                    this.setState({nilaiAkhir: hasil})
                    break;        
                    case "Fahrenheit":
                    this.setState({nilaiAkhir: e})
                    break;
                    case "Kelvin":
                    var hasil = (e-32)*5/9 + 273.15
                    this.setState({nilaiAkhir: hasil})
                    break;
                }
                break;
            case "Kelvin":
                switch(this.state.derajatTujuan){
                    case "Celcius":
                    var hasil = e - 273.15
                    this.setState({nilaiAkhir: hasil})
                    break;        
                    case "Fahrenheit":
                    var hasil = ((e-273.15)* 9 / 5) + 32 
                    this.setState({nilaiAkhir: hasil})
                    break;
                    case "Kelvin":
                    this.setState({nilaiAkhir: e})
                    break;
                }
                break;
        }
    }    
    render(){
        return(
            <div className="form-group">
            <h4>Konversi Suhu</h4>
            <input type="text" className="form-control" placeholder="isi dengan angka" onChange={this.setNilaiawal.bind(this)}></input>
            <DerajatList derajat="awal" act={this.setDerajatAwal.bind(this)}/>
            <DerajatList derajat="tujuan" act={this.setDerajatTujuan.bind(this)}/>
            <button id="hitung" className="btn btn-primary hitung" onClick={this.hitung.bind(this)} >Hitung</button><br></br>
            Nilai Awal : {this.state.nilaiAwal} {this.state.derajatAwal}<br></br>
            Hasil : {this.state.nilaiAkhir} {this.state.derajatTujuan}
            </div>
        )
    }

    }




export default Suhu