import React from 'react';
import RepoItem from '../RepoItem/RepoItem';
import { Repo } from '../../types/Repo';

interface IReposListProps {
    repos: Repo[]
}

const ReposList: React.FC<IReposListProps> = ({ repos }) => {

    return (
        <div>
            {repos.map( repo => 
                <RepoItem
                    repo={repo}
                    key={repo.id}
                />    
            )}
        </div>
    );
};

export default ReposList;