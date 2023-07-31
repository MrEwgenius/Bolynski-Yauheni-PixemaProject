import React, { FC } from "react";

import { TabsListType, TabsTypes } from "src/@types";

import Tab from "./Tab";
import styles from "./TabsList.module.scss";
import classNames from "classnames";

type TabsListProps = {
    tabsList: TabsListType;
    activeTab: TabsTypes;
    onTabClick: (tab: TabsTypes) => () => void;
    className?: string
};

const TabsList: FC<TabsListProps> = ({ tabsList, className, activeTab, onTabClick }) => {
    return (
        <div className={classNames(styles.tabsContainer)}>
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