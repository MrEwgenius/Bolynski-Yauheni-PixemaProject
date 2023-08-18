import React, { FC, useMemo, useState, useEffect } from 'react';
import styles from './Post.module.scss'
import TabsList from '../TabsList/TabsList';
import { MenuTypes, MovieTypes, SaveStatus, TabsTypes } from 'src/@types';
import { FavoritesIcon, SharowIcon } from 'src/assets/icons';
import { useDispatch, useSelector } from 'react-redux';
import { PostSelectors, getSinglePost, setSavedStatus } from 'src/redux/redusers/postSlice';
import { useParams } from 'react-router-dom';
import { imgDefault } from 'src/img';
import { useCardActions } from 'src/hooks';


// interface PostProps extends MovieTypes {
//     onSavedClick: (status: SaveStatus) => void,

// }


const Post = () => {
    const dispatch = useDispatch()
    const { id } = useParams()


    useEffect(() => {
        if (id) {
            dispatch(getSinglePost(id))
        }
    }, [id])

    const singlePost = useSelector(PostSelectors.getSinglePost)
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

            return
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




    return singlePost ? (
        <div className={styles.container}>
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
                <div className={styles.title}> {singlePost.titleText.text}</div>
                <div className={styles.ratingTuntimeContainer}>
                    <div
                        className={styles.rating}>
                        {singlePost?.ratingsSummary ? singlePost?.ratingsSummary.aggregateRating : '0'}
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
                        <div>BoxOffice</div>
                        <div>Country</div>
                        <div>Production</div>
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
                        <div >$381,409,310</div>
                        <div >United Kingdom, United States</div>
                        <div >Heyday Films, Moving Picture Company, Warner Bros.</div>
                        <div >Daniel Radcliffe, Emma Watson, Rupert Grint</div>
                        <div >David Yates</div>
                        <div >J.K. Rowling, Steve Kloves</div>

                    </div>
                </div>
            </div>


        </div >
    ) : <div></div>
}

export default Post;