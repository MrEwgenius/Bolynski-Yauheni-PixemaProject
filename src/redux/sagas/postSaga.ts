
import { all, takeLatest, call, put, select, delay } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { ApiResponse } from 'apisauce'


import API from "src/utils/api";
import { GetSearchedPostsPayload, MoviePostData, PostsData } from "src/@types";

import { getPostsList, getPostsListTrends, getRandomPostsList, getSearchedPosts, getSinglePost,  setPostsList, setPostsListTrends, setRandomPostsList, setSearchedPosts, setSinglePost, updateShowMoreButton } from "../redusers/postSlice";
import { GetPostsResponsData } from "../@types";
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


// function* getSinglePostWorker(action: PayloadAction<string>) {







//     yield put(updateShowMoreButton(true))


//     // const [mainFilmResponse, directorsResponse]: ApiResponse<Post> = yield all([call(
//     //     API.getSinglePost,
//     //     action.payload
//     // ), call(API.getDirectors)];

//     // const result = {
//     //     directors: directorsResponse.results.directors,
//     //     mainInfo: {
//     //         ...mainFilmResponse.results
//     //     }
//     // }


//     const [singleBaseInfo, singleBudget]: [ApiResponse<MoviePostData | null>, ApiResponse<MoviePostData | null>]
//         = yield all([
//             call(API.getBudget, action.payload),
//             call(API.getSinglePost, action.payload),
//         ])

//         if (singleBaseInfo.ok && singleBaseInfo.data) {
//             yield put(
//                 setSinglePost(singleBaseInfo.data.results)
//                 )


//             } else {
//                 console.error('Problem', singleBaseInfo.problem);
//             }
//             if (singleBudget.ok && singleBudget.data) {
//         yield put(
//             setBudgetPost(singleBudget.data.results)
//             )

//         } else {
//             console.error('Problem', singleBudget.problem);
//         }
//         const result = {
//             directors: singleBudget.data?.results,
//             ...singleBaseInfo.data?.results
//         }

//     // if (singleBaseInfo.ok && singleBaseInfo.data && singleBudget.ok && singleBudget.data) {
//     //     yield put(setSinglePost(result))
//     // }



//     yield put(updateShowMoreButton(false))



//     // const response: ApiResponse<MoviePostData | null> = yield call(
//     //     API.getSinglePost,
//     //     action.payload
//     // )
//     // if (response.ok && response.data) {
//     //     yield put(setSinglePost(response.data.results))

//     // } else {
//     //     console.error('Problem', response.problem);
//     // }
//     // yield put(updateShowMoreButton(false))











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



function* getSearchedPostsWorker(action: PayloadAction<GetSearchedPostsPayload>) {

    yield delay(500)
    const { title, isOverwrite } = action.payload

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

function* getRandomPostsWorkers() {






    const response: ApiResponse<PostsData | null> = yield call(
        API.getRandomPosts,
    )
    if (response.data) {
        if (response.data) {
            yield put(setRandomPostsList(response.data.results))


        } else {
            console.error('Get Random Posts List Error', response.problem);
        }

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
        takeLatest(getRandomPostsList, getRandomPostsWorkers),
        // takeLatest(getMyPosts, getMyPostsWorker),
    ])
}