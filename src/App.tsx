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
    const [themeValue, setThemeValue] = useState<Theme>(Theme.Dark);
    const onChangeTheme = (value: Theme) => {
        setThemeValue(value)
        // dispatch(setThemeValue(value))
    }



    

    return (

       

        <ThemeProvaider themeValue={themeValue} onChangeTheme={onChangeTheme}>
            <Router />
        </ThemeProvaider>
    );
}


export default App;


