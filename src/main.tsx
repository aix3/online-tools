import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom";
import './index.css'
import App from './App'

const getBasename = (path: string) => path.substring(0, path.lastIndexOf('/'));

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename={getBasename(window.location.pathname)}>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
