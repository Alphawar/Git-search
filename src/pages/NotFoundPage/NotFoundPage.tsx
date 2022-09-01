import React from 'react';
import { useParams, Link } from 'react-router-dom';
import classes from './NotFoundPage.module.scss';

const NotFoundPage: React.FC = () => {

    const brokenLink: string = Object.values(useParams())[0]!

    return (
        <div className={classes.message}>
            <h1 className={classes.message__text}>You tried following the link: <span className={classes.message__broken}>{brokenLink}</span>. It doesn't seem to exist. Check the spelling of the link.</h1>
            <Link className={classes.message__link} to="/">Go to Main page.</Link>
        </div>
    );
};

export default NotFoundPage;