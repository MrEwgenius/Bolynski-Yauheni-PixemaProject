import React, { FC, useState, useEffect } from 'react';
import Card from '../Card/Card';
import {  MovieListTypes } from 'src/@types';
import styles from './CardList.module.scss'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import { PostSelectors, getSinglePost } from 'src/redux/redusers/postSlice';
import { useParams } from 'react-router-dom';



type CardListProps = {
    cardList: MovieListTypes

}

const CardList: FC<CardListProps> = ({ cardList }) => {


    return cardList.length ? (
        <div className={styles.containerCardList}>

            {cardList.map((el) => {

                return <Card
                    key={el.id}
                    {...el}

                />
            })
            }


        </div>
    ) : null
}

export default CardList;