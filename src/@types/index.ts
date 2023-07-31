import React, { ReactElement } from 'react';

export enum TabsTypes {
    Right = "right",
    Left = "left",
}

export type Tab = {
    key: TabsTypes;
    title: string | ReactElement;
};
export type TabsListType = Tab[];

export type Children = ReactElement | ReactElement[];