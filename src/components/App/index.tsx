import * as React from 'react'
import logo from './logo.svg'
import './styles.css'

interface AppProps {
  appName?: string
}

class App extends React.Component<AppProps> {
  static defaultProps = {
    appName: 'React'
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to {this.props.appName}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.ts</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
