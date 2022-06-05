//ejercicio3
import React from "react";

//importamos lista de usuarios.
import UserList from '../components/UsersList/UsersList.js';

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'OverallCritic',
            image: 'https://i.imgur.com/WwmP6ek.png',
            info: 'Overall Critic es una editorial enfocada en videojuegos y software/hardware, se cubre también analisis sobre juegos'
        }

    ]

    return(
        <UserList items={USERS} />
    );
}

export default Users;