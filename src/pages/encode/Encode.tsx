import {Button, Input, Space} from "antd";
import {SwapOutlined} from "@ant-design/icons";
import {useState} from "react";
import styles from "./Encode.module.less"
import {classNames} from "../../utils/classNames";

const {TextArea} = Input;

function utf8_to_b64(str: string) {
    return window.btoa(unescape(encodeURIComponent(str)));
}

function b64_to_utf8(str: string) {
    return decodeURIComponent(escape(window.atob(str)));
}

function Encode() {
    let [input, setInput] = useState('');
    let [result, setResult] = useState('');
    let [errorMessage, setErrorMessage] = useState('');

    function clean() {
        setErrorMessage('')
        setResult('')
    }

    let handleBase64Encode = (input: string) => {
        clean();
        setResult(utf8_to_b64(input));
    }

    let handleBase64Decode = (input: string) => {
        clean()
        let value;
        try {
            value = b64_to_utf8(input);
            setResult(value);
        } catch (error) {
            setErrorMessage("Oops, base64 decode error");
        }
    }

    let handleSwap = () => {
        setInput(result)
        setResult(input)
    }

    return (
        <>
            <div>
                <h4>Encode Tools</h4>
            </div>
            <div className={styles.container}>
                <div>
                    <TextArea
                        rows={17}
                        value={input}
                        onChange={e => setInput(e.target.value)}
                    />
                    <span>{errorMessage}</span>
                </div>
                <div className={styles.buttonContainer}>
                    <Space>
                        <Button type={'primary'}
                                className={styles.button}
                                onClick={() => handleBase64Encode(input)}>
                            Base64 Encode
                        </Button>
                        <Button type={'primary'}
                                className={classNames(styles.button, styles.buttonGreen)}
                                onClick={() => handleBase64Decode(input)}>
                            Base64 Decode
                        </Button>
                        <Button icon={<SwapOutlined className={styles.rotate90}/>}
                                className={styles.button}
                                onClick={() => handleSwap()}>
                            Swap
                        </Button>
                    </Space>
                </div>
                <div>
                    <TextArea
                        rows={17}
                        value={result}
                        onChange={e => setResult(e.target.value)}
                    />
                </div>
            </div>
        </>
    )
}

export default Encode
