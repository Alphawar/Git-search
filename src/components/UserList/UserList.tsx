import React from 'react';
import UserItem from '../UserItem/UserItem';
import classes from './UserList.module.scss';
import { User } from '../../types/User';

interface IUserListProps {
    users: User[]
}

const UserList: React.FC<IUserListProps> = ({ users }) => {
    return (
        <div className={classes.users}>
            {users.map( user => 
                <UserItem 
                    user={user}
                    key={user.id}
                />
            )}
        </div>
    );
};

export default UserList;