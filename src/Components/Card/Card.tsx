import React, { FC, useEffect } from 'react'
import styles from './Card.module.scss'
import { FavoritesIcon } from 'src/assets/icons';
import { imgDefault } from 'src/img';
import { useDispatch, useSelector } from 'react-redux';
import { PostSelectors, getSinglePost, updateShowMoreButton } from 'src/redux/redusers/postSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { MenuTypes, MovieTypes, SaveStatus } from 'src/@types';
import classNames from 'classnames';




interface CardProps extends MovieTypes {
    onSavedClick: (status: SaveStatus) => void,
    className?: string

}


const Card: FC<CardProps> = ({ onSavedClick, genres, ratingsSummary, id, titleText, primaryImage, className }) => {

    const dispatch = useDispatch()
    const savedPosts = useSelector(PostSelectors.getSavedPosts)

    const saveIndex = savedPosts.findIndex(item => item.id === id)

    const navigate = useNavigate()
    const onTitleClick = () => {
        navigate(`/titles/${id}`)
        dispatch(updateShowMoreButton(false))

    }


    // const genre = genres.genres.map((el) => { el.text })

    const genreText = genres?.genres?.map(genre => genre.text).join(' • ');




    return (
        <div
            className={classNames(styles.containerCard , className)}
        >
            <div className={styles.imageContainer}>
                <img className={styles.poster} src={primaryImage?.url ? primaryImage?.url : imgDefault} alt="img" />
                <div className={styles.rating}>{ratingsSummary.aggregateRating ? ratingsSummary.aggregateRating : '0'}</div>
                <div
                    className={styles.bookmark}
                    onClick={() => onSavedClick(SaveStatus.Saved)}
                >
                    {saveIndex === -1 ? <FavoritesIcon /> : <FavoritesIcon fill={'#7B61FF'} />}
                </div>
            </div>
            <div onClick={onTitleClick} className={styles.name}>{titleText.text}</div>
            <div className={styles.genere}>{genreText}</div>

        </div >
    );
}

export default Card;