import 'antd/dist/antd.less'
import './App.less'
import {Route, Routes} from "react-router-dom";

import Xml from "./pages/xml/Xml";
import Layout from "./pages/layout/Layout";
import Index from "./pages/index/Index";

function App() {
    return (
        <div>
            <Layout>
                <Routes>
                    <Route path="/" element={<Index/>}/>
                    <Route path="/xml" element={<Xml/>}/>
                </Routes>
            </Layout>
        </div>
    )
}

export default App
