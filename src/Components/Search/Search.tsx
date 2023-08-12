import React, { FC, KeyboardEvent, useState } from 'react';
import styles from './Search.module.scss'
import Input from '../Input/Input';
import { FilterIcon } from 'src/assets/icons';
import SelectedFilterModal from 'src/pages/SelectedFilterModal/SelectedFilterModal';

type SearchProps = {
    disabled?: boolean;
    onclick?: () => void
};


const Search: FC<SearchProps> = ({ disabled, onclick }) => {
    const [inpValue, setInpValue] = useState('')
    const onKeyDown = (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            // handleSearchOpened()
            console.log(1);

        }
    }
    return (
        <div className={styles.container}>
            <Input
                placeholder='Search'
                onChange={setInpValue}
                value={inpValue}
                disabled={disabled}
                className={styles.input}
            />
            <div
                onClick={onclick}
                className={styles.filterIcon}
            >
                <FilterIcon fill={disabled ? '#AFB2B6' : 'white'} />
            </div>

            {/* {isOpenFilter && <SelectedFilterModal onClick={onclick} />} */}
        </div>
    );
}

export default Search;
