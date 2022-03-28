import {Button, Card} from "antd";

export default function Index() {
    return (
        <div>
            <Card style={{width: 300}}>
                <p>XML Tools</p>
                <Button href={'xml'}>
                    Goto
                </Button>
            </Card>
        </div>
    )
}