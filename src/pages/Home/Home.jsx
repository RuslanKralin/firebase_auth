import { useAuth } from 'hooks/use-auth';
import React from 'react'


function Home() {
    const { email } = useAuth();
    return (
        <>
            <h1>Привет пользователь с почтой {email}</h1>
        </>
    )
}

export default Home