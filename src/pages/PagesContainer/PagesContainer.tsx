import React, { useMemo, useState } from 'react';

import styles from './PagesContainer.module.scss'
import Header from '../Header/Header';
import MenuTabsList from 'src/components/MenuTabs/MenuTabsList';
import { MenuTypes } from 'src/@types';
import { FavoritesIcon, GroupIcon, ShapeIcon, TrendsIcon } from 'src/assets/icons';
import { Outlet, useNavigate } from 'react-router-dom';
import { RoutesList } from '../Router';
import Button, { ButtonTypes } from 'src/components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsList, updatePageNum, updateShowMoreButton } from 'src/redux/redusers/postSlice';
import { Rootstate } from 'src/redux/store';

// export const PAGE_NUMBER = pageNum
const PagesContainer = () => {
    const tabsList = useMemo(
        () => [
            { key: MenuTypes.Home, title: "Home", icon: <ShapeIcon /> },
            { key: MenuTypes.Trends, title: "Trends", icon: <TrendsIcon /> },
            { key: MenuTypes.Favoristes, title: "Favoristes", icon: <FavoritesIcon /> },
            { key: MenuTypes.Settings, title: "Settings", icon: <GroupIcon /> },
        ],
        []
    );
    const [activeTab, setActiveTab] = useState(MenuTypes.Home);
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const onClick = (tab: MenuTypes) => () => {
        setActiveTab(tab);
        if (tab === MenuTypes.Home) {
            onClickNavigate()
        }
    };


    const onClickNavigate = () => {

        navigate(RoutesList.Home)
    }
    const showMoreButton = useSelector((state: Rootstate) => state.postReduser.showMoreButton);

    const pageNum = useSelector((state: Rootstate) => state.postReduser.pageNum);
    const onClickPageNum = () => {
        dispatch(updatePageNum(pageNum + 12))
        // dispatch(updateShowMoreButton(true))
        dispatch(getPostsList())

    }
    return (
        <div className={styles.containerHome}>
            <Header />
            <div className={styles.containerWrapper}>
                <MenuTabsList

                    activeTab={activeTab}
                    onTabClick={onClick}
                    tabsList={tabsList}
                />
                <div className={styles.scrollContainer}>
                    <div className={styles.outlet}>
                        <Outlet />
                        {showMoreButton && (<div><Button className={styles.buttonPageNum} onClick={onClickPageNum} title={'More'} type={ButtonTypes.Secondary} /> </div>)}
                    </div>
                </div>
            </div>

        </div>
    );
}
export default PagesContainer;