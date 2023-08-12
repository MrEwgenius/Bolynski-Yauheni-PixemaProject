import React, { Component, FC, useState } from "react";
import Switch from "react-switch";
import style from './Switcher.module.scss'

type SwitchProps = {
    disabled?: boolean;
    onClick: () => void;
    state: boolean;
};
const Switcher: FC<SwitchProps> = ({ disabled, onClick, state }) => {

    return (
        <div>

            <Switch
                className={style.switcher}
                width={32}
                height={20}
                handleDiameter={16}
                activeBoxShadow='none'
                offColor={disabled ? "#80858B" : '#AFB2B6'}
                onColor={disabled ? '#7B61FF' : '#917CFF'}
                // offColor={'#AFB2B6'}
                // onColor={'#917CFF'}
                checkedIcon={false}
                uncheckedIcon={false}
                disabled={disabled}
                onChange={onClick}
                checked={state}
            />
        </div >
    );
}

export default Switcher;