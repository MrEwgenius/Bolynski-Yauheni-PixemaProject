import React, { ReactElement } from 'react';

export enum TabsTypes {
    Right = "right",
    Left = "left",
}

export type Tab = {
    key: TabsTypes;
    title: string;
};
export type TabsListType = Tab[];

