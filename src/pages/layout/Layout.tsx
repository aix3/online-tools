import styles from "./Layout.module.less";
import React from "react";

export default function Layout(props: React.PropsWithChildren<any>) {
    return (
        <div>
            <div className={styles.navigation}>
                <div className={styles.logo}>
                    <a href='./'>OnlineTools</a>
                </div>
                <div className={styles.menu}>
                    <li><a href="./">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.content}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}