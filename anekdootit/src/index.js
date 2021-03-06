import React from 'react'
import ReactDOM from 'react-dom'

const Votes = (props) => {
  return (
    <div>
      has {props.blaarg.pisteet[props.blaarg.selected]} votes
    </div>
  )
}

const Winner = (props) => {
  let i = props.blaarg.pisteet.indexOf(Math.max(...props.blaarg.pisteet))
  let maxvotes = Math.max(...props.blaarg.pisteet)
  
  return (
    <div>
    <h2>Anecdote with most votes:</h2>
      {anecdotes[i]}<br/>
      has {maxvotes} votes
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
      selected: 0,
      pisteet: [0, 0, 0, 0, 0, 0]
    }
  }

  klikButton = (name) => {
    return () => {
      if (name === "rnd") {
        let x = Math.floor(Math.random() * 6)
        this.setState({
          selected: x
      })}
      if (name === "votes") {
        let kopio = [...this.state.pisteet]
        kopio[this.state.selected] += 1
        this.setState({
          votes: this.state.votes + 1,
          pisteet: kopio
      })}
    }
  }

  render() {
    return (
      <div>
        {this.props.anecdotes[this.state.selected]}
        <div>    
          <Votes blaarg={this.state}/> 
          <Button handleClick={this.klikButton('rnd')} text={"Next anecdote"}/>   
          <Button handleClick={this.klikButton('votes')} text={"Vote"}/>  
          <Winner blaarg={this.state}/> 
        </div>
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)