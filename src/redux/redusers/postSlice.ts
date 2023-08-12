import React from 'react';

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MovieListTypes, MovieTypes } from 'src/@types';
import { Rootstate } from '../store';
import { GetPostsPayload } from '../@types';

type initialState = {
    selectedPost: MovieListTypes,
    singlePost: MovieTypes | null,
    pageNum: number;
    showMoreButton: boolean;
    // selectedPost: CardType | null
    // isPostsListLoading: boolean

}

const initialState: initialState = {
    selectedPost: [],
    singlePost: null,
    pageNum: 12,
    showMoreButton: true
    // isPostsListLoading: false
    // selectedPost: null

};
const postSlice = createSlice({


    name: 'postReduser',
    initialState,
    reducers: {
        getPostsList: (_, __: PayloadAction<undefined>) => { },
        setPostsList: (state, action: PayloadAction<MovieListTypes>) => {
            state.selectedPost = action.payload
        },

        getSinglePost: (_, __: PayloadAction<string>) => { },
        setSinglePost: (state, action: PayloadAction<MovieTypes>) => {
            state.singlePost = action.payload;
        },
        updatePageNum: (state, action: PayloadAction<number>) => {
            state.pageNum = action.payload;
        },
        updateShowMoreButton: (state, action: PayloadAction<boolean>) => {
            state.showMoreButton = action.payload;
        },
        // getPostsListPagination: (_, __: PayloadAction<GetPostsPayload>) => { },
        // setPostsListPagination: (state, action: PayloadAction<SetPostsListPayload>) => {
        //     const { total, isOverwrite, postsList } = action.payload
        //     state.totalCount = total
        //     if (isOverwrite) {
        //         state.postsList = postsList
        //     } else {
        //         state.postsList.push(...postsList)
        //     }
        // },
        // setPostListLoading: (state, action: PayloadAction<boolean>) => {
        //     state.isPostsListLoading = action.payload
        // },
        // getSelectedPost: (_, __: PayloadAction<string>) => { },


    },
})


export const {
    getPostsList,
    setPostsList,
    getSinglePost,
    setSinglePost,
    updatePageNum,
    updateShowMoreButton,
    // getPostsListPagination,
    // setPostsListPagination,
    // setPostListLoading,
    // getSelectedPost,

} = postSlice.actions

export const PostSelectors = {

    getPostsList: (state: Rootstate) => state.postReduser.selectedPost,
    getSinglePost: (state: Rootstate) => state.postReduser.singlePost,
    // getPostsListLoading: (state: Rootstate) => state.postReduser.isPostsListLoading,
}



export default postSlice.reducer