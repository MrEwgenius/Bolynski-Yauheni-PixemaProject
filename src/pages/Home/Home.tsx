import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardList from 'src/components/CardList/CardList';
import { PostSelectors, getPostsList, getPostsListTrends } from 'src/redux/redusers/postSlice';
import styles from './Home.module.scss'
import { MenuTypes } from 'src/@types';
import { LOCAL_STORAGE_KEY } from 'src/utils/constants';
import { json } from 'stream/consumers';
import { RoutesList } from '../Router';
import { Route, useLocation } from 'react-router-dom';


const Home = () => {

    const dispatch = useDispatch()
    const location = useLocation();
    const activeTab = location.pathname

    const allPosts = useSelector(PostSelectors.getPostsList)
    const trendsPosts = useSelector(PostSelectors.getPostsListTrends)
    const savedPosts = useSelector(PostSelectors.getSavedPosts)
    // const activeTab = useSelector(PostSelectors.getActiveTab);

    const lokStorSet = localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(savedPosts))
    let lokStorGet = localStorage.getItem(LOCAL_STORAGE_KEY);

    useEffect(() => {

        dispatch(getPostsList())
        dispatch(getPostsListTrends())

    }, [])

    // const cardLister = () => {
    //     switch (activeTab) {
    //         case MenuTypes.Favoristes:
    //             return savedPosts;
    //         case MenuTypes.Home:
    //             return allPosts;
    //         case MenuTypes.Trends:
    //             return trendsPosts;
    //         default:
    //             return [];
    //     }
    // }
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
    // console.log(trendsPosts);


    return (
        <div className={styles.containerHome}>
            <CardList
                cardList={cardLister()}
            />
        </div>
    );
}

export default Home;