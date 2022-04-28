import {Button, Input, Space} from "antd";
import {useState} from "react";
import styles from "./Xml.module.less"
import {classNames} from "../../utils/classNames";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/theme-tomorrow";

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
    let [result, setResult] = useState('');

    let handleEscape = (xml: string) => {
        setResult(escape(xml));
    }

    let handleUnescape = (xml: string) => {
        setResult(unescape(xml));
    }

    return (
        <>
            <div>
                <h4>XML Tools</h4>
            </div>
            <div className={styles.container}>
                <div style={{border: "solid 1px"}}>
                    <AceEditor
                        width={'100%'}
                        height={'calc(100vh - 200px)'}
                        focus
                        mode="xml"
                        theme="tomorrow"
                        fontSize={14}
                        showPrintMargin={true}
                        showGutter={true}
                        highlightActiveLine={true}
                        value={result}
                        onChange={(v) => {
                            setResult(v)
                        }}
                        setOptions={{
                            enableBasicAutocompletion: false,
                            enableLiveAutocompletion: false,
                            enableSnippets: false,
                            showLineNumbers: true,
                            tabSize: 2,
                        }}/>
                </div>
                <div className={styles.buttonContainer}>
                    <Space>
                        <Button type={'primary'}
                                className={styles.button}
                                onClick={() => handleEscape(result)}>
                            Escape
                        </Button>
                        <Button type={'primary'}
                                className={classNames(styles.button, styles.buttonGreen)}
                                onClick={() => handleUnescape(result)}>
                            Unescape
                        </Button>
                        <Button type={'default'}
                                className={classNames(styles.button)}
                                onClick={() => setResult('')}>
                            Clean
                        </Button>
                    </Space>
                </div>
            </div>
        </>
    )
}

export default Xml
