import { MovieListTypes } from "src/@types"

export type GetPostsPayload = {
    offset: number
    isOvervrite: boolean
}

export type GetPostsResponsData = {
    count: number,
    next: string,
    previous: string,
    results: MovieListTypes,

}