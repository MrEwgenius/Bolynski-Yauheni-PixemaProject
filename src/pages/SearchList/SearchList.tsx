import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RoutesList } from '../Router';
import { useDispatch, useSelector } from 'react-redux';
import { PostSelectors, getSearchedPosts } from 'src/redux/redusers/postSlice';
import styles from './SearchList.module.scss'
import Title from 'src/components/Title/Title';
import Card from 'src/components/Card/Card';
import { useCardActions } from 'src/hooks';
import Button, { ButtonTypes } from 'src/components/Button/Button';
import CardList from 'src/components/CardList/CardList';
import Loader from 'src/components/Loader/Loader';

const SearchList = () => {
    const { title } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    
    
    useEffect(() => {

        if (!title) {
            navigate(RoutesList.Home)
        } else {
            dispatch(getSearchedPosts({ title, isOverwrite: false }))
            console.log(title);
            
            
        }
    }, [dispatch, navigate, title])
    const searchedPosts = useSelector(PostSelectors.getSearchedPosts)


    return (
        <div className={styles.containerSearchList}>
            <Title
                title={`Search results: "${title}" found ${searchedPosts.length} matches`}
                className={styles.title}
            />
            <div className={styles.container} id="scrollableDiv">

                {searchedPosts.length ? (

                    <div>
                        <CardList
                            cardList={searchedPosts}
                        />
                    </div>


                ) : (
                    <Loader />
                )
                }

            </div>
        </div>
    );
}

export default SearchList;
