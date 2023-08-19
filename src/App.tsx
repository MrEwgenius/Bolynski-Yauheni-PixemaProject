import React, { useEffect } from 'react';
import { useMemo, useState } from 'react';

import Button, { ButtonTypes } from './components/Button';
import TabsList from './components/TabsList';
import { ButtonGroupList,  IOption, MenuTypes, TabsTypes, Theme } from './@types';
import Input from './components/Input';
import Username from './components/Username';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn/SignIn';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import ResetPasswordConfirmation from './pages/ResetPasswordConfirmation/ResetPasswordConfirmation';
import Post from './components/Post/Post';
import Select from './components/Select/Selected';
import MultiSelect from './components/Select/MultiSelect.tsx/MultiSelect';
import { OnChangeValue } from 'react-select';
import ButtonsGroup from './components/ButtonsGroup/ButtonsGroup';
import { title } from 'process';
import Arrow from './components/Arrow/Arrow';
import Switcher from './components/Switcher/Switcher';
import Card from './components/Card/Card';
import CardList from './components/CardList/CardList';
import ThemeProvaider from './context/Theme/Provider';
import Router from './pages/Router';
import { FavoritesIcon, GroupIcon, LogoIcon, ShapeIcon, SharowIcon, TrendsIcon } from './assets/icons';
import Header from './pages/Header/Header';
import MenuTabs from './components/MenuTabs/MenuTabsList';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeSelectors, setThemeValue } from './redux/redusers/themeSlice';
import { Rootstate } from './redux/store';
import Home from './pages/PagesContainer/PagesContainer';
import SelectedFilterModal from './pages/SelectedFilterModal/SelectedFilterModal';
import { PostSelectors, getPostsList } from './redux/redusers/postSlice';



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



    const options: IOption[] = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    const [multiSelVal, setMultiSelVal] = useState(['sdsa',
        'sdsa'])
    const getValue = () => {
        return multiSelVal
            ? options.filter(c => multiSelVal.indexOf(c.value) >= 0)
            : []
    }
    // const onChangeSelect = (newValue: any) => {
    //   setSelVal(newValue.value)
    // }
    const onChangeMultiSelect = (newValue: OnChangeValue<IOption, boolean>) => {
        setMultiSelVal((newValue as IOption[]).map((v) => v.value))
    }



    //switcher
    // const [switcher, setSwitcher] = useState(true)

    // const onClickOnSwitcher = () => {

    //     setSwitcher(false)
    // }
    const [switchState, setSwitchState] = useState(false);

    const handleChange = () => {
        // Изменяем состояние свитчера
        setSwitchState((prevState: any) => !prevState);

        // Вызываем обработчик события клика (если он предоставлен)

    };
    //switcher
    // const [themeValue, setThemeValue] = useState(Theme.Light)

    // const themeValue = useSelector(ThemeSelectors.getThemeValue)
    const [themeValue, setThemeValue] = useState<Theme>(Theme.Dark);
    const onChangeTheme = (value: Theme) => {
        setThemeValue(value)
        // dispatch(setThemeValue(value))
    }



    // const tabsList = useMemo(
    //     () => [
    //         { key: MenuTypes.Home, title: "Home", icon: <ShapeIcon /> },
    //         { key: MenuTypes.Trends, title: "Trends", icon: <TrendsIcon /> },
    //         { key: MenuTypes.Favoristes, title: "Favoristes", icon: <FavoritesIcon /> },
    //         { key: MenuTypes.Settings, title: "Settings", icon: <GroupIcon /> },
    //     ],
    //     []
    // );
    const [menuactiveTab, setMenuActiveTab] = useState(MenuTypes.Home);

    const onMenuClick = (tab: MenuTypes) => () => {
        setMenuActiveTab(tab);

    };
    const dispatch = useDispatch()

    const allPosts = useSelector(PostSelectors.getPostsList)
    
    useEffect(() => {
        
        dispatch(getPostsList())
        
        // console.log(dispatch(getPostsList()));
    },[])

    return (

        //     <div>

        //         <Button
        //             type={ButtonTypes.Primary}
        //             title={'Primary'}
        //             onClick={() => { }}

        //         />
        //         <Button
        //             type={ButtonTypes.Secondary}
        //             title={'Secondary'}
        //             onClick={() => { }}
        //         />

        //         <Input
        //             // errorText='Error'
        //             title='Input'
        //             placeholder='Names'
        //             onChange={onChange}
        //             value={inputValue}
        //         />
        //         <Username username='Ewgenii bolynskii' />
        //         {/* <Username username='' /> */}
        //         {/* <SignUp />
        //   <SignIn />
        //   <ResetPassword />
        //   <ResetPasswordConfirmation /> */}
        //         {/* <Post name='Women'
        //     year={2022}
        //   /> */}
        //         {/* <Select
        //             onChangeSelect={onChangeMultiSelect}
        //             options={options}
        //         // value={getValue}
        //         /> */}

        //         <MultiSelect
        //             onChangeSelect={onChangeMultiSelect}
        //             options={options}
        //             isMulti
        //             value={getValue()}
        //         // isDisabled

        //         // isMulti
        //         />
        //         <ButtonsGroup
        //             ButtonGroupList={[]}

        //         />
        //         <Search />
        //         <Arrow
        //             onClick={() => { }}
        //         />

        //         <Switcher
        //             // disabled
        //             state={switchState}
        //             onClick={handleChange}


        //         />
        //         {/* <Card /> */}

        //     </div >

        <ThemeProvaider themeValue={themeValue} onChangeTheme={onChangeTheme}>
            <Router />
            {/* <TabsList
                tabsList={tabsList}
                activeTab={activeTab}
                onTabClick={onTabClick}
            /> */}
            {/* <Header />
            <CardList cardList={allPosts} /> */}
            {/* <SelectedFilterModal /> */}
            {/* <MenuTabs
                activeTab={menuactiveTab}
                onTabClick={onMenuClick}
                tabsList={tabsList}

            /> */}
            {/* <Home /> */}
        </ThemeProvaider>
    );
}


export default App;


