/* eslint-disable no-undef */
import * as React from 'react'
import logo from './logo.svg'
import './App.css'

class App extends React.Component {
  Component: any
  componentWillMount() {
    setTimeout(() => {
      import('./App1').then(Component => {
        this.Component = Component
        this.forceUpdate()
      })
    }, 3000)
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.ts</code> and save to reload.
        </p>
        {this.Component && <this.Component.default />}
      </div>
    )
  }
}

export default App
