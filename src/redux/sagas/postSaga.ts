
import { all, takeLatest, call, put, select, delay } from "redux-saga/effects";

import { ApiResponse } from 'apisauce'

import API from "src/utils/api";
import { GetSearchedPostsPayload, MovieListTypes, MoviePostData, MovieTypes, PostsData } from "src/@types";
import { getPostsList, getPostsListTrends, getSearchedPosts, getSinglePost, setPostsList, setPostsListTrends, setSearchedPosts, setSinglePost, updateShowMoreButton } from "../redusers/postSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { GetPostsPayload, GetPostsResponsData } from "../@types";
import { Rootstate } from "../store";


function* getPostsWorkers() {

    const startYear: number | undefined = yield select((state: Rootstate) => state.postReduser.startYear);
    const endYear: number | undefined = yield select((state: Rootstate) => state.postReduser.endYear);


    yield put(updateShowMoreButton(true)) //показываем кнопку MORE при получении постов


    const pageNum: number = yield select((state: Rootstate) => state.postReduser.pageNum);


    const response: ApiResponse<PostsData | null> = yield call(
        API.getPosts,
        pageNum,
        startYear,
        endYear,
    )
    if (response.data) {
        if (response.data) {
            yield put(setPostsList(response.data.results))


        } else {
            console.error('Get Posts List Error', response.problem);
        }

    }

}

function* getPostsWorkersTrends() {
    yield put(updateShowMoreButton(true)) //показываем кнопку MORE при получении постов

    const pageNum: number = yield select((state: Rootstate) => state.postReduser.pageNumTrend);


    const response: ApiResponse<PostsData | null> = yield call(
        API.getPostsTrend,
        pageNum,

    )
    if (response.data) {
        if (response.data) {
            yield put(setPostsListTrends(response.data.results))


        } else {
            console.error('Get Posts List Error', response.problem);
        }

    }

}


function* getSinglePostWorker(action: PayloadAction<string>) {

    yield put(updateShowMoreButton(true))
    const response: ApiResponse<MoviePostData | null> = yield call(
        API.getSinglePost,
        action.payload
    )
    if (response.ok && response.data) {
        yield put(setSinglePost(response.data.results))

    } else {
        console.error('Problem', response.problem);
    }
    yield put(updateShowMoreButton(false))
}
function* getSearchedPostsWorker(action: PayloadAction<GetSearchedPostsPayload>) {

    yield delay(500)
    const {  title, isOverwrite } = action.payload

    const response: ApiResponse<GetPostsResponsData> = yield call(
        API.getSearchPosts,
        title,

    )
    if (response.data && response.ok) {
        const { results, count, } = response.data
        yield put(
            setSearchedPosts({
                movieList: results,
                isOverwrite,
            })
        )
    } else {
        console.log('Searched Posts Error');
    }
}

// function* getMyPostsWorker() {
//     // const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

//     // if (accessToken) {

//     // const response: ApiResponse<PostsData> = yield callCheckingAuth(API.getMyPosts)

//     const response: ApiResponse<PostsData> = yield call(
//         API.getMyPosts,
//         // action.payload,

//     )
//     // if (response.status === 404) {
//     //     yield put(setMyPosts([]))


//     // } else {

//     if (response.data && response.ok) {
//         yield put(setMyPosts(response.data.results))
//         console.log(setMyPosts(response.data.results));


//     } else {
//         console.log('No Posts');
//     }

// }

// }
// перед космосом 
export default function* postSagaWatcher() {
    yield all([

        takeLatest(getPostsList, getPostsWorkers),
        takeLatest(getSinglePost, getSinglePostWorker),
        takeLatest(getPostsListTrends, getPostsWorkersTrends),
        takeLatest(getSearchedPosts, getSearchedPostsWorker),
        // takeLatest(getMyPosts, getMyPostsWorker),
    ])
}