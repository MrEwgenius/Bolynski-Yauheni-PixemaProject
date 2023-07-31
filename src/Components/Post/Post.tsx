import React, { FC, useMemo, useState } from 'react';
import styles from './Post.module.scss'
import TabsList from '../TabsList/TabsList';
import { TabsTypes } from 'src/@types';
import { FavoritesIcon, SharowIcon } from 'src/assets/icons';

type PostProps = {
    id?: number,
    name?: string,
    release_date?: string,
    year?: number,
    tagline?: string,
    poster?: string,
    backdrop?: string,
    runtime?: number,
    budget?: number,
    revenue?: number,
    popularity?: number,
    tmdb_id?: number,
    imdb_id?: string,
    is_series?: false,
    adult?: false,
    season_count?: number,
    episode_count?: number,
    series_ended?: false,
    language?: string,
    original_title?: string,
    certification?: string,
    rating?: number,
    vote_count?: number

}


const Post: FC<PostProps> = (
    {
        name,
        year,
        release_date,
        poster,
        runtime,
        budget,
        rating
    }
) => {
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
    return (
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <img className={styles.poster} src="https://proprikol.ru/wp-content/uploads/2020/02/chudo-zhenshhina-kartinki-supergeroini-24.jpg" />
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
                <div>  Adventure Action Fantasy</div>
                <div className={styles.title}>  Wonder Woman: 1984 </div>
                <div className={styles.rating}>  7.6 </div>
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
                        <div >2011</div>
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
    );
}

export default Post;