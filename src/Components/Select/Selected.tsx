import React, { FC, useState } from 'react';
import Select from 'react-select';
// import styles from './Selected.module.scss'
// import classNames from 'classnames';


type SelectProps = {
    options: any,
    value?: any,
    isMulti?: boolean
    className?: string
    onChangeSelect?: any;
}
const styles = {
    control: (base: any) => ({
        padding: '16px 20px',
        ...base,
        color: 'white', // Устанавливаем цвет текста на черный
        border: '3px solid transparent',
        borderRadius: '10px',
        background: '#323537',
        '&:active': {
            border: '3px solid #7B61FF'
        },
        // '&:hover': {
        //     border: '3px solid transparent',
        //     backgroundColor: '#323537',

        // },
        fontSize: '26px',    // задаем размер шрифта
        fontWeight: 500,     // задаем толщину шрифта
        lineHeight: '24px',
        width: '438px',
        span: {
            width: '0',
            height: '0',

        },
        svg: {
            color: '#80858B',
            '&:hover': {
                color: '#80858B'
            }
        },


    }),
    menu: (base: any) => ({
        ...base,
        backgroundColor: '#323537', // Изменяем цвет фона выпадающего меню
        borderRadius: '10px', // Изменяем радиус углов выпадающего меню
        width: '438px',



    }),
    option: (base: any) => ({
        ...base,
        fontSize: '26px',    // задаем размер шрифта
        fontWeight: 500,     // задаем толщину шрифта
        lineHeight: '24px', // Изменяем размер шрифта для пунктов меню
        padding: '8px 16px', // Изменяем отступы внутри пунктов меню
        // '&:hover': {

        // },
        backgroundColor: '#323537',
        cursor: 'pointer',
        marginBottom: '20px'
    }),
}


const Selected: FC<SelectProps> = (
    { options,
        isMulti,
        className,
        value,
        onChangeSelect

    }
) => {
    
    return (
        <Select
            onChange={() => { }}
            // inputValue={inputValue}
            // onInputChange={handleInputChange}
            // value={value}
            styles={styles}
            // isMulti={isMulti}
            options={options}
        />
    );
}

export default Selected;