import React, {useEffect, useState} from 'react'
import logo from './logo.svg'
import './App.css'
import {useLocation} from 'react-router-dom'

function App() {
    const [orgCssLoaded, setOrgCssLoaded] = useState(false)

    const location = useLocation()

    const {pathname} = location

    const orgDomain = pathname.split('/')[1]

    useEffect(() => {
        const orgCssUrl = 'https://s3.us-east-2.amazonaws.com/purplepigeon.cloud/pico.min.css'

        const cssLink = document.createElement('link')

        if (orgDomain === 'bunny') {
            cssLink.rel = 'stylesheet'
            cssLink.href = orgCssUrl

            cssLink.onload = () => setOrgCssLoaded(true)

            document.head.appendChild(cssLink)
        }
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
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

            {orgCssLoaded ? <p>CSS loaded!</p> : <p>Loading CSS...</p>}

            <button className="secondary">Secondary</button>
            <button className="contrast">Contrast</button>
        </div>
    )
}

export default App
