import React, { Component } from 'react'
import Juego from './Juego.js'
import Letras from './Letras.js'
import  './Main.css';

export default class Main extends Component {

    state={
        letrasCorrectas: [],
        numeroIntentos: 6,
        palabraEnJuego: "",
        palabrasJugadas: [],
        palabras: ["CASA", "KATY", "ANGEL", "BOTELLA"],
        abecedario: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"]
    }

    componentDidMount(){
        let num = Math.floor((Math.random() * (this.state.palabras.length-0))+0);
        console.log(num);
        this.setState({palabraEnJuego:this.state.palabras[num]});
    }

    handleLetraSeleccionada = (e) => {
        console.log(e.target.value);
        let palabra = this.state.palabraEnJuego;
        if(!palabra.includes(e.target.value)){
            this.setState(prevState => ({
                numeroIntentos: prevState.numeroIntentos-1
              }));
            
        }else{
            this.setState({letrasCorrectas:this.state.letrasCorrectas.push(e.target.value)})
            }
           
            
    }


    render() {
        console.log("PALABRA EN JUEGO");
        console.log(this.state.palabraEnJuego); 
        return (
            <div className="container">
                <Juego palabraEnJuego={this.state.palabraEnJuego} numeroIntentos={this.state.numeroIntentos} letrasCorrectas={this.state.letrasCorrectas}/>
                <Letras abecedario={this.state.abecedario} handleLetraSeleccionada={this.handleLetraSeleccionada} handlerJuego={this.handlerJuego}/>
            </div>
        )
    }
}
