import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

import { ButtonGroupList } from 'src/@types';

import styles from './ButtonsGroup.module.scss'



type ButtonsGroupProps = {
    disabled?: boolean,
    ButtonGroupList: ButtonGroupList,

}

const ButtonsGroup: FC<ButtonsGroupProps> = ({
    disabled,
    ButtonGroupList

}) => {


    return (
        <div
            className={classNames(styles.buttonGroupContainer,
                { [styles.disabled]: disabled }
            )}
        >
            {ButtonGroupList.map((ket, index) => {
                return (
                    <div
                        key={index}
                        className={styles.button}
                        onClick={ket.onClick}
                    >
                        {ket.title}
                    </div>
                );
            })}
        </div >
    );
}

export default ButtonsGroup;