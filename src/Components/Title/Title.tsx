import React, { FC } from 'react';

import classNames from 'classnames';

import styles from './Title.module.scss'

type TitleProps = {
    title: any;
    onClick?: () => void;
    className?: any;

}

const Title: FC<TitleProps> = ({ title, className }) => {
    return (
        <div
            className={classNames(styles.title, className, {
            })}
        >
            {title}
        </div>
    );
}

export default Title;
