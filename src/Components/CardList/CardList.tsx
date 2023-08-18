import React, { FC, useState, useEffect } from 'react';
import Card from '../Card/Card';
import { MovieListTypes } from 'src/@types';
import styles from './CardList.module.scss'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import { PostSelectors, getPostsList, getPostsListTrends, getSinglePost, updatePageNum, updatePageNumTrend, updateShowMoreButton } from 'src/redux/redusers/postSlice';
import { useParams } from 'react-router-dom';
import { useCardActions } from 'src/hooks';
import emptyListe from 'src/img/emptyList.png'
import Button, { ButtonTypes } from '../Button/Button';
import { Rootstate } from 'src/redux/store';



type CardListProps = {
    cardList: MovieListTypes

}

const CardList: FC<CardListProps> = ({ cardList }) => {
    const dispatch = useDispatch()
    const { onSavedStatus, } = useCardActions()
    const showMoreButton = useSelector((state: Rootstate) => state.postReduser.showMoreButton);
    const pageNum = useSelector((state: Rootstate) => state.postReduser.pageNum);
    const onClickPageNum = () => {

        dispatch(updatePageNum(pageNum + 12))
        dispatch(getPostsList())


        dispatch(updatePageNumTrend(pageNum + 12))
        // при тыке на favorits убрать кнопку More ↓↓↓
        // dispatch(updateShowMoreButton(false))
        dispatch(getPostsListTrends())




    }

    return (
        cardList.length ? (
            <div>

                <div className={styles.containerCardList}>

                    {cardList.map((el) => {
                        return (
                            <Card
                                key={el.id}
                                {...el}
                                onSavedClick={onSavedStatus(el)}
                            />
                        )
                    })}
                </div>
                {cardList.length === pageNum ? showMoreButton && (
                    <div>
                        <Button
                            className={styles.buttonPageNum}
                            onClick={onClickPageNum}
                            title={'More'}
                            type={ButtonTypes.Secondary}
                        />
                    </div>
                ) : null}
            </div>
        ) :
            <div className={styles.containerEmpty}>
                <img src={emptyListe} alt="EmptyList" />
                <div>Empty state text</div>
            </div>
    )
}

export default CardList;