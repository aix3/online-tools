import './App.less'

import {Route, Switch} from "react-router-dom";

import Layout from "./pages/layout/Layout";
import Index from "./pages/index/Index";
import Xml from "./pages/xml/Xml";
import Encode from "./pages/encode/Encode";

function App() {
    return (
        <div>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Index}/>
                    <Route path="/xml" exact component={Xml}/>
                    <Route path="/encode" exact component={Encode}/>
                </Switch>
            </Layout>
        </div>
    )
}

export default App
