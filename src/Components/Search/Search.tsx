import React, { FC, ChangeEvent, KeyboardEvent, useState, useEffect } from 'react';
import styles from './Search.module.scss'
import Input from '../Input/Input';
import { FilterIcon } from 'src/assets/icons';
import SelectedFilterModal from 'src/pages/SelectedFilterModal/SelectedFilterModal';
import { useNavigate } from 'react-router-dom';
import { PostSelectors, clearSearchedPosts, getSearchedPosts } from 'src/redux/redusers/postSlice';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { setThemeValue } from 'src/redux/redusers/themeSlice';
import { Theme } from 'src/@types';
import { useThemeContext } from 'src/context/Theme/Context';

type SearchProps = {
    title?: string,
    errorText?: string,
    placeholder: string,
    onChange: (value: string) => void,
    disabled?: boolean,
    value: string,
    className?: string,
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void,
    onClick?: () => void
};


const Search: FC<SearchProps> = ({
    onClick,
    title,
    errorText,
    placeholder,
    onChange,
    disabled,
    value,
    className,
    onKeyDown
}) => {
    // const navigate = useNavigate()
    // const dispatch = useDispatch()
    // const [isSearch, setSearch] = useState(false)
    // const [isOpened, setOpened] = useState(false)
    // const [isDropdownOpened, setDropdownOpened] = useState(false)
    // const [inpValue, setInpValue] = useState('')

    // const handleSearchOpened = () => {
    //     setSearch(!isSearch)
    //     setDropdownOpened(true)
    //     if (isSearch && inpValue) {
    //         dispatch(clearSearchedPosts())
    //         navigate(`/titles/search/title/${inpValue}`)
    //         setInpValue('')

    //     }
    // }
    // const onKeyDown = (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     if (event.key === 'Enter') {
    //         handleSearchOpened()

    //     }
    // }


    // useEffect(() => {
    //     if (inpValue.length) {

    //         dispatch(getSearchedPosts({ title: inpValue, isOverwrite: true }))


    //     } else {
    //         dispatch(clearSearchedPosts())

    //     }

    // }, [inpValue])

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)
    }
    const { themeValue } = useThemeContext();
    return (
        <div
        className={classNames(styles.container, {
            [styles.lightContainer]: themeValue === Theme.Light
        })}
        >
            <Input
                placeholder='Search...'
                onChange={onChange}
                value={value}
                disabled={disabled}
                className={styles.input}
                onKeyDown={onKeyDown}
            />
            <div
                onClick={onClick}
                className={styles.filterIcon}
            >
                <FilterIcon fill={themeValue === Theme.Light ? '#242426' : 'white'} />
            </div>

            {/* {isOpenFilter && <SelectedFilterModal onClick={onclick} />} */}
        </div>
    );
}

export default Search;
