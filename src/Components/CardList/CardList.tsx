import React, { FC, useState, useEffect } from 'react';
import Card from '../Card/Card';
import { MovieListTypes } from 'src/@types';
import styles from './CardList.module.scss'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import { PostSelectors, getSinglePost } from 'src/redux/redusers/postSlice';
import { useParams } from 'react-router-dom';
import { useCardActions } from 'src/hooks';
import emptyList from 'src/img/emptyList.png'



type CardListProps = {
    cardList: MovieListTypes

}

const CardList: FC<CardListProps> = ({ cardList }) => {
    const updates = null || []

    const { onSavedStatus, } = useCardActions()
    console.log(cardList);

    return !updates?.length ? (

        <div className={styles.containerCardList}>

            {cardList.map((el) => {

                return <Card
                    key={el.id}
                    {...el}
                    onSavedClick={onSavedStatus(el)}

                />
            })
            }


        </div>
    ) : <div>
        <img src={emptyList} alt="EmptyList" />
        <div>Empty state text</div>
    </div>
}

export default CardList;