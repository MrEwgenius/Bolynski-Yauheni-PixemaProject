import { type } from 'os';
import React, { ReactElement, ReactNode } from 'react';

export enum TabsTypes {
    Left = "left",
    Right = "right",
}

export enum Theme {
    Light = 'Light',
    Dark = 'Dark',
}

export type Tab = {
    key: TabsTypes;
    title: string | ReactElement;
};

export enum MenuTypes {
    Home = "home",
    Trends = "trends",
    Favoristes = "favoristes",
    Settings = "settings",
}

export type MenuTab = {
    key: MenuTypes;
    title: string;
    icon: ReactNode;
};
export type MenuListType = MenuTab[];



export type TabsListType = Tab[];

export type Children = ReactElement | ReactElement[];

export type IOption = {
    value: string,
    label: string,
}

type ButtonGroup = {
    title: ReactNode | string,
    onClick: () => void,
    link?: string,
}

export type ButtonGroupList = ButtonGroup[]



export type MovieTypes = {
    // results: {
    _id: string,
    id: string,
    primaryImage: {
        id: string,
        width: number,
        height: number,
        url: string,
        caption: {
            plainText: string,
            __typename: string
        },
        __typename: string
    },
    genres: {
        genres: [
            {
                text: string,
                id: string,
            }
        ],
    },
    plot: {
        plotText: {
            plainText: string,
        }
    },
    runtime: {
        seconds: number
    },
    ratingsSummary: {
        aggregateRating: number,
        voteCount: number,
        __typename: string,
    },
    titleType: {
        text: string,
        id: string,
        isSeries: boolean,
        isEpisode: boolean,
        __typename: string
    },
    titleText: {
        text: string,
        __typename: string
    },
    originalTitleText: {
        text: string,
        __typename: string
    },
    releaseYear: {
        year: number,
        endYear: null,
        __typename: string
    },
    releaseDate: {
        day: number
        month: number
        year: number
        __typename: string
    }
    // }

}
// export type CardListType = CardType[];
export type MovieListTypes = MovieTypes[];

export type PostsData = {

    page: number,
    next: string,
    entries: null,
    results: MovieListTypes,
}
export type MoviePostData = {

    page: number,
    next: string,
    entries: null,
    results: MovieTypes,
}

export enum SaveStatus {

    Saved = 'saved',
    NotSaved = 'notSaved',

}

export type GetSearchedPostsPayload = {
    title: string,
    isOverwrite: boolean,
}

export type SetPostsListPayload = {
    movieList: MovieListTypes,
    isOverwrite: boolean,

}

export type SetSearchedPostsPayload = SetPostsListPayload