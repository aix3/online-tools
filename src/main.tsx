import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter} from "react-router-dom";
import App from './App'

const getBasename = (path: string) => path.substring(0, path.lastIndexOf('/'));

ReactDOM.render(
    <React.StrictMode>
        <HashRouter basename={getBasename(window.location.pathname)}>
            <App/>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
