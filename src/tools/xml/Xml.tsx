import {Button, Input} from "antd";
import {useState} from "react";

const {TextArea} = Input;

function Xml() {
    let [input1, setInput1] = useState('');
    let [input2, setInput2] = useState('');

    let handleEscape = (xml: string) => {
        setInput2(`escaped: ${xml}`)
    }

    let handleUnescape = (xml: string) => {
        setInput1(`unescaped: ${xml}`)
    }

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
                        value={input1}
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
                    <Button onClick={e => handleEscape(input1)}>Escape</Button>
                    <Button onClick={e => handleUnescape(input2)}>Unescape</Button>
                </div>
                <div style={{
                    width: '40%'
                }}>
                    <TextArea
                        rows={20}
                        allowClear={true}
                        value={input2}
                        onChange={(e) => setInput2(e.target.value)}
                        placeholder="Please input escaped XML"
                    />
                </div>
            </div>
        </>
    )
}

export default Xml
