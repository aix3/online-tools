import './App.css'
import {Route, Routes} from "react-router-dom";

import Xml from "./tools/xml/Xml";
import Index from "./pages/Index";

function App() {
    return (
        <div className={'container'}>
            <div className={'header'}>
                <h1>Online Develop Tools</h1>
                <hr/>
            </div>
            <div>
                <Routes>
                    <Route path="./" element={<Index/>}/>
                    <Route path="./xml" element={<Xml/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App
