import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'
import App from 'components/App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

async function loadModules() {
  const [home, login, profile] = await Promise.all([
    import(/* webpackChunkName: "home" */ 'entries/home'),
    import(/* webpackChunkName: "login" */ 'entries/login'),
    import(/* webpackChunkName: "profile" */ 'entries/profile')
  ])

  console.log(home.default)
  console.log(login.default)
  console.log(profile.default)
  console.log(home.a === login.a)
}

setTimeout(loadModules, 5000)
