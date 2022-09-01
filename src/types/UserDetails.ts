export type UserDetails = {
    avatar_url: string,
    email: string | null,
    location: string | null,
    created_at: string,
    followers: number,
    following: number,
    bio: string | null,
    public_repos: number
}