import React, { useState } from 'react'
import Switcher from 'src/components/Switcher/Switcher';
import styles from './Settings.module.scss'
import Title from 'src/components/Title/Title';
import classNames from 'classnames';
import { useThemeContext } from 'src/context/Theme/Context';
import { Theme } from 'src/@types';

const Settings = () => {

    const [switchState, setSwitchState] = useState(false);

    const handleChange = () => {
        // Изменяем состояние свитчера
        // setSwitchState((prevState: any) => !prevState);
        setSwitchState(!switchState);
        

        // Вызываем обработчик события клика (если он предоставлен)


    };

    const { themeValue } = useThemeContext();

    return (
        <div 
        className={classNames(styles.containerSettings, {
            [styles.lightContainer]: themeValue === Theme.Light
        })}
        >
                <Title
                    className={styles.title}
                    title={'Color mode'}
                />
            <div className={styles.containerWrapper}>
                <div>
                    <Title
                        className={styles.titleDark}
                        title={'Dark'}
                    />
                    <div className={styles.descr}>
                        Use dark theme
                    </div>

                </div>
                <Switcher
                    // state={switchState}
                    // onClick={handleChange}
                />
            </div>

        </div>
    );
}

export default Settings;