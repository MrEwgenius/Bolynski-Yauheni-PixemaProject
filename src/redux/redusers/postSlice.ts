import React from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { GetSearchedPostsPayload, MenuTypes, MovieListTypes, MovieTypes, SaveStatus, SetSearchedPostsPayload } from 'src/@types';
import { LOCAL_STORAGE_KEY } from 'src/utils/constants';

import { Rootstate } from '../store';

let lokStorGet = localStorage.getItem(LOCAL_STORAGE_KEY)

type initialState = {
    selectedPost: MovieListTypes,
    selectedRandomPost: MovieListTypes,
    selectedPostFilterYear: MovieListTypes,
    selectedPostTrends: MovieListTypes,
    singlePost: MovieTypes | null,
    budgetPost: MovieTypes | null,
    pageNum: number;
    pageNumTrend: number;
    showMoreButton: boolean;
    myPosts: MovieListTypes,
    savedPosts: MovieListTypes,
    activeTab: MenuTypes.Home | MenuTypes.Favoristes | MenuTypes.Trends,
    startYear?: number,
    endYear?: number,
    searchedPosts: MovieListTypes,
    totalSearchedCount: number,


}

const initialState: initialState = {
    selectedPost: [],
    selectedRandomPost: [],
    selectedPostFilterYear: [],
    selectedPostTrends: [],
    singlePost: null,
    budgetPost: null,
    pageNum: 12,
    pageNumTrend: 12,
    showMoreButton: true,
    myPosts: [],
    savedPosts: lokStorGet ? JSON.parse(lokStorGet) : [],
    activeTab: MenuTypes.Home,
    startYear: undefined,
    endYear: undefined,
    searchedPosts: [],
    totalSearchedCount: 0,


};
const postSlice = createSlice({


    name: 'postReduser',
    initialState,
    reducers: {

        getPostsList: (_, __: PayloadAction<undefined>) => { },
        setPostsList: (state, action: PayloadAction<MovieListTypes>) => {
            state.selectedPost = action.payload
        },
        getPostsFilterList: (_, __: PayloadAction<undefined>) => { },
        setPostsFilterList: (state, action: PayloadAction<MovieListTypes>) => {
            state.selectedPostFilterYear = action.payload
        },

        getPostsListTrends: (_, __: PayloadAction<undefined>) => { },
        setPostsListTrends: (state, action: PayloadAction<MovieListTypes>) => {
            state.selectedPostTrends = action.payload
        },

        getSinglePost: (_, __: PayloadAction<string>) => { },
        setSinglePost: (state, action: PayloadAction<MovieTypes>) => {
            state.singlePost = action.payload;
        },
        getBudgetPost: (_, __: PayloadAction<string>) => { },
        setBudgetPost: (state, action: PayloadAction<MovieTypes>) => {
            state.budgetPost = action.payload;
        },

        updatePageNum: (state, action: PayloadAction<number>) => {
            state.pageNum = action.payload;
        },
        updatePageNumTrend: (state, action: PayloadAction<number>) => {
            state.pageNumTrend = action.payload;
        },

        updateShowMoreButton: (state, action: PayloadAction<boolean>) => {
            state.showMoreButton = action.payload;
        },

        setSavedStatus: (state, action: PayloadAction<{ card: MovieTypes, status: SaveStatus }>) => {

            const { card, status } = action.payload;
            const savedIndex = state.savedPosts.findIndex(item => item.id === card.id)
            const isSaved = status === SaveStatus.Saved
            const mainIndex = isSaved ? savedIndex : 1

            mainIndex === -1 ?
                state.savedPosts.push(card)

                :
                state.savedPosts.splice(mainIndex, 1)

            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.savedPosts))

        },

        setActiveTabSlice(state, action) {
            state.activeTab = action.payload;
        },

        setFilterYears: (state, action: PayloadAction<{ startYear?: number, endYear?: number }>) => {
            state.startYear = action.payload.startYear;
            state.endYear = action.payload.endYear;
        },
        clearSearchedPosts: (state) => {
            state.searchedPosts = []
        },
        getSearchedPosts: (_, __: PayloadAction<GetSearchedPostsPayload>) => { },
        setSearchedPosts: (state, action: PayloadAction<SetSearchedPostsPayload>) => {
            const { movieList, isOverwrite } = action.payload
            if (isOverwrite) {
                state.searchedPosts = movieList
            } else {
                state.searchedPosts.push(...movieList)
            }
        },
        getRandomPostsList: (_, __: PayloadAction<undefined>) => { },
        setRandomPostsList: (state, action: PayloadAction<MovieListTypes>) => {
            state.selectedRandomPost = action.payload
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
    updatePageNumTrend,
    updateShowMoreButton,
    setSavedStatus,
    setActiveTabSlice,
    getPostsFilterList,
    setPostsFilterList,
    setFilterYears,
    clearSearchedPosts,
    getSearchedPosts,
    setSearchedPosts,
    getRandomPostsList,
    setRandomPostsList,
    getBudgetPost,
    setBudgetPost,

} = postSlice.actions

export const PostSelectors = {

    getPostsList: (state: Rootstate) => state.postReduser.selectedPost,
    getPostsFilterList: (state: Rootstate) => state.postReduser.selectedPostFilterYear,
    getPostsListTrends: (state: Rootstate) => state.postReduser.selectedPostTrends,
    getSinglePost: (state: Rootstate) => state.postReduser.singlePost,
    getBudgetPost: (state: Rootstate) => state.postReduser.budgetPost,
    getSavedPosts: (state: Rootstate) => state.postReduser.savedPosts,
    getActiveTab: (state: Rootstate) => state.postReduser.activeTab,
    getSearchedPosts: (state: Rootstate) => state.postReduser.searchedPosts,
    getRandomPostsList: (state: Rootstate) => state.postReduser.selectedRandomPost,

    // getFilterYearsStart: (state: Rootstate) => state.postReduser.startYear,
    // getFilterYearsEnd: (state: Rootstate) => state.postReduser.endYear,

}



export default postSlice.reducer