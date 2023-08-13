import React, { FC, useMemo, useState, useEffect } from 'react';
import styles from './Post.module.scss'
import TabsList from '../TabsList/TabsList';
import { TabsTypes } from 'src/@types';
import { FavoritesIcon, SharowIcon } from 'src/assets/icons';
import { useDispatch, useSelector } from 'react-redux';
import { PostSelectors, getSinglePost } from 'src/redux/redusers/postSlice';
import { useParams } from 'react-router-dom';
import { imgDefault } from 'src/img';




const Post = () => {
    const [activeTab, setActiveTab] = useState(TabsTypes.Left);
    const onTabClick = (tab: TabsTypes) => () => {
        setActiveTab(tab);
    };

    const tabsList = useMemo(
        () => [
            { key: TabsTypes.Left, title: <FavoritesIcon /> },
            { key: TabsTypes.Right, title: <SharowIcon /> },
        ],
        []
    );
    const dispatch = useDispatch()

    const { id } = useParams()


    useEffect(() => {
        if (id) {
            dispatch(getSinglePost(id))
        }
    }, [id])

    const singlePost = useSelector(PostSelectors.getSinglePost)



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
                <div className={styles.rating}> {singlePost?.ratingsSummary.aggregateRating} </div>
                <div className={styles.descriprion}>
                    In 1984, after saving the world in Wonder Woman (2017), the immortal Amazon warrior, Princess Diana of Themyscira, finds herself trying to stay under the radar, working as an archaeologist at the Smithsonian Museum. With the memory of the brave U.S. pilot, Captain Steve Trevor, etched on her mind, Diana Prince becomes embroiled in a sinister conspiracy of global proportions when a transparent, golden-yellow citrine gemstone catches the eye of the power-hungry entrepreneur, Maxwell Lord.
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
                        <div >{singlePost.releaseYear.year}</div>
                        <div >15 Jul 2011</div>
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
    ) : null
}

export default Post;