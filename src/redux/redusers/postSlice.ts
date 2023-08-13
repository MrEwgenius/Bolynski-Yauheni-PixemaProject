import React from 'react';

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MenuTypes, MovieListTypes, MovieTypes, SaveStatus } from 'src/@types';
import { Rootstate } from '../store';
import { GetPostsPayload } from '../@types';

type initialState = {
    selectedPost: MovieListTypes,
    selectedPostTrends: MovieListTypes,
    singlePost: MovieTypes | null,
    pageNum: number;
    showMoreButton: boolean;
    myPosts: MovieListTypes,
    savedPosts: MovieListTypes,
    activeTab: MenuTypes.Home | MenuTypes.Favoristes | MenuTypes.Trends,

}

const initialState: initialState = {
    selectedPost: [],
    selectedPostTrends: [],
    singlePost: null,
    pageNum: 12,
    showMoreButton: true,
    myPosts: [],
    savedPosts: [],
    activeTab: MenuTypes.Home,


};
const postSlice = createSlice({


    name: 'postReduser',
    initialState,
    reducers: {
        getPostsList: (_, __: PayloadAction<undefined>) => { },
        setPostsList: (state, action: PayloadAction<MovieListTypes>) => {
            state.selectedPost = action.payload
        },
        getPostsListTrends: (_, __: PayloadAction<undefined>) => { },
        setPostsListTrends: (state, action: PayloadAction<MovieListTypes>) => {
            state.selectedPostTrends = action.payload
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
        // getMyPosts: (_, __: PayloadAction<undefined>) => { },
        // setMyPosts: (state, action: PayloadAction<MovieListTypes>) => {
        //     state.myPosts = action.payload
        //     console.log(state.myPosts = action.payload);

        // },
        setSavedStatus: (state, action: PayloadAction<{ card: MovieTypes, status: SaveStatus }>) => {
            const { card, status } = action.payload;
            const savedIndex = state.savedPosts.findIndex(item => item.id === card.id)
            const isSaved = status === SaveStatus.Saved
            const mainIndex = isSaved ? savedIndex : 1
            mainIndex === -1 ?
                state.savedPosts.push(card)
                
                :
                state.savedPosts.splice(mainIndex, 1)

        },

        setActiveTabSlice(state, action) {
            state.activeTab = action.payload;
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
    setPostsListTrends,
    getPostsListTrends,
    getSinglePost,
    setSinglePost,
    updatePageNum,
    updateShowMoreButton,
    // getMyPosts,
    // setMyPosts,
    setSavedStatus,
    setActiveTabSlice,
    // getPostsListPagination,
    // setPostsListPagination,
    // setPostListLoading,
    // getSelectedPost,

} = postSlice.actions

export const PostSelectors = {

    getPostsList: (state: Rootstate) => state.postReduser.selectedPost,
    getPostsListTrends: (state: Rootstate) => state.postReduser.selectedPostTrends,
    getSinglePost: (state: Rootstate) => state.postReduser.singlePost,
    // getMyPosts: (state: Rootstate) => state.postReduser.myPosts,
    getSavedPosts: (state: Rootstate) => state.postReduser.savedPosts,
    getActiveTab: (state: Rootstate) => state.postReduser.activeTab,

}



export default postSlice.reducer