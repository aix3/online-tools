import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router} from 'react-router-dom'
import App from './App'

const getBasename = (path: string) => path.substring(0, path.lastIndexOf('/'));

ReactDOM.render(
    <React.StrictMode>
        <Router> {/*basename={getBasename(window.location.pathname)}>*/}
            <App/>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
