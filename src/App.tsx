import './App.less'

import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

import {Route, Routes} from "react-router-dom";

import Layout from "./pages/layout/Layout";
import Index from "./pages/index/Index";
import Xml from "./pages/xml/Xml";
import Encode from "./pages/encode/Encode";
import Datetime from "./pages/datetime/Datetime";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index/>}/>
    <Route path="/xml" element={<Xml/>}/>
    <Route path="/encode" element={<Encode/>}/>
    <Route path="/datetime" element={<Datetime/>}/>
  </Routes>
)

function App() {
  return <Layout><AppRoutes/></Layout>
}

export default App
