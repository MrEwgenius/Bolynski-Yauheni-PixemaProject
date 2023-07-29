import *as React from 'react';
import Button, { ButtonTypes } from './Components/Button';
import TabsList from './Components/TabsList/TabsList';
import { useMemo, useState } from 'react';
import { TabsTypes } from './@types';
import Input from './Components/Input/Input';

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


    </div >
  );
}

export default App;
