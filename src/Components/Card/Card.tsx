import React, { FC, useEffect } from 'react'
import styles from './Card.module.scss'
import { FavoritesIcon } from 'src/assets/icons';
import { imgDefault } from 'src/img';
import { useDispatch, useSelector } from 'react-redux';
import { PostSelectors,  getSinglePost } from 'src/redux/redusers/postSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { MovieTypes, SaveStatus } from 'src/@types';




interface CardProps extends MovieTypes {
    onSavedClick: (status: SaveStatus) => void,

}


const Card: FC<CardProps> = ({ onSavedClick, genres, ratingsSummary, id, titleText, primaryImage }) => {
    

    const savedPosts = useSelector(PostSelectors.getSavedPosts)
    
    const saveIndex = savedPosts.findIndex(item => item.id === id)

    const navigate = useNavigate()
    const onTitleClick = () => {
        navigate(`/titles/${id}`)
    }

    const genre = genres.genres.map((el) => {

        // console.log(el);
        // жанры доделать 
    })


    return (
        <div
            className={styles.containerCard}
        >
            <div className={styles.imageContainer}>
                <img className={styles.poster} src={primaryImage?.url ? primaryImage?.url : imgDefault} alt="img" />
                <div className={styles.rating}>{ratingsSummary.aggregateRating}</div>
                <div
                    className={styles.bookmark}
                    onClick={() => onSavedClick(SaveStatus.Saved)}
                >
                    {saveIndex === -1 ? <FavoritesIcon /> : <FavoritesIcon fill={'#7B61FF'} />}
                </div>
            </div>
            <div onClick={onTitleClick} className={styles.name}>{titleText.text}</div>
            <div className={styles.genere}>{'жанры тут должны быть '}</div>

        </div >
    );
}

export default Card;