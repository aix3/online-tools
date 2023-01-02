import {Button, Input, Space, Typography} from "antd";
import {useEffect, useMemo, useState} from "react";
import styles from "./Xml.module.less"
import {classNames} from "../../utils/classNames";

import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/theme-tomorrow";

function Datetime() {
  let [current, setCurrent] = useState<Date>(new Date());

  let [inputTime, setInputTime] = useState<string>('');
  let [inputTimestamp, setInputTimestamp] = useState<number>();

  useEffect(() => {
    setTimeout(() => {
      setCurrent(new Date())
    }, 1000)
  }, [current])

  const [formattedTime, setFormattedTime] = useState<string | null>(null)
  const [formattedTimestamp, setFormattedTimestamp] = useState<number | null>(null)

  const handleConvertToTime = () => {
    if (inputTimestamp) {
      setFormattedTime(new Date(inputTimestamp).toLocaleString( 'sv', { timeZoneName: 'short' } ))
    }
  }

  const handleConvertToTimestamp = () => {
    setFormattedTimestamp(new Date(inputTime).getTime())
  }

  return (
    <>
      <div>
        <h4>Datetime Tools</h4>
      </div>
      <div className={styles.container}>
        <div>
          <ul>
            <li><b>Current time: </b>{current?.toLocaleString( 'sv', { timeZoneName: 'short' } )}</li>
            <li><b>Current timestamp:</b>
              <Typography.Text copyable>{current?.getTime()}</Typography.Text>
            </li>
          </ul>
          <ul>
            <li>
              <Space>
                <b>Time: </b>
                <Input
                  type="text"
                  placeholder="2023-01-01 01:00:00"
                  value={inputTime}
                  onChange={(e) => setInputTime(e.target.value)}
                  allowClear
                />
                <Button type={'primary'}
                        className={styles.button}
                        onClick={() => handleConvertToTimestamp()}
                >
                  Convert
                </Button>
              </Space>
            </li>
            <li>
              <Space>
                <b>Timestamp:</b>
                <Typography.Text copyable>{formattedTimestamp ?? '-'}</Typography.Text>
              </Space>
            </li>
          </ul>
          <ul>
            <li>
              <Space>
                <b>Timestamp: </b>
                <Input
                  type="number"
                  placeholder="1672671312651"
                  value={inputTimestamp}
                  onChange={(e) => setInputTimestamp(parseInt(e.target.value))}
                  allowClear
                />
                <Button type={'primary'}
                        className={styles.button}
                        onClick={() => handleConvertToTime()}
                >
                  Convert
                </Button>
              </Space>
            </li>
            <li>
              <Space>
                <b>Time:</b>
                <Typography.Text copyable>{formattedTime ?? '-'}</Typography.Text>
              </Space>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Datetime
