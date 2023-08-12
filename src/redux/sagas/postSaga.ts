
import { all, takeLatest, call, put, select } from "redux-saga/effects";

import { ApiResponse } from 'apisauce'

import API from "src/utils/api";
import { MoviePostData, MovieTypes, PostsData } from "src/@types";
import { getPostsList, getSinglePost, setPostsList, setSinglePost, updateShowMoreButton } from "../redusers/postSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { GetPostsPayload, GetPostsResponsData } from "../@types";
import { Rootstate } from "../store";


function* getPostsWorkers() {
    yield put(updateShowMoreButton(true)) //показываем кнопку MORE при получении постов
    

    const pageNum: number = yield select((state: Rootstate) => state.postReduser.pageNum);


    const response: ApiResponse<PostsData | null> = yield call(
        API.getPosts,
        pageNum
    )
    if (response.data) {
        if (response.data) {
            yield put(setPostsList(response.data.results))


        } else {
            console.error('Get Posts List Error', response.problem);
        }

    }

}
// function* getPostsWorkerPagination(action: PayloadAction<GetPostsPayload>) {

//     yield put(setPostListLoading(true))
//     const { offset } = action.payload
//     const response: ApiResponse<GetPostsResponsData> = yield call(
//         API.getPosts,
//         offset

//     )
//     if (response.data) {
//         if (response.data) {
//             yield put(setPostsList(response.data.results))


//         } else {
//             console.error('Get Posts List Error', response.problem);
//         }

//     }
//     yield put(setPostListLoading(false))


// }
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



// перед космосом 
export default function* postSagaWatcher() {
    yield all([

        takeLatest(getPostsList, getPostsWorkers),
        takeLatest(getSinglePost, getSinglePostWorker),
    ])
}