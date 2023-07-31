import React, { useState, } from 'react';
import classNames from 'classnames';

import FormPagesContainer from 'src/components/FormPageContainer';

import styles from './ResetPassword.module.scss'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Input from 'src/components/Input';
// import Input from 'src/components/Input/Input';
// import { useNavigate } from 'react-router-dom';
// import { RoutesList } from '../Router';
// import { useDispatch } from 'react-redux';
// import { resetPassword } from 'src/redux/reducers/authSlice';


const ResetPassword = () => {

    const [email, setEmail] = useState('')
    const [isSent, setIsSent] = useState(false)
    // const navigate = useNavigate()
    // const dispatch = useDispatch()

    const onSubmit = (() => {
        // if (isSent) {
        //     navigate(RoutesList.SignIn)
        // } else {
        //     dispatch(resetPassword({ data: email, callback: () => setIsSent(true) }))
        // }
    })

    return (
        <FormPagesContainer
            title={"Reset Password"}
            btnTitle={isSent ? "Go to SignIn" : "Reset"}
            onSubmit={onSubmit}
        >
            <div className={classNames(styles.container)}>
                {isSent && `You will receive an email ${email} with a link to reset your password!`}
                <Input
                    title={'Email'}
                    placeholder={'Your Email'}
                    onChange={setEmail}
                    value={email}
                />

            </div>
        </FormPagesContainer>
    );
}

export default ResetPassword;