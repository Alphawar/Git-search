import React from 'react';
import classes from './Loader.module.scss';

const Loader: React.FC = () => {
    return (
        <div className={classes.loading__wrapper}>
            <div className={classes.loading}>
                <div className={classes.loading__dot}></div>
                <div className={classes.loading__dot}></div>
                <div className={classes.loading__dot}></div>
            </div>
        </div>
    );
};

export default Loader;