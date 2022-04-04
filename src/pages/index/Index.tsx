import {Card, Select} from "antd";
import {Link} from "react-router-dom";

import styles from "./Index.module.less"

const {Option} = Select;

export default function Index() {
    return (
        <div>
            {/*<div className={styles.searchContainer}>*/}
            {/*    <Select*/}
            {/*        className={styles.searchInput}*/}
            {/*        showSearch*/}
            {/*        size={"large"}*/}
            {/*        placeholder={'Please input the keyword'}*/}
            {/*        defaultActiveFirstOption={false}*/}
            {/*        showArrow={false}*/}
            {/*        filterOption={false}*/}
            {/*        notFoundContent={null}*/}
            {/*    >*/}
            {/*        /!*<Option key={1}>{'111111'}</Option>*!/*/}
            {/*        /!*<Option key={2}>{'2222222'}</Option>*!/*/}
            {/*    </Select>*/}
            {/*</div>*/}
            <div style={{height: '50px'}}/>
            <div className={styles.cards}>
                <Link to='/xml'>
                    <Card
                        key={'xml'}
                        hoverable
                    >
                        <h3>XML Tools</h3>
                        <p>Escape / Unescape / Others</p>
                    </Card>
                </Link>
            </div>
        </div>
    )
}