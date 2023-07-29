import classNames from 'classnames';
import React, { ChangeEvent, FC } from 'react';

import styles from "./Input.module.scss";

type InputProps = {
    title: string,
    errorText?: string,
    placeholder: string,
    onChange: (value: string) => void,
    disabled?: boolean,
    value: string,
    className?: string,
}

const Input: FC<InputProps> = ({
    title,
    errorText,
    placeholder,
    onChange,
    disabled,
    value,
    className,
}) => {

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)
    }


    return (
        <div className={classNames(styles.container, className)}>
            <div className={styles.title}>{title}</div>
            <input className={classNames(styles.input, {
                [styles.disabled]: disabled,
                [styles.errorInput]: errorText,
            })}
                onChange={onInputChange}
                value={value}
                placeholder={placeholder}
            />
            {errorText && <div className={styles.errorText}>{errorText}</div>}

        </div>
    );
}

export default Input;