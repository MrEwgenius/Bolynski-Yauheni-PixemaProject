import React, { FC, useEffect } from 'react'
import styles from './Card.module.scss'
import { FavoritesIcon } from 'src/assets/icons';
import { imgDefault } from 'src/img';
import { useDispatch, useSelector } from 'react-redux';
import { PostSelectors, getSinglePost } from 'src/redux/redusers/postSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { MovieTypes } from 'src/@types';


const Card: FC<MovieTypes> = ({ ratingsSummary, id, titleText, primaryImage }) => {



    const navigate = useNavigate()
    const onTitleClick = () => {
        navigate(`/titles/${id}`)
    }
    console.log(ratingsSummary.aggregateRating);


    return (
        <div
            className={styles.containerCard}
        >
            <div className={styles.imageContainer}>
                <img className={styles.poster} src={primaryImage?.url ? primaryImage?.url : imgDefault} alt="img" />
                <div className={styles.rating}>{ratingsSummary.aggregateRating}</div>
                <div className={styles.bookmark}>{<FavoritesIcon />}</div>
            </div>
            <div onClick={onTitleClick} className={styles.name}>{titleText.text}</div>
            {/* <div className={styles.genere}>Adventure Action Fantasy</div> */}

        </div>
    );
}

export default Card;