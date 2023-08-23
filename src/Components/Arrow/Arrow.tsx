import React, { FC } from 'react';
import classNames from 'classnames';

import { ArrowIcon } from 'src/assets/icons';

import styles from "./Arrow.module.scss";

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