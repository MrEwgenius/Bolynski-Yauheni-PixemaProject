import React, { useMemo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';

import { FavoritesIcon, SharowIcon } from 'src/assets/icons';
import { PostSelectors, getBudgetPost, getRandomPostsList, getSinglePost } from 'src/redux/redusers/postSlice';
import { SaveStatus, TabsTypes, Theme } from 'src/@types';
import { imgDefault } from 'src/img';
import { useCardActions } from 'src/hooks';
import { useThemeContext } from 'src/context/Theme/Context';

import styles from './Post.module.scss'
import TabsList from '../TabsList/TabsList';
import Card from '../Card/Card';
import Title from '../Title/Title';




const Post = () => {
    const dispatch = useDispatch()
    const { id } = useParams()


    useEffect(() => {
        if (id) {
            dispatch(getRandomPostsList())
            dispatch(getSinglePost(id))
            dispatch(getBudgetPost(id))
        }
    }, [id])
    const randomPostList = useSelector(PostSelectors.getRandomPostsList)

    const singlePost = useSelector(PostSelectors.getSinglePost)
    const budgetPost = useSelector(PostSelectors.getBudgetPost)

    const { onSavedStatus } = useCardActions()

    const [activeTab, setActiveTab] = useState(TabsTypes.Left);

    const savedPosts = useSelector(PostSelectors.getSavedPosts)
    const saveIndex = savedPosts.findIndex(item => item.id === id)
    const onTabClick = (tab: TabsTypes) => () => {
        setActiveTab(tab);
        if (tab === TabsTypes.Left) {
            if (singlePost) {
                onSavedStatus(singlePost)(SaveStatus.Saved)
            }
        } else {

            return null
        }

    };



    const tabsList = useMemo(
        () => [
            {
                key: TabsTypes.Left,
                title:
                    saveIndex === -1
                        ? <FavoritesIcon />
                        : <FavoritesIcon fill={'#7B61FF'} />
            },
            {
                key: TabsTypes.Right,
                title: <SharowIcon />
            },
        ],
        [saveIndex]
    );


    const genreText = singlePost?.genres?.genres.map(genre => genre.text).join(' • ');

    const { themeValue } = useThemeContext()
    return singlePost && randomPostList ? (
        <div >
            <div className={classNames(styles.containerMainPost, {
                [styles.lightContainer]: themeValue === Theme.Light
            })}>
                <div className={styles.leftContainer}>
                    <img className={styles.poster} src={singlePost.primaryImage ? singlePost?.primaryImage.url : imgDefault} />
                    <div className={styles.savedBtns}>
                        <TabsList
                            className={styles.tabs}
                            tabsList={tabsList}
                            activeTab={activeTab}
                            onTabClick={onTabClick}
                        />
                    </div>
                </div>
                <div className={styles.rightContainer}>
                    <div className={styles.genres} >{genreText}</div>
                    <div className={styles.title}> {singlePost?.titleText?.text}</div>
                    <div className={styles.ratingTuntimeContainer}>
                        <div
                            className={styles.rating}>
                            {singlePost.ratingsSummary
                                ? singlePost?.ratingsSummary.aggregateRating
                                    ? singlePost?.ratingsSummary.aggregateRating
                                    : '0'
                                : '0'}
                        </div>
                        <div className={styles.runTime}>
                            {singlePost.runtime ? singlePost.runtime.seconds / 60 + ' min' : 'Время неизвестно '}
                        </div>
                    </div>

                    <div className={styles.descriprion}>

                        {singlePost?.plot && singlePost?.plot.plotText && singlePost?.plot.plotText.plainText
                            ? singlePost?.plot.plotText.plainText
                            : 'this prehistoric movie without description'}

                    </div>
                    <div className={styles.columnAboutFilm}>

                        <div className={styles.titleCharacteristics}>
                            <div>Year</div>
                            <div>Released</div>
                            <div>Actors</div>
                            <div>Director</div>
                            <div>Writers</div>
                        </div>
                        <div className={styles.characteristics}>
                            <div >{singlePost.releaseYear ? singlePost.releaseYear.year : 'prehistoric'}</div>
                            <div className={styles.yearRelesed} >
                                {
                                    singlePost.releaseDate ? `${singlePost.releaseDate.day}.` : ' - '
                                }
                                {
                                    singlePost.releaseDate ? `${singlePost.releaseDate.month}.` : ' - '
                                }
                                {
                                    singlePost.releaseDate ? `${singlePost.releaseDate.year}` : ' - '
                                }
                            </div>
                            <div >-</div>
                            <div >-</div>
                            <div >-</div>
                        </div>
                    </div>
                    <div className={styles.containerRandomMovies}  >
                        <Title
                            className={styles.title}
                            title={'Random Movies'} />
                        <div className={styles.RandomMovies}>
                            {randomPostList.map((el) => {
                                return (
                                    <div key={el.id} className={styles.random}>
                                        <Card
                                            key={el.id}
                                            {...el}
                                            onSavedClick={onSavedStatus(el)}
                                            className={styles.card}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </div >
    ) : <div></div>
}

export default Post;