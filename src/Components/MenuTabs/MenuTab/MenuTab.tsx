import React, { ReactElement, ReactNode, FC } from 'react';
import styles from "./MenuTab.module.scss";
import classNames from 'classnames';



type TabsProps = {
    icon: ReactNode
    title: string | ReactElement;
    onClick?: () => void;
    active?: boolean;
};

const MenuTab: FC<TabsProps> = ({ title, onClick, icon, active }) => {

    return (
        <div
            onClick={onClick}
            className={classNames(styles.tab, {
                [styles.active]: active,
            })}
        >
            <div className={styles.icon}> {icon}  </div>
            <div className={styles.title}> {title} </div>
        </div>
    );
};

export default MenuTab;