import React, { FC, ReactNode } from 'react';
import styles from './MenuTabsList.module.scss'
import MenuTab from './MenuTab/MenuTab';
import { MenuListType, MenuTypes } from 'src/@types';


type TabsListProps = {
    tabsList: MenuListType;
    activeTab: MenuTypes;
    onTabClick: (tab: MenuTypes) => () => void;
};

const MenuTabsList: FC<TabsListProps> = ({ tabsList, activeTab, onTabClick }) => {
    return (
        <div className={styles.containerMenuTabs}>
            <div className={styles.menuWrapper}>
                {tabsList.map(({ key, title, icon }) => {
                    return (
                        <MenuTab
                            icon={icon}
                            key={key}
                            title={title}
                            onClick={onTabClick(key)}
                            active={activeTab === key}
                        />
                    )
                })}
            </div>
            <div className={styles.footer}>© All Rights Reserved</div>


        </div>
    );
};

export default MenuTabsList;