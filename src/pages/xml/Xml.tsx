import {Button, Input} from "antd";
import {SwapOutlined} from "@ant-design/icons";
import {useState} from "react";
import styles from "./Xml.module.less"
import {classNames} from "../../utils/classNames";

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

    let handleSwap = () => {
        setInput(result)
        setResult(input)
    }

    return (
        <>
            <div>
                <h4>XML Tools</h4>
            </div>
            <div className={styles.container}>
                <div>
                    <TextArea
                        rows={17}
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder="Please input the XML to be evaluate"
                    />
                </div>
                <div className={styles.buttonContainer}>
                    <Button type={'primary'}
                            className={styles.button}
                            onClick={() => handleEscape(input)}>
                        Escape
                    </Button>
                    <Button type={'primary'}
                            className={classNames(styles.button, styles.buttonGreen)}
                            onClick={() => handleUnescape(input)}>
                        Unescape
                    </Button>
                    <Button icon={<SwapOutlined className={styles.rotate90}/>}
                            className={styles.button}
                            onClick={() => handleSwap()}>
                        Swap
                    </Button>
                </div>
                <div>
                    <TextArea
                        rows={17}
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
