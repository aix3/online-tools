import {Card, Select} from "antd";
import {Link} from "react-router-dom";

import styles from "./Index.module.less"
import {useState} from "react";

interface Tool {
    title: string
    description: string
    route: string
}

const tools = [
    {
        "title": "XML Tools",
        "description": "Escape / Unescape / Others",
        "route": "xml"
    },
    {
        "title": "Encode Tools",
        "description": "Base64 / Base32 / Others",
        "route": "encode"
    },
    {
        "title": "JSON Tools",
        "description": "Escape / Unescape / Others",
        "route": "json"
    }
] as Tool[]

export default function Index() {
    const [result, setResult] = useState([] as Tool[])
    const [keyword, setKeyword] = useState('')

    const handleSearch = function (keyword: string) {
        setKeyword(keyword)
        setResult(tools.filter(
                r => r.title.toLowerCase().includes(keyword.toLowerCase())
                    || r.description.toLowerCase().includes(keyword.toLowerCase())
            )
        )
    }

    return (
        <div>
            <div className={styles.searchContainer}>
                <Select
                    className={styles.search}
                    showSearch
                    value={keyword}
                    size={'large'}
                    placeholder={'Search ...'}
                    defaultActiveFirstOption={false}
                    showArrow={false}
                    filterOption={false}
                    onSearch={handleSearch}
                    notFoundContent={null}
                >
                    {result.map(r => {
                        return (
                            <Select.Option key={r.route}>
                                <Link to={r.route}>
                                    <h3>{r.title}</h3>
                                    <p className={styles.description}>{r.description}</p>
                                </Link>
                            </Select.Option>
                        )
                    })}
                </Select>
            </div>
            <div style={{height: '50px'}}/>
            <div className={styles.cards}>
                {tools.map(t => {
                    return (
                        <Link to={`/${t.route}`}>
                            <Card
                                key={t.route}
                                hoverable
                            >
                                <h3>{t.title}</h3>
                                <p>{t.description}</p>
                            </Card>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}