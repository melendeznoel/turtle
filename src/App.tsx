import React from 'react'
import logo from './logo.svg'
import './App.css'
import { useLocation} from 'react-router-dom'

function App () {
  const location = useLocation()

  const {pathname} = location

  console.log(pathname)

  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link"
           href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer">
          Learning React
        </a>
      </header>
    </div>
  )
}

export default App
