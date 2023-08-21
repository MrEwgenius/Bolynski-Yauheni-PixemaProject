import React, { FC } from 'react';
import Select from 'react-select';
import classNames from 'classnames';

import './MultiSelect.scss'


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
   
}


const MultiSelect: FC<SelectProps> = (
    {
        options,
        isMulti,
        isDisabled,

        className,
        title,

    }
) => {

    return (
        <div className={className}>
            <div className='title'>{title}</div>
            <Select
                onChange={() => { }}
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