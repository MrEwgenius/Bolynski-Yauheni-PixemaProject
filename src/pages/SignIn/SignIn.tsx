import React, { useState } from 'react';
import classNames from 'classnames';

import FormPagesContainer from 'src/components/FormPageContainer/FormPageContainer';
import Input from 'src/components/Input/Input';

import styles from './SignIn.module.scss'

const SignIn = () => {

    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')


    return (
        <FormPagesContainer
            title={'Sign In'}
            btnTitle={'Sign In'}
            onSubmit={() => { }}
            additionalInfo={
                <div className={classNames(styles.additionalInfo)}>
                    {"Don’t have an account?"}
                    <span className={styles.signIn}>Sign Up</span>
                </div>
            }

        >

            <Input
                title={'Email'}
                placeholder={'Your Email'}
                value={Email}
                onChange={setEmail}

            />
            <div>
                <Input
                    title={'Password'}
                    placeholder={'Your password'}
                    value={Password}
                    onChange={setPassword}

                />
                <div
                    onClick={() => { }}
                    className={classNames(styles.forgotPasword)}
                >{'Forgot password?'}</div>
            </div>

        </FormPagesContainer>

    );
}

export default SignIn;
