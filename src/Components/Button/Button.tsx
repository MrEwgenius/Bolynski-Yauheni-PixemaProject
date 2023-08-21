import React, { FC, ReactElement } from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss'


export enum ButtonTypes {
    Primary = 'primary',
    Secondary = 'secondary',

}
type ButtonProps = {
    type: ButtonTypes,
    title: string | ReactElement,
    onClick: () => void,
    disabled?: boolean,
    className?: string
}


const Button: FC<ButtonProps> = ({
    type,
    title,
    onClick,
    className,
    disabled
}) => {

    const buttonStyle = styles[type]

    return (
        <div
            className={classNames(buttonStyle, className, { [styles.disabled]: disabled })}
            onClick={!disabled ? onClick : undefined}
        >
            {title}
        </div>
    );
}

export default Button;