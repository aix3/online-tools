import {Button, Card} from "antd";
import { Link } from "react-router-dom";

export default function Index() {
    return (
        <div>
            <Card style={{width: 300}}>
                <p>XML Tools</p>
                <Link to='xml'>Goto</Link>
            </Card>
        </div>
    )
}