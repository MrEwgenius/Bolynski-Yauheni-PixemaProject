import *as React from 'react';
import { useMemo, useState } from 'react';

import Button, { ButtonTypes } from './Components/Button';
import TabsList from './Components/TabsList';
import { TabsTypes } from './@types';
import Input from './Components/Input';
import Username from './Components/Username';
import { ArrowRightIcon, CheckIcon, CloseIcon, DeleteIcon, FavoritesIcon, FilterIcon, GroupIcon, MenuIcon, ShapeIcon, SharowIcon, UserIcon, ArrowIcon, TrendsIcon } from './assets/icons';

const App = () => {

  const [activeTab, setActiveTab] = useState(TabsTypes.Left);

  const [inputValue, setInputValue] = useState('')

  const tabsList = useMemo(
    () => [
      { key: TabsTypes.Left, title: "Rating" },
      { key: TabsTypes.Right, title: "Year" },
    ],
    []
  );
  const onTabClick = (tab: TabsTypes) => () => {
    setActiveTab(tab);
  };


  const onChange = (value: string) => {
    setInputValue(value)
  }

  return (
    <div>

      <Button
        type={ButtonTypes.Primary}
        title={'Primary'}
        onClick={() => { }}

      />
      <Button
        type={ButtonTypes.Secondary}
        title={'Secondary'}
        onClick={() => { }}
      />
      <TabsList
        tabsList={tabsList}
        activeTab={activeTab}
        onTabClick={onTabClick}
      />
      <Input
        // disabled
        errorText='Error'
        title='Input'
        placeholder='Names'
        onChange={onChange}
        value={inputValue}
      />
      <Username username='Ewgenii bolynskii' />
      {/* <Username username='' /> */}
      <UserIcon />
      <CheckIcon />
      <SharowIcon />
      <ArrowRightIcon />
      <DeleteIcon />
      <FilterIcon />
      <CloseIcon />
      <MenuIcon />
      <ArrowIcon />
      <GroupIcon />
      <FavoritesIcon />
      <TrendsIcon />
      <ShapeIcon />


    </div >
  );
}

export default App;
