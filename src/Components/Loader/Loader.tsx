import React from 'react'
import Lottie from "lottie-react";
import animation from "src/assets/icons/animation_Empty.json";
import animationFavorites from "src/assets/icons/animation_Empty_Favorites.json";
import style from './Loader.module.scss'
import { useLocation } from 'react-router-dom';
import { RoutesList } from 'src/pages/Router';



const Loader = () => {
    

    return (
        <Lottie animationData={animation} loop={true} className={style.container} />
    )
}

export default Loader;