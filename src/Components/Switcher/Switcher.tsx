import React, { Component, FC, useState } from "react";
import Switch from "react-switch";
import style from './Switcher.module.scss'
import { useThemeContext } from "src/context/Theme/Context";
import { Theme } from "src/@types";

type SwitchProps = {
    disabled?: boolean;
    onClick?: () => void;
    state?: boolean;
};
const Switcher: FC<SwitchProps> = ({ disabled, onClick, state }) => {

    const { themeValue, onChangeTheme } = useThemeContext();
    const [switchState, setSwitchState] = useState(true);

    const handleChange = () => {
        // Изменяем состояние свитчера
        setSwitchState((prevState: any) => !prevState);
        if (switchState) {
            onChangeTheme(Theme.Light)
            

        } else {
            onChangeTheme(Theme.Dark)
        }
        // setSwitchState(!switchState);



        // Вызываем обработчик события клика (если он предоставлен)

    };

    return (
        <div>

            <Switch
                className={style.switcher}
                width={32}
                height={20}
                handleDiameter={16}
                activeBoxShadow='none'
                offColor={themeValue ? "#80858B" : '#AFB2B6'}
                onColor={disabled ? '#7B61FF' : '#917CFF'}
                // offColor={'#AFB2B6'}
                // onColor={'#917CFF'}
                checkedIcon={false}
                uncheckedIcon={false}
                disabled={disabled}
                onChange={handleChange}
                checked={switchState}
            />
        </div >
    );
}

export default Switcher;