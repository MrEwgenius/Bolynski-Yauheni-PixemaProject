import React, { KeyboardEvent, useEffect, useState } from 'react';
import styles from './Header.module.scss'
import { CloseIcon, LogoIcon, MenuIcon } from 'src/assets/icons';
import Search from 'src/components/Search/Search';
import Username from 'src/components/Username/Username';
import SelectedFilterModal from '../SelectedFilterModal/SelectedFilterModal';
import Input from 'src/components/Input/Input';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PostSelectors, clearSearchedPosts, getSearchedPosts } from 'src/redux/redusers/postSlice';
import classNames from 'classnames';
import { setThemeValue } from 'src/redux/redusers/themeSlice';
import { Theme } from 'src/@types';
import Button, { ButtonTypes } from 'src/components/Button/Button';
import { imgDefault } from 'src/img';


const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [isOpenFilter, setIsOpenFilter] = useState(false)
    const handleFilterOpened = () => {
        setIsOpenFilter(!isOpenFilter)
    }


    const [isSearch, setSearch] = useState(false)
    const [isOpened, setOpened] = useState(false)
    const [isDropdownOpened, setDropdownOpened] = useState(false)
    const [inpValue, setinpValue] = useState('')

    const onClickDropdownOpenedItem = (id: string) => {
        setDropdownOpened(false)
        navigate(`/titles/${id}`)
    }
    const handleSearchOpened = () => {
        // setSearch(!isSearch)
        setDropdownOpened(false)
        if (inpValue) {
            dispatch(clearSearchedPosts())
            navigate(`/titles/search/title/${inpValue}`)
            setinpValue('')
        }
    }
    const onKeyDown = (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setDropdownOpened(true)
        if (event.key === 'Enter') {
            handleSearchOpened()
        }
    }
    const searchedPosts = useSelector(PostSelectors.getSearchedPosts)


    // const isSearchOn = true



    const handleMenuOpened = () => {
        setOpened(!isOpened)
    }

    useEffect(() => {
        if (inpValue.length) {
            dispatch(getSearchedPosts({ title: inpValue, isOverwrite: true }))


        } else {
            dispatch(clearSearchedPosts())

        }

    }, [inpValue])

    return (
        <div>
            <div
                className={styles.containerHeader}
            >
                <LogoIcon />
                <div className={styles.containerWrapper}>
                    <div className={styles.inputContainer}>
                        <Search
                            className={styles.inputSearch}
                            placeholder='Search...'
                            onChange={setinpValue}
                            value={inpValue}
                            onKeyDown={onKeyDown}
                            onClick={handleFilterOpened}
                        />


                        {!!searchedPosts.length && isDropdownOpened && (
                            <div className={styles.dropdown}>
                                {searchedPosts.map(({ primaryImage, id, titleText,releaseYear }) => (
                                    <div
                                        key={id}
                                        onClick={() => { onClickDropdownOpenedItem(id) }}
                                        className={styles.dropdownItem}
                                    >
                                        <img src={primaryImage ? primaryImage.url : imgDefault} alt="" />
                                        <div className={styles.dropdownItemInfo}>
                                            <div className={styles.dropdownItemTitle}>{titleText.text}</div>
                                            <div className={styles.dropdownItemDescription}>
                                                {releaseYear.year}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <Username username='Evge Bol' />
                </div>
            </div>
            {isOpenFilter && <SelectedFilterModal onClick={handleFilterOpened} />}
        </div>
    )

    // <div className={styles.header}>
    //     {(
    //         <div className={styles.inputContainer}>
    //             <Input
    //                 className={styles.inputSearch}
    //                 placeholder='Search...'
    //                 onChange={setinpValue}
    //                 value={inpValue}
    //                 onKeyDown={onKeyDown}
    //             />
    //             <Button
    //                 type={ButtonTypes.Primary}
    //                 title={<CloseIcon />}
    //                 onClick={handleSearchOpened}
    //                 className={styles.closedSearch}
    //             />
    //             {!!searchedPosts.length && isDropdownOpened && (
    //                 <div className={styles.dropdown}>
    //                     {searchedPosts.map(({ primaryImage, id, titleText, plot }) => (
    //                         <div
    //                             key={id}
    //                             onClick={() => { onClickDropdownOpenedItem(id) }}
    //                             className={styles.dropdownItem}
    //                         >
    //                             <img src={primaryImage.url} alt="" />
    //                             <div className={styles.dropdownItemInfo}>
    //                                 <div className={styles.dropdownItemTitle}>{titleText.text}</div>
    //                                 <div className={styles.dropdownItemDescription}>
    //                                     {'plot.plotText.plainText'}
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     ))}
    //                 </div>
    //             )}
    //         </div>
    //     )
    //     }


    {
        {/* <div className={styles.buttonSearchUserRight}>
        <Button
        type={ButtonTypes.Primary}
        title={'<SearchIcon '}
        onClick={handleSearchOpened}
        className={styles.searchButton}
        />
        
        </div> */}
    }

    {/* <div className={styles.footer}>
                    <div>©2022 Blogfolio</div>
                    <div>All rights reserved</div>
                </div> */}
    // </div>
}

export default Header;