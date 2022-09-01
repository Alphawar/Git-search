import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserDetails } from '../../API';
import ReposList from '../../components/ReposList/ReposList';
import InputSearch from '../../components/UI/InputSearch/InputSearch';
import Loader from '../../components/UI/Loader/Loader';
import classes from './DetailsPage.module.scss';
import { UserDetails } from '../../types/UserDetails';
import { Repo } from '../../types/Repo';
import { LocalRepo } from '../../types/LocalRepo';

const DetailsPage: React.FC = () => {

    const { username } = useParams()
    const [userDetails, setUserDetails] = useState<UserDetails | null>(null)
    const [userRepos, setUserRepos] = useState<Repo[]>([])
    const [filteredRepos, setFilteredRepos] = useState<Repo[]>([])
    const [repoText, setRepoText] = useState<string>('')
    const [loader, setLoader] = useState<boolean>(false)
    const [local, setLocal] = useState<LocalRepo[]>(JSON.parse(localStorage.getItem("Repos")!))

    const filterRepos = useCallback( (text: string): void => {
        if(text) {
            setFilteredRepos(JSON.parse(JSON.stringify(userRepos)).filter((repo: Repo) => repo.name.toLowerCase().startsWith(text.toLowerCase())))
        } else {
            setFilteredRepos(JSON.parse(JSON.stringify(userRepos)))
        }
    }, [userRepos])

    const getProperDate = useMemo(() => {
        const date = new Date((userDetails?.created_at as string))
        return date.toLocaleString()   
    }, [userDetails?.created_at])

    useEffect(() => {
        getUserDetails(username, setUserDetails, setUserRepos, setLoader)
        if(local) {
            const currentUser: LocalRepo = JSON.parse(JSON.stringify(local)).find( (item: LocalRepo) => item.user === username)
            if(currentUser) {
                setRepoText(currentUser.title)
            } else {
                localStorage.setItem("Repos", JSON.stringify([ ...local, { user: username, title: repoText }]))
                setLocal((prev: LocalRepo[]) => [...prev, { user: (username as string), title: repoText }])
            }
        } else {
            localStorage.setItem("Repos", JSON.stringify([{ user: username, title: repoText }]))
            setLocal([{ user: (username as string), title: repoText }])
        }
        // eslint-disable-next-line
    }, [username])


    useEffect(() => {
        setFilteredRepos(JSON.parse(JSON.stringify(userRepos)))
    }, [userRepos])

    useEffect(() => {
        filterRepos(repoText)
        const currentUser = JSON.parse(JSON.stringify(local))?.map( (item: LocalRepo) => {
            if(item.user === username) {
                item.title = repoText
            } 
            return item
        })
        if(currentUser) {
            localStorage.setItem("Repos", JSON.stringify(currentUser))
        }
        // eslint-disable-next-line
    }, [repoText, filterRepos])

    return (
        <>
        {loader ? <Loader /> : (
            <div className={classes.container}>
                <div className={classes.userDetails}>
                    <div className={classes.userDetails__profile}>
                        <div className={classes.userDetails__avatar}>
                            <img src={userDetails?.avatar_url} alt={`${username}'s avatar`} />
                        </div>
                        <div className={classes.userDetails__data}>
                            <p className={classes.userDetails__username}>{username}</p>
                            <p className={classes.userDetails__email}>
                                {userDetails?.email ? userDetails.email : 'Not specified'}
                            </p>
                            <p className={classes.userDetails__location}>{userDetails?.location}</p>
                            <p className={classes.userDetails__date}>{getProperDate}</p>
                            <p className={classes.userDetails__followers}>{userDetails?.followers}</p>
                            <p className={classes.userDetails__following}>{userDetails?.following}</p>
                        </div>
                    </div>
                    {userDetails?.bio && (
                        <div className={classes.userDetails__bio}>
                            <p>
                                {userDetails?.bio}
                            </p>
                        </div>
                    )}
                    <InputSearch 
                        text={repoText}
                        setText={setRepoText}
                        label="Search for User's Repos"
                    />
                    <ReposList 
                        repos={filteredRepos}
                    />
                </div>
            </div>
        )}
        </>
    );
};

export default DetailsPage;