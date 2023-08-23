import React from 'react'
import Lottie from "lottie-react";

import animation from "src/assets/icons/animation_Empty.json";
import animationFavorites from "src/assets/icons/animation_Empty_Favorites.json";

import style from './Loader.module.scss'



const Loader = () => {


    return (
        <Lottie animationData={animation} loop={true} className={style.container} />
    )
}

export default Loader;