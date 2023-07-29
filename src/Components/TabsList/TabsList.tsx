import React, { FC } from "react";

import { TabsListType, TabsTypes } from "src/@types";

import Tab from "./Tab";
import styles from "./TabsList.module.scss";

type TabsListProps = {
    tabsList: TabsListType;
    activeTab: TabsTypes;
    onTabClick: (tab: TabsTypes) => () => void;
};

const TabsList: FC<TabsListProps> = ({ tabsList, activeTab, onTabClick }) => {
    return (
        <div className={styles.tabsContainer}>
            {tabsList.map(({ key, title }) => (
                <Tab
                    key={key}
                    title={title}
                    onClick={onTabClick(key)}
                    active={activeTab === key}
                />
            ))}
        </div>
    );
};

export default TabsList;