import React from 'react';
import { Repo } from '../../types/Repo';
import classes from './RepoItem.module.scss';

interface IRepoItemProps {
    repo: Repo
}

const RepoItem: React.FC<IRepoItemProps> = ({ repo }) => {

    return (
        <a className={classes.repo} href={`${repo?.svn_url}`}>
            <div className={classes.repo__name}>
                {repo?.name}
            </div>
            <div className={classes.repo__specs}>
                <p>{repo?.forks_count}</p>
                <p>{repo?.stargazers_count}</p>
            </div>
        </a>
    );
};

export default RepoItem;