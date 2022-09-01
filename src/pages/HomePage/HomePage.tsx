import React, { useEffect, useState } from 'react';
import { getUsers } from '../../API';
import InputSearch from '../../components/UI/InputSearch/InputSearch';
import UserList from '../../components/UserList/UserList';
import classes from './HomePage.module.scss';
import { User } from '../../types/User';

const HomePage: React.FC = () => {

    const [userSearch, setUserSearch] = useState<string>(JSON.parse(localStorage.getItem("Users")!)?.title || '')
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        getUsers(userSearch, setUsers)
    }, [userSearch])

    return (
        <div className={classes.homePage}>
            <div className={classes.homePage__input}>
                <InputSearch 
                    text={userSearch}
                    setText={setUserSearch}
                    label="Search for Users"
                />
            </div>
            <div className={classes.homePage__container}>
                <UserList 
                    users={users}
                />
            </div>
        </div>
    );
};

export default HomePage;