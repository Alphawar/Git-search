import axios from 'axios';
import { User } from '../types/User';
     
const API_USERS_LINK: string = 'https://api.github.com/search/users?q=';
const API_USER_LINK: string = 'https://api.github.com/users/';

export const getUsers = async (
        username: string,
        setUserList: (userList: any) => void
    ): Promise<void> => {
        try {
            await axios.get(`${API_USERS_LINK}${username}`)   
                .then( res => {
                    setUserList(res.data.items)
                })
        } catch (e) {
            if(e instanceof Error) {
                setUserList([])
            }
        } finally {
            localStorage.setItem("Users", JSON.stringify({ title: username }))
        }
}

export const getUserDetails = async (
        username: string | undefined,
        setUserDetails: (user: any) => void,
        setUserRepos: (repos: any) => void,
        setLoader: (value: boolean) => void
    ): Promise<void> => {
    setLoader(true)
    setTimeout( async () => {
        const user = await axios.get(`${API_USER_LINK}${username}`)
        setUserDetails(user.data)
        const repos = await axios.get(user.data.repos_url)
        setUserRepos(repos.data)
        setLoader(false)
    }, 2000)
}

export const getUsersRepos = async (
        users: User[], 
        setUsersRepos: (repos: number[]) => void,
        setLoader: (value: boolean) => void
    ): Promise<void> => {
        if(users.length) {
            setLoader(true)
            setTimeout( async () => {
            const response = []
            for(let i = 0; i < users.length; i++) {
                const res = await axios.get(`${API_USER_LINK}${users[i].login}`)
                response.push(res.data.public_repos)
            }
            setUsersRepos(response)
            setLoader(false)
            }, 1500)
        }
}