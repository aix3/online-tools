import './App.less'

import {Route, Routes} from "react-router-dom";

import Layout from "./pages/layout/Layout";
import Index from "./pages/index/Index";
import Xml from "./pages/xml/Xml";
import Encode from "./pages/encode/Encode";

function App() {
    return (
        <div>
            <Layout>
                <Routes>
                    <Route path="/" element={<Index/>}/>
                    <Route path="/xml" element={<Xml/>}/>
                    <Route path="/encode" element={<Encode/>}/>
                </Routes>
            </Layout>
        </div>
    )
}

export default App
