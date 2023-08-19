import React, { useMemo, useState, useEffect } from 'react';

import styles from './PagesContainer.module.scss'
import Header from '../Header/Header';
import MenuTabsList from 'src/components/MenuTabs/MenuTabsList';
import { MenuTypes, SaveStatus, Theme } from 'src/@types';
import { FavoritesIcon, GroupIcon, ShapeIcon, TrendsIcon } from 'src/assets/icons';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { RoutesList } from '../Router';
import Button, { ButtonTypes } from 'src/components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsList, getPostsListTrends, setActiveTabSlice, setSavedStatus, updatePageNum, updatePageNumTrend, updateShowMoreButton } from 'src/redux/redusers/postSlice';
import { Rootstate } from 'src/redux/store';
import classNames from 'classnames';
import { useThemeContext } from 'src/context/Theme/Context';

const PagesContainer = () => {
    // const tabsList = useMemo(
    //     () => [
    //         { key: MenuTypes.Home, title: "Home", icon: <ShapeIcon /> },
    //         { key: MenuTypes.Trends, title: "Trends", icon: <TrendsIcon /> },
    //         { key: MenuTypes.Favoristes, title: "Favoristes", icon: <FavoritesIcon /> },
    //         { key: MenuTypes.Settings, title: "Settings", icon: <GroupIcon /> },
    //     ],
    //     []
    // );

    const navLinks = useMemo(() => [
        { path: RoutesList.Home, key: MenuTypes.Home, title: "Home", icon: <ShapeIcon /> },
        { path: RoutesList.Trend, key: MenuTypes.Trends, title: "Trends", icon: <TrendsIcon /> },
        { path: RoutesList.Favorites, key: MenuTypes.Favoristes, title: "Favoristes", icon: <FavoritesIcon /> },
        { path: RoutesList.Setings, key: MenuTypes.Settings, title: "Settings", icon: <GroupIcon /> },
    ],
        []
    );



    // const [activeTab, setActiveTab] = useState(MenuTypes.Home);
    // const navigate = useNavigate()
    const location = useLocation();

    const dispatch = useDispatch()
    const onClickPageNum = () => {

        dispatch(updatePageNum(pageNum + 12))
        dispatch(getPostsList())


        dispatch(updatePageNumTrend(pageNum + 12))
        // при тыке на favorits убрать кнопку More ↓↓↓
        // dispatch(updateShowMoreButton(false))
        dispatch(getPostsListTrends())




    }

    // const onClick = (tab: MenuTypes) => () => {
    //     setActiveTab(tab);

    //     if (tab === MenuTypes.Home) {

    //         onClickNavigate()
    //         dispatch(setActiveTabSlice(tab))

    //     } else if (tab === MenuTypes.Favoristes) {
    //         // при тыке на favorits убрать кнопку More ↓↓↓
    //         dispatch(updateShowMoreButton(false))
    //         dispatch(setActiveTabSlice(tab))


    //     } else if (tab === MenuTypes.Trends) {
    //         dispatch(setActiveTabSlice(tab))

    //     }
    // };

    // const onClickNavigate = () => {

    //     navigate(RoutesList.Home)
    // }
    const showMoreButton = useSelector((state: Rootstate) => state.postReduser.showMoreButton);

    if (
        location.pathname === RoutesList.Favorites
        || location.pathname === RoutesList.Setings
    ) {
        dispatch(updateShowMoreButton(false))

    } else {
        dispatch(updateShowMoreButton(true))
    }


    const pageNum = useSelector((state: Rootstate) => state.postReduser.pageNum);

    const { themeValue } = useThemeContext();
    return (
        <div className={classNames(styles.containerHome, {
            [styles.lightContainer]: themeValue === Theme.Light
        })}>
            <Header />
            <div className={styles.containerWrapper}>
                <div className={styles.linkWrapper}>
                    {navLinks.map(link =>
                        <NavLink
                            to={link.path}
                            key={link.key}
                            className={classNames(styles.navLinkButton, {
                                [styles.activeNavButton]: location.pathname === link.path,
                            })}
                        >
                            <div className={styles.linkTabs}>{link.icon} {link.title}</div>
                        </NavLink>
                    )}
                </div>
                <div className={styles.scrollContainer}>
                    <div className={styles.outlet}>
                        <Outlet />
                        {/* {showMoreButton && (<div><Button className={styles.buttonPageNum} onClick={onClickPageNum} title={'More'} type={ButtonTypes.Secondary} /> </div>)} */}
                    </div>
                </div>
            </div>

        </div>
    );
}
export default PagesContainer;