import *as React from 'react';
import { useMemo, useState } from 'react';

import Button, { ButtonTypes } from './components/Button';
import TabsList from './components/TabsList';
import { TabsTypes } from './@types';
import Input from './components/Input';
import Username from './components/Username';
import { ArrowRightIcon, CheckIcon, CloseIcon, DeleteIcon, FavoritesIcon, FilterIcon, GroupIcon, MenuIcon, ShapeIcon, SharowIcon, UserIcon, ArrowIcon, TrendsIcon } from './assets/icons';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn/SignIn';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import ResetPasswordConfirmation from './pages/ResetPasswordConfirmation/ResetPasswordConfirmation';
import Post from './components/Post/Post';

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
        // errorText='Error'
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
      {/* <SignUp />
      <SignIn />
      <ResetPassword />
      <ResetPasswordConfirmation /> */}
      <Post name='Women'
        year={2022}
      />


    </div >
  );
}

export default App;
