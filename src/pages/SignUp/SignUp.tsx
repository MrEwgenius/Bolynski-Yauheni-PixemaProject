import React, { useState } from 'react';
import FormPagesContainer from 'src/components/FormPageContainer/FormPageContainer';
import Input from 'src/components/Input/Input';
import styles from "./SignUp.module.scss";
import classNames from 'classnames';


const SignUp = () => {

    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [ConfirmPassword, setConfirmPassword] = useState('')


    return (
        <FormPagesContainer
            title={'Sign Up'}
            btnTitle={'Sign Up'}
            onSubmit={() => { }}
            additionalInfo={
                <div className={classNames(styles.additionalInfo)}>
                    {"Already have an account?"}
                    <span className={styles.signIn}>Sign In</span>
                </div>
            }

        >
            <Input
                title={'Name'}
                placeholder={'Your name'}
                value={Name}
                onChange={setName}

            />
            <Input
                title={'Email'}
                placeholder={'Your Email'}
                value={Email}
                onChange={setEmail}

            />
            <Input
                title={'Password'}
                placeholder={'Your password'}
                value={Password}
                onChange={setPassword}

            />
            <Input
                title={'Confirm Password'}
                placeholder={'Confirm password'}
                value={ConfirmPassword}
                onChange={setConfirmPassword}

            />

        </FormPagesContainer>

    );
}

export default SignUp;