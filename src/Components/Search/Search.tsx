import React, { FC, KeyboardEvent, useState, useEffect } from 'react';
import styles from './Search.module.scss'
import Input from '../Input/Input';
import { FilterIcon } from 'src/assets/icons';
import SelectedFilterModal from 'src/pages/SelectedFilterModal/SelectedFilterModal';
import { useNavigate } from 'react-router-dom';
import { PostSelectors, clearSearchedPosts, getSearchedPosts } from 'src/redux/redusers/postSlice';
import { useDispatch, useSelector } from 'react-redux';

type SearchProps = {
    disabled?: boolean;
    onclick?: () => void
};


const Search: FC<SearchProps> = ({ disabled, onclick }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isSearch, setSearch] = useState(false)
    const [isOpened, setOpened] = useState(false)
    const [isDropdownOpened, setDropdownOpened] = useState(false)
    const [inpValue, setInpValue] = useState('')
    
    const handleSearchOpened = () => {
        setSearch(!isSearch)
        setDropdownOpened(true)
        if (isSearch && inpValue) {
            dispatch(clearSearchedPosts())
            navigate(`/titles/search/title/${inpValue}`)
            setInpValue('')

        }
    }
    const onKeyDown = (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            handleSearchOpened()

        }
    }


    useEffect(() => {
        if (inpValue.length) {

            dispatch(getSearchedPosts({ title: inpValue, isOverwrite: true }))


        } else {
            dispatch(clearSearchedPosts())

        }

    }, [inpValue])
    return (
        <div className={styles.container}>
            <Input
                placeholder='Search...'
                onChange={setInpValue}
                value={inpValue}
                disabled={disabled}
                className={styles.input}
                onKeyDown={onKeyDown}
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
