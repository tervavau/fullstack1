
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

  class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        hyva: 0,
        neutraali: 0,
        huono: 0,
        keskiarvo: 0,
        positiivisia: 0
      }
    }
  
    palautteitaAnnettu() {
        return (this.state.hyva + this.state.neutraali + this.state.huono)
    }
    laskeKeskiarvo() {
        if (this.palautteitaAnnettu())
          return ((this.state.hyva - this.state.huono) / this.palautteitaAnnettu()).toFixed(1)
        else return 0
    }
    laskePositiiviset() {
      if (this.palautteitaAnnettu())
        return (100*(this.state.hyva / (this.palautteitaAnnettu()))).toFixed(1)
      else return 0
    }

    klikHyva = () => {
        //debugger
      this.setState({
        hyva: this.state.hyva + 1       
      })
    }
  
    klikNeutraali = () => {
      this.setState({
        neutraali: this.state.neutraali + 1
      })
    }
    klikHuono = () => {
        this.setState({
          huono: this.state.huono + 1
        })
      }
    render() {
      return (
        <div>
          <h2>anna palautetta</h2>
          <div>           
            <button onClick={this.klikHyva}>Hyvä</button>
            <button onClick={this.klikNeutraali}>Neutraali</button>
            <button onClick={this.klikHuono}>Huono</button>
            <h2>statistiikka</h2>
            <p>Hyvä {this.state.hyva}<br />
            Neutraali {this.state.neutraali}<br />
            Huono {this.state.huono}<br />
            Keskiarvo {this.laskeKeskiarvo()}<br />
            Positiivisia {this.laskePositiiviset()}%<br />
            </p>
          </div>
        </div>
      )
    }
  }
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )