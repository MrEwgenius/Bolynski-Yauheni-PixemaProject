import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MovieTypes, SaveStatus } from 'src/@types';
import { PostSelectors, setSavedStatus } from 'src/redux/redusers/postSlice';
import { LOCAL_STORAGE_KEY } from 'src/utils/constants';

const useCardActions = () => {

    const dispatch = useDispatch()



    const onSavedStatus = (card: MovieTypes) => (status: SaveStatus) => {
        dispatch(setSavedStatus({ card, status }))

    }

    return { onSavedStatus }

}


export default useCardActions