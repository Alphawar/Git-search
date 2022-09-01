import React, { useEffect, useState } from 'react';
import { getUsers, getUsersRepos } from '../../API';
import InputSearch from '../../components/UI/InputSearch/InputSearch';
import UserList from '../../components/UserList/UserList';
import classes from './HomePage.module.scss';
import { User } from '../../types/User';
import Loader from '../../components/UI/Loader/Loader';

const HomePage: React.FC = () => {

    const [userSearch, setUserSearch] = useState<string>(JSON.parse(localStorage.getItem("Users")!)?.title || '')
    const [users, setUsers] = useState<User[]>([])
    const [usersRepos, setUsersRepos] = useState<number[]>([])
    const [loader, setLoader] = useState<boolean>(false)

    useEffect(() => {
        getUsers(userSearch, setUsers)
        getUsersRepos(users, setUsersRepos, setLoader)
        // eslint-disable-next-line
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
                {loader ? 
                <Loader />
                : (
                    <UserList 
                        users={users}
                        repos={usersRepos}
                    />
                )}
            </div>
        </div>
    );
};

export default HomePage;