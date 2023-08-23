import React, { FC, useMemo, useState } from 'react';

import styles from './SelectedFilterModal.module.scss'
import Input from 'src/components/Input/Input';
import MultiSelect from 'src/components/Select/MultiSelect.tsx/MultiSelect';
import { IOption, TabsTypes } from 'src/@types';
import { CloseIcon } from 'src/assets/icons';
import TabsList from 'src/components/TabsList/TabsList';
import { OnChangeValue } from 'react-select';
import Button, { ButtonTypes } from 'src/components/Button/Button';
import { useDispatch } from 'react-redux';
import { getPostsList, getPostsListTrends, setFilterYears } from 'src/redux/redusers/postSlice';

type SelectedFilterModalProps = {

    onClick?: () => void
}

const SelectedFilterModal: FC<SelectedFilterModalProps> = ({ onClick }) => {

    const dispatch = useDispatch()
    //multiSelect
    const options: IOption[] = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]


    const [multiSelVal, setMultiSelVal] = useState([''])
    const getValue = () => {
        return multiSelVal
            ? options.filter(c => multiSelVal.indexOf(c.value) >= 0)
            : []
    }
    const onChangeMultiSelect = (newValue: OnChangeValue<IOption, boolean>) => {
        setMultiSelVal((newValue as IOption[]).map((v) => v.value))
    }
    //MultiSelect

    //SelectCountry
    const country: IOption[] = [
        { value: 'Yapan', label: 'Yapan' },
        { value: 'Belarus', label: 'Belarus' },
        { value: 'Ukraine', label: 'Ukraine' },
        { value: 'Ukraine', label: 'Ukraine' },
        { value: 'Ukraine', label: 'Ukraine' },
        { value: 'Ukraine', label: 'Ukraine' },
        { value: 'vanilla', label: 'Vanilla' }


    ]
    const [countryes, setCountryes] = useState([''])
    const getValueCountry = () => {
        return countryes
            ? options.filter(c => countryes.indexOf(c.value) >= 0)
            : []
    }
    const onChangeSelectCountry = (newValue: OnChangeValue<IOption, boolean>) => {
        setCountryes((newValue as IOption[]).map((v) => v.value))
    }
    //SelectCountry


    //Tablist
    const [activeTab, setActiveTab] = useState(TabsTypes.Left);

    const tabsList = useMemo(
        () => [
            { key: TabsTypes.Left, title: "Rating" },
            { key: TabsTypes.Right, title: "Year" },
        ],
        []
    );
    const onTabClick = (tab: TabsTypes) => () => {
        setActiveTab(tab);
    };
    //Tablist
    //input

    const [inputValue, setInputValue] = useState('')
    const onChange = (value: string) => {
        setInputValue(value)
    }
    //Years
    const [inputValueYearFrom, setInputValueYearFrom] = useState('')
    const onChangeYearFrom = (value: string) => {
        setInputValueYearFrom(value)
    }
    const [inputValueYearTo, setInputValueYearTo] = useState('')
    const onChangeYearTo = (value: string) => {
        setInputValueYearTo(value)
    }
    //Ratig
    const [inputValueRatigFrom, setInputValueRatigFrom] = useState('')
    const onChangeRatigFrom = (value: string) => {
        setInputValueRatigFrom(value)
    }
    const [inputValueRatigTo, setInputValueRatigTo] = useState('')
    const onChangeRatigTo = (value: string) => {
        setInputValueRatigTo(value)
    }
    //input

    const applyFilters = (startYear: number | undefined, endYear: number | undefined) => {
        dispatch(setFilterYears({ startYear, endYear }));
        dispatch(getPostsListTrends())
        dispatch(getPostsList()); // Обновляем список постов с учетом фильтрации
        // () => {
        //     onClick
        // }
    };


    return (
        <div>
            {<div className={styles.container}>
                <div className={styles.containerFilters}>
                    <div className={styles.filtersTitlesWrap}>
                        <div className={styles.title}>Filters</div>
                        <div
                            onClick={onClick}
                            className={styles.closeIcon}
                        >
                            <CloseIcon />
                        </div>
                    </div>

                    <TabsList
                        tabsList={tabsList}
                        activeTab={activeTab}
                        onTabClick={onTabClick}
                        className={styles.tabList}
                        name='Sort by'
                    />

                    <Input
                        placeholder='Your text'
                        title='Full or short movie name'
                        onChange={onChange}
                        value={inputValue}
                    />
                    <MultiSelect
                        title='Genere'
                        isMulti
                        onChangeSelect={onChangeMultiSelect}
                        className={styles.multiSelect}
                        options={options}
                        value={getValue}

                    />
                    <div className={styles.inputContainerYaers}>
                        <Input
                            placeholder='From'
                            title='Years'
                            onChange={onChangeYearFrom}
                            value={inputValueYearFrom}
                        />
                        <Input
                            title=''
                            placeholder='to'
                            onChange={onChangeYearTo}
                            value={inputValueYearTo}
                        />
                    </div>
                    <div className={styles.inputContainerYaers}>
                        <Input
                            title='Ratig'
                            placeholder='From'
                            onChange={onChangeRatigFrom}
                            value={inputValueRatigFrom}
                        />
                        <Input
                            title=''
                            placeholder='to'
                            onChange={onChangeRatigTo}
                            value={inputValueRatigTo}
                        />
                    </div>

                    <MultiSelect
                        title='Country'
                        onChangeSelect={onChangeSelectCountry}
                        className={styles.selectCountry}
                        options={country}
                        value={getValueCountry}
                    />
                    <div className={styles.containerButtons}>
                        <Button
                            onClick={() => { }}
                            title={'Clear filter'}
                            type={ButtonTypes.Secondary}
                        />
                        <Button
                            onClick={() => applyFilters(+inputValueYearFrom , +inputValueYearTo )}
                            title={'Show results'}
                            type={ButtonTypes.Primary}
                        />

                    </div>
                </div>
            </div>}
        </div>
    );
}

export default SelectedFilterModal;
