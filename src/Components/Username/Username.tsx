import React, { FC, useState } from "react";
import classNames from "classnames";
import styles from "./Username.module.scss";
import { ArrowDownIcon, ArrowRightIcon, UserIcon } from "src/assets/icons";
import { useThemeContext } from "src/context/Theme/Context";
import { Theme } from "src/@types";
type UsernameProps = {
    username: string;
    className?: string;

};

const Username: FC<UsernameProps> = ({ username, className }) => {

    let full_name = username.split(' ');
    let initials = full_name[0][0];
    if (username) {
        if (full_name.length >= 2 && full_name[1]) {
            initials += full_name[1][0];
        }
    } else {
        initials = '';

    }
    const [isOpened, setOpened] = useState(false)
    const [active, setActive] = useState(false)

    const arrowMenuOpened = () => {
        setOpened(!isOpened)
    }
    const handleMenuOpened = () => {
        setActive(!active)

    }

    const { themeValue } = useThemeContext();


    return (
        <div>
            <div className={classNames(className, styles.container, {
                [styles.lightContainer]: themeValue === Theme.Light

            })}>
                <div className={styles.initials}>
                    {username ? initials.toUpperCase() : <UserIcon />}
                </div>
                <div className={styles.username}>{username ? username : 'Sign In'}</div>
                <div onClick={!username ? arrowMenuOpened : handleMenuOpened} className={styles.iconContainer}>
                    {username ? <ArrowDownIcon fill={themeValue === Theme.Light ? '#000000' : 'white'} /> : <ArrowRightIcon />}
                </div>
            </div >
            {active ? <div className={styles.activeEditContainer}>
                <div className={styles.wrapUserContainer}>
                    <div className={styles.editContainer}>Edit profile </div>
                    <div className={styles.logOutContainer}>Log Out </div>
                </div>
            </div> : null}
        </div>
    )
    // : (
    //     <div>
    //         <div className={classNames(className, styles.container)}>
    //             <div className={styles.initials}>
    //                 <UserIcon />
    //             </div>
    //             <div className={styles.username}>{"Sign In"}</div>
    //             <div onClick={arrowMenuOpened} className={styles.iconContainer}>
    //                 {isOpened ? <ArrowDownIcon fill="black" /> : <ArrowRightIcon fill="black" />}
    //             </div>
    //         </div >
    //     </div  >
    // )
}

export default Username;