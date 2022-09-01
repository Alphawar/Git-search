import React from 'react';
import classes from './UserItem.module.scss';
import { useNavigate } from 'react-router-dom';
import { User } from '../../types/User';

interface IUserItemProps {
    user: User
}

const UserItem: React.FC<IUserItemProps> = ({ user }) => {

    const navigate = useNavigate()

    const handleClick = () => navigate(`/user/${user.login}`)

    return (
        <div className={classes.user} onClick={handleClick}>
            <div className={classes.user__img}>
                <img src={user.avatar_url} alt={`${user.login}'s Avatar`} />
            </div>
            <div className={classes.user__username}>
                <h3>{user.login}</h3>
            </div>
            <div className={classes.user__reposQuant}>
                <p>##</p>
            </div>
        </div>
    );
};

export default UserItem;