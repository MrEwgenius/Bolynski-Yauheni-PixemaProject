import React, { FC } from "react";

import { TabsListType, TabsTypes } from "src/@types";

import styles from "./TabsList.module.scss";
import classNames from "classnames";

type TabsListProps = {
    tabsList: TabsListType;
    activeTab: TabsTypes;
    onTabClick: (tab: TabsTypes) => () => void;
    className?: string
    name?: string
};

const TabsList: FC<TabsListProps> = ({ name, tabsList, className, activeTab, onTabClick }) => {
    return (
        <div>
            <div className={styles.name}>
                {name}
            </div>
            <div
                className={classNames(styles.tabsContainer, className)}>
                {tabsList.map(({ key, title }) => (
                    <div
                        key={key}
                        className={classNames(styles.tabs,
                            { [styles.activeTab]: activeTab === key })}
                        onClick={onTabClick(key)}
                    >
                        {title}

                    </div>
                ))
                }
            </div >
        </div>
    );
};

export default TabsList;