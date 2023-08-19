import React, { FC } from 'react';

import classNames from 'classnames';

import styles from './Title.module.scss'
import { useThemeContext } from 'src/context/Theme/Context';
import { Theme } from 'src/@types';

type TitleProps = {
    title: any;
    onClick?: () => void;
    className?: any;

}

const Title: FC<TitleProps> = ({ title, className }) => {
    const { themeValue } = useThemeContext();

    return (
        <div
            className={classNames(styles.title, className, {
                    [styles.lightContainer]: themeValue === Theme.Light
            })}
        >
            {title}
        </div>
    );
}

export default Title;
