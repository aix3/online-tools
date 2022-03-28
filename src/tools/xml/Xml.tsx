import {Button, Input} from "antd";
import {useState} from "react";

const {TextArea} = Input;

function Xml() {
    let [input1, setInput1] = useState('');
    let [input2, setInput2] = useState('');

    return (
        <>
            <div style={{
                display: "flex",
                flexFlow: "row",
                justifyContent: "space-between",
            }}>
                <div style={{
                    width: '40%'
                }}>
                    <TextArea
                        rows={20}
                        allowClear={true}
                        onChange={(e) => setInput1(e.target.value)}
                        placeholder="Please input escaped XML"
                    />
                </div>
                <div style={{
                    display: "flex",
                    flexFlow: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Button>Escape</Button>
                    <Button>Unescape</Button>
                </div>
                <div style={{
                    width: '40%'
                }}>
                    <TextArea
                        rows={20}
                        allowClear={true}
                        onChange={(e) => setInput2(e.target.value)}
                        placeholder="Please input escaped XML"
                    />
                </div>
            </div>
        </>
    )
}

export default Xml
