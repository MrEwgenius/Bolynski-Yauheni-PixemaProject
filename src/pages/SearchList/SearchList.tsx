import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RoutesList } from '../Router';
import { useDispatch } from 'react-redux';

const Searched = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { search } = useParams()

    useEffect(() => {
        if (!search) {
            navigate(RoutesList.Home)
        } else {
            // dispatch()
        }

    }, [search, navigate, dispatch])


    return (
        <div>


        </div>
    );
}

export default Searched;
