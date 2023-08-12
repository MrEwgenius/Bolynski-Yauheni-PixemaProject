import React, { useState } from 'react';
import styles from './Header.module.scss'
import { LogoIcon } from 'src/assets/icons';
import Search from 'src/components/Search/Search';
import Username from 'src/components/Username/Username';
import SelectedFilterModal from '../SelectedFilterModal/SelectedFilterModal';


const Header = () => {
    const [isOpenFilter, setIsOpenFilter] = useState(false)
    const handleFilterOpened = () => {
        setIsOpenFilter(!isOpenFilter)
    }
    return (
        <div>
            <div
                className={styles.containerHeader}
            >
                <LogoIcon />
                <div className={styles.containerWrapper}>
                    <Search onclick={handleFilterOpened} />
                    <Username username='Evge Bol' />
                </div>
            </div>
            {isOpenFilter && <SelectedFilterModal onClick={handleFilterOpened} />}
        </div>
    );
}

export default Header;