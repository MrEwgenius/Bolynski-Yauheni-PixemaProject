import React, { useMemo, useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { MenuTypes, Theme } from 'src/@types';
import { FavoritesIcon, GroupIcon, ShapeIcon, TrendsIcon } from 'src/assets/icons';
import { getPostsList, getPostsListTrends, setActiveTabSlice, setSavedStatus, updatePageNum, updatePageNumTrend, updateShowMoreButton } from 'src/redux/redusers/postSlice';
import { useThemeContext } from 'src/context/Theme/Context';

import styles from './PagesContainer.module.scss'
import Header from '../Header/Header';
import { RoutesList } from '../Router';

const PagesContainer = () => {


    const navLinks = useMemo(() => [
        { path: RoutesList.Home, key: MenuTypes.Home, title: "Home", icon: <ShapeIcon /> },
        { path: RoutesList.Trend, key: MenuTypes.Trends, title: "Trends", icon: <TrendsIcon /> },
        { path: RoutesList.Favorites, key: MenuTypes.Favoristes, title: "Favoristes", icon: <FavoritesIcon /> },
        { path: RoutesList.Setings, key: MenuTypes.Settings, title: "Settings", icon: <GroupIcon /> },
    ],
        []
    );



    const location = useLocation();

    const dispatch = useDispatch()

    if (
        location.pathname === RoutesList.Favorites
        || location.pathname === RoutesList.Setings
    ) {
        dispatch(updateShowMoreButton(false))

    } else {
        dispatch(updateShowMoreButton(true))
    }



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

                    </div>
                </div>
            </div>

        </div>
    );
}
export default PagesContainer;