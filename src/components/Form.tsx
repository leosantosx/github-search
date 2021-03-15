import { useState } from 'react';

import { Profile } from './Profile'

import api from '../service/api';

import '../styles/form.scss';

type UserData = {
    name: string;
    avatar_url: string;
    bio: string;
    followers: string;
    following: string;
}

export function Form(){

    const [username, setUsername] = useState('');
    const [error, setError] = useState('')
    const [user, setUser] = useState<UserData>({} as UserData)

    function handleGetUserGithub(){
        if(!username){
            return setError('O nome de usuário não pode ser em branco')
        }

        try{
            api.get(username).then(response => response)
            .then(response => setUser(response.data))
            setError('')
        }catch{
            setError('Ocorreu um erro ao buscar usuário')
        }
    }

    return(
        <>
            <section className="form">
                <div>
                    <h1>Pesquise por um usuário no Github</h1>
                
                    <div>
                        <input 
                            type="text" 
                            placeholder="Digite aqui"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            />
                        <button 
                            type="submit"
                            onClick={handleGetUserGithub}
                        >
                        Buscar usuário</button>
                    </div>
                    
                    <p>{ error }</p>

                </div>
            </section>

            {user.name && (
                 <Profile user={user}/>
            )}
        </>
    )
}