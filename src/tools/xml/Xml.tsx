import {Button, Input} from "antd";
import {useState} from "react";
import styles from "./Xml.module.css"

const {TextArea} = Input;

function escape(xml: string): string {
    return xml.replace(/[<>&'"]/g, function (c: string): string {
        switch (c) {
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '&':
                return '&amp;';
            case '\'':
                return '&apos;';
            case '"':
                return '&quot;';
        }
        return c
    });
}

function unescape(xml: string): string {
    const txt = document.createElement("textarea");
    txt.innerHTML = xml;
    return txt.value;
}

function Xml() {
    let [input, setInput] = useState('');
    let [result, setResult] = useState('');

    let handleEscape = (xml: string) => {
        setResult(escape(xml));
    }

    let handleUnescape = (xml: string) => {
        setResult(unescape(xml));
    }

    return (
        <>
            <div style={{
                display: "flex",
                flexFlow: "column",
                justifyContent: "space-between",
            }}>
                <div style={{}}>
                    <TextArea
                        rows={15}
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder="Please input the XML to be evaluate"
                    />
                </div>
                <div className={styles.buttonContainer}>
                    <Button type={'primary'} className={`${styles.button}`}
                            onClick={() => handleEscape(input)}>Escape</Button>
                    <Button type={'default'} className={`${styles.button}`}
                            onClick={() => handleUnescape(input)}>Unescape</Button>
                </div>
                <div style={{}}>
                    <TextArea
                        rows={15}
                        value={result}
                        onChange={e => setResult(e.target.value)}
                        placeholder="The result of evaluated"
                    />
                </div>
            </div>
        </>
    )
}

export default Xml
