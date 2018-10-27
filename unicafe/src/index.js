
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Statistic = ({nimi, arvo}) => {
  return(
    <div>
      {nimi} {arvo}
    </div>
  )
}

const Statistics = (props) => {
  let lkm = props.stats.hyva + props.stats.neutraali + props.stats.huono
  let keskiarvo = (lkm !== 0 ? ((props.stats.hyva - props.stats.huono) / lkm) : 0).toFixed(1)
  let positiiviset = (lkm !== 0 ? (100*(props.stats.hyva / lkm)) : 0).toFixed(1)
  return (
    <div>
      <h2>statistiikka</h2>
      <Statistic nimi={"Hyvä"} arvo={props.stats.hyva}/>
      <Statistic nimi={"Neutraali"} arvo={props.stats.neutraali}/>
      <Statistic nimi={"Huono"} arvo={props.stats.huono}/>
      <Statistic nimi={"keskiarvo"} arvo={keskiarvo}/>
      <Statistic nimi={"positiivisia"} arvo={positiiviset+"%"}/>
    </div>
  )
}

const Button =  (props) => {
  const { handleClick, text } = props
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0     
    }
  }

  klikHyva = () => {
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
          <Button handleClick={this.klikHyva} text={"Hyvä"}/>
          <Button handleClick={this.klikNeutraali} text={"Neutraali"}/>
          <Button handleClick={this.klikHuono}text={"Huono"}/>
        </div>
        <Statistics stats={this.state}/>
     </div>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)