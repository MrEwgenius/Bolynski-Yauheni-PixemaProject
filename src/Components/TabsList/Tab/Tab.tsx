import React, { FC, ReactElement } from "react";
import classNames from "classnames";


import styles from "./Tab.module.scss";
import { TabsTypes } from "src/@types";


type TabsProps = {
    title: string | ReactElement;
    onClick?: () => void;
    active?: boolean;
};

const Tab: FC<TabsProps> = ({ title, onClick, active }) => {


    return (
        <div
            onClick={onClick}
            className={classNames(styles.tab, {
                [styles.active]: active,
                // [styles.Rating]: title === 'Rating',
                // [styles.Year]: title === 'Year'

            })}
        >
            {title}
        </div >
    );
};
export default Tab;
