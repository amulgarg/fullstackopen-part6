import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {

  const { good, ok, bad } = store.getState();
  const total = good + ok + bad;

  const handleReaction = (reaction) => {
    store.dispatch({
      type: reaction
    })
  }

  return (
    <div>
      <h2>Give feedback</h2>
      <button onClick={() => handleReaction('GOOD')}>good</button> 
      <button onClick={() => handleReaction('OK')}>neutral</button> 
      <button onClick={() => handleReaction('BAD')}>bad</button>
      <button onClick={() => handleReaction('ZERO')}>reset stats</button>
      <h2>Statistics</h2>
      {(good == 0 && ok == 0 && bad == 0) ? <p>No feedback given</p> : 
      <React.Fragment>
      <div>good {good}</div>
      <div>neutral {ok}</div>
      <div>bad {bad}</div>
      <div>all { total }</div>
      <div>average { (good - bad) / (total) }</div>
      <div>positive { (good/total) * 100 }</div></React.Fragment>}
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
