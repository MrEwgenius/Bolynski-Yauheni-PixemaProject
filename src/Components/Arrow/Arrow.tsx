import React, { FC } from 'react';
import styles from "./Arrow.module.scss";
import classNames from 'classnames';
import { ArrowIcon } from 'src/assets/icons';

type ArrowProps = {
    disabled?: boolean;
    onClick: () => void;
};

const Arrow: FC<ArrowProps> = ({ disabled, onClick }) => {
    return (
        <div
            className={classNames(styles.containerArrow, {
                [styles.disabled]: disabled,
            })}
            onClick={disabled ? () => { } : onClick}
        >
            <ArrowIcon />
        </div>
    );
};

export default Arrow;