import React, { FC, ReactElement } from 'react';
import styles from './Button.module.scss'
import classNames from 'classnames';


export enum ButtonTypes {
    Primary = 'primary',
    Secondary = 'secondary',

}
type ButtonProps = {
    type: ButtonTypes,
    title: string | ReactElement,
    onClick: () => void,
    disabled?: boolean,
}


const Button: FC<ButtonProps> = ({ type, title, onClick, disabled }) => {

    const buttonStyle = styles[type]

    return (
        <div
            className={classNames(buttonStyle, { [styles.disabled]: disabled })}
            onClick={!disabled ? onClick : undefined}
        >
            {title}
        </div>
    );
}

export default Button;