import * as React from 'react';
import { useDispatch } from 'react-redux';
import { MovieTypes, SaveStatus } from 'src/@types';
import { setSavedStatus } from 'src/redux/redusers/postSlice';

const useCardActions = () => {

    const dispatch = useDispatch()



    const onSavedStatus = (card: MovieTypes) => (status: SaveStatus) => {
        dispatch(setSavedStatus({ card, status }))
    }

    return { onSavedStatus }

}


export default useCardActions