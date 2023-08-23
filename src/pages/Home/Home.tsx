import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import CardList from 'src/components/CardList/CardList';
import { PostSelectors, getPostsList, getPostsListTrends, setSavedStatus } from 'src/redux/redusers/postSlice';

import styles from './Home.module.scss'
import { RoutesList } from '../Router';

const Home = () => {

    const dispatch = useDispatch()
    const location = useLocation();
    const activeTab = location.pathname

    const allPosts = useSelector(PostSelectors.getPostsList)
    const trendsPosts = useSelector(PostSelectors.getPostsListTrends)
    const savedPosts = useSelector(PostSelectors.getSavedPosts)


    useEffect(() => {

        dispatch(getPostsList())
        dispatch(getPostsListTrends())

    }, [])



    const cardLister = () => {
        switch (activeTab) {
            case RoutesList.Favorites:
                return savedPosts;
            case RoutesList.Home:
                return allPosts;
            case RoutesList.Trend:
                return trendsPosts;
            default:
                return [];
        }
    }


    return (
        <div className={styles.containerHome}>
            <CardList
                cardList={cardLister()}
            />
        </div>
    );
}

export default Home;