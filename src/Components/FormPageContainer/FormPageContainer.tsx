import React, { FC, ReactElement } from "react";
import classNames from "classnames";

import { Children } from "src/@types";

import styles from "./FormPageContainer.module.scss";
import Title from "../Title/";
import Button, { ButtonTypes } from "../Button/";

type FormPagesContainerProps = {
    title: string;
    children: Children;
    btnTitle: string;
    onSubmit: () => void;
    additionalInfo?: ReactElement;
    isSubmitDisabled?: boolean;
};

const FormPagesContainer: FC<FormPagesContainerProps> = ({
    title,
    children,
    btnTitle,
    onSubmit,
    additionalInfo,
    isSubmitDisabled,
}) => {

    return (
        <div
            className={classNames(styles.container, {
            })}
        >
            <div className={styles.breadcrumbs}></div>
            <div className={styles.formContainer}>
                <Title className={styles.title} title={title} />
                <div className={styles.fieldsContainer}>{children}</div>
                <Button
                    type={ButtonTypes.Primary}
                    title={btnTitle}
                    onClick={onSubmit}
                    className={styles.button}
                    disabled={isSubmitDisabled}
                />
                <div>{additionalInfo}</div>
            </div>
        </div>
    );
};

export default FormPagesContainer;