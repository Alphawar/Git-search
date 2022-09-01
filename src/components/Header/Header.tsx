import React from 'react';
import classes from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <div className={classes.header}>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <h1 className={classes.header__title}>GitHub Searcher</h1>
            </Link>
        </div>
    );
};

export default Header;