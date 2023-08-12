import React, { FC, FocusEventHandler, useState } from 'react';
import Select from 'react-select';
// import styles from './MultiSelect.module.scss'
import './MultiSelect.scss'
import classNames from 'classnames';
// import classNames from 'classnames';


type SelectProps = {
    options: any,
    value?: any,
    isMulti?: boolean
    onChangeSelect?: any;
    isDisabled?: boolean;
    className?: string
    title?: string;
}
const styles = {
    // control: (baseStyles: any,) => ({
    //     ...baseStyles,
    //     backgroundColor: "red",

    // }),
    // option: (provided: any, state: any) => ({
    //     ...provided,
    //     borderBottom: '4px dotted pink',
    //     color: state.isSelected ? 'red' : 'blue',
    //     padding: '20px',
    // }),


    //     svg: {
    //         color: '#80858B',
    //         '&:hover': {
    //             color: '#80858B'
    //         }
    //     },


    // }),
    // menu: (base: any) => ({
    //     ...base,
    //     backgroundColor: '#323537', // Изменяем цвет фона выпадающего меню
    //     borderRadius: '10px', // Изменяем радиус углов выпадающего меню
    //     width: '438px',



    // }),
    // option: (base: any) => ({
    //     ...base,
    //     fontSize: '26px',    // задаем размер шрифта
    //     fontWeight: 500,     // задаем толщину шрифта
    //     lineHeight: '24px', // Изменяем размер шрифта для пунктов меню
    //     padding: '8px 16px', // Изменяем отступы внутри пунктов меню
    //     // '&:hover': {

    //     // },
    //     backgroundColor: '#323537',
    //     cursor: 'pointer',
    //     marginBottom: '20px'
    // }),
    // valueContainer: (base: any) => ({
    //     ...base,
    //     color: 'red',

    //     gap: '12px'
    // }),
    // input: (base: any) => ({
    //     ...base,
    //     color: '#80858B',


    // }),
    // multiValueLabel: (base: any) => ({
    //     ...base,
    //     color: 'white', // Изменяем цвет текста выбранного значения
    //     fontSize: '16px', // Изменяем размер шрифта выбранного значения
    //     fontWeight: 500,     // задаем толщину шрифта
    //     lineHeight: '24px',
    //     cursor: 'pointer',
    //     padding: '4px 8px',
    // }),
    // multiValue: (base: any) => ({
    //     ...base,

    //     borderRadius: '6px',
    //     color: 'white', // Изменяем цвет текста выбранного значения
    //     fontSize: '16px', // Изменяем размер шрифта выбранного значения
    //     backgroundColor: '#242426',
    // }),



}


const MultiSelect: FC<SelectProps> = (
    {
        options,
        isMulti,
        isDisabled,

        className,
        title,
        value,
        onChangeSelect,
        // classNamePrefix

    }
) => {

    return (
        <div className={className}>
            <div className='title'>{title}</div>
            <Select
                onChange={() => { }}
                // inputValue={inputValue}
                // onInputChange={handleInputChange}
                // value={value}
                isDisabled={isDisabled}
                className={classNames("customSelect")}
                classNamePrefix="customSelect"
                styles={styles}
                unstyled
                isMulti={isMulti}
                options={options}
            />
        </div>
    );
}

export default MultiSelect;