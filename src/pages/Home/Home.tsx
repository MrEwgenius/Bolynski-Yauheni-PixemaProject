import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardList from 'src/components/CardList/CardList';
import { PostSelectors, getPostsList } from 'src/redux/redusers/postSlice';
import styles from './Home.module.scss'


const Home = () => {

    const dispatch = useDispatch()

    const allPosts = useSelector(PostSelectors.getPostsList)
    useEffect(() => {

        dispatch(getPostsList())

    }, [])
    console.log(allPosts);


    return (
        <div className={styles.containerHome}>
            <CardList cardList={allPosts} />
        </div>
    );
}

export default Home;