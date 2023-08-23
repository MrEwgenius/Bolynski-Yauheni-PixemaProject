import React, { FC, KeyboardEvent } from 'react';
import classNames from 'classnames';

import { FilterIcon } from 'src/assets/icons';
import { Theme } from 'src/@types';
import { useThemeContext } from 'src/context/Theme/Context';

import styles from './Search.module.scss'
import Input from '../Input/Input';

type SearchProps = {
    placeholder: string,
    onChange: (value: string) => void,
    disabled?: boolean,
    value: string,
    className?: string,
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void,
    onClick?: () => void
};


const Search: FC<SearchProps> = ({
    onClick,
    onChange,
    disabled,
    value,
    onKeyDown
}) => {
    const { themeValue } = useThemeContext();
    return (
        <div
            className={classNames(styles.container, {
                [styles.lightContainer]: themeValue === Theme.Light
            })}
        >
            <Input
                placeholder='Search...'
                onChange={onChange}
                value={value}
                disabled={disabled}
                className={styles.input}
                onKeyDown={onKeyDown}
            />
            <div
                onClick={onClick}
                className={styles.filterIcon}
            >
                <FilterIcon fill={themeValue === Theme.Light ? '#242426' : 'white'} />
            </div>

        </div>
    );
}

export default Search;
