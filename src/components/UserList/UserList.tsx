import React from 'react';
import UserItem from '../UserItem/UserItem';
import classes from './UserList.module.scss';
import { User } from '../../types/User';

interface IUserListProps {
    users: User[],
    repos: number[]
}

const UserList: React.FC<IUserListProps> = ({ users, repos }) => {
    return (
        <div className={classes.users}>
            {users.map( (user, index) => 
                <UserItem 
                    user={user}
                    key={user.id}
                    repo={repos[index]}
                />
            )}
        </div>
    );
};

export default UserList;