import classNames from 'classnames';
import React, { ChangeEvent, FC, KeyboardEvent } from 'react';

import { useThemeContext } from 'src/context/Theme/Context';
import { Theme } from 'src/@types';

import styles from "./Input.module.scss";

type InputProps = {
    title?: string,
    errorText?: string,
    placeholder: string,
    onChange: (value: string) => void,
    disabled?: boolean,
    value: string,
    className?: string,
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = ({
    title,
    errorText,
    placeholder,
    onChange,
    disabled,
    value,
    className,
    onKeyDown,
}) => {

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)
    }

    const { themeValue } = useThemeContext();
    return (
        <div className={classNames(styles.container, className, {
            [styles.lightContainer]: themeValue === Theme.Light
        })}>
            {title && <div className={styles.title}>{title}</div>}
            <input className={classNames(styles.input, {
                [styles.disabled]: disabled,
                [styles.errorInput]: errorText,
            })}
                onChange={onInputChange}
                value={value}
                placeholder={placeholder}
                onKeyDown={onKeyDown}
            />
            {errorText && <div className={styles.errorText}>{errorText}</div>}

        </div>
    );
}

export default Input;