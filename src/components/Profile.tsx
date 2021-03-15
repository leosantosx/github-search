import '../styles/profile.scss';

type UserData = {
    user: {
        name: string;
        avatar_url: string;
        bio: string;
        followers: string;
        following: string;
    }
}

export function Profile({ user }: UserData){
    return (
        <section className="user-profile">
            <img src={user.avatar_url} alt=""/>
            <h1>{ user.name }</h1>

            <p>{ user.bio }</p>

            <div>
                <p>Seguidores: {user.followers}</p>
                <p>Seguindo: {user.following}</p>
            </div>

        </section>
    )
}