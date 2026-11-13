import {useEffect, useState} from 'react';
import {Link, useParams} from "react-router";
import {apiClient, type User} from "../api/apiClient.ts";
import '../styles/Users.css';

type UserParams = {
    id: string
}

// function idInput() {
//     const [num, setNum] = useState(0)
//
//     const handleChange = (e) => {
//         const value = Number(e.target.value)
//         setNum(value)
//     }
//
//     return (
//         <div>
//             <p>Найти пользователя</p>
//             <input
//                 type="Number"
//                 value={num}
//                 onChange={handleChange}
//             />
//         </div>
//     )
// }



function NumberInput() {
    const [num, setNum] = useState(0);

    const handleChange = (e) => {
        // Преобразуем введенное значение в число
        const value = Number(e.target.value);
        setNum(value);
    };

    return (
        <div>
            <input
                type="number"
                value={num}
                onChange={handleChange}
            />
            <p>Введенное число: {num} (тип: {typeof num})</p>
        </div>
    );
}

const Users = () => {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const {id} = useParams<UserParams>();


    const searchUser = () => {
        if (id !== undefined) {
            const oneUser = users.filter(user.id)
        } else {
            alert("Пользователь не найден")
        }
    }


    useEffect(() => {
        const loadUsers = async () => {
            try {
                const response = await apiClient.get<User[]>('/users')

                setUsers(response.data)
            } catch {
                setError('не удаолось загрузить пользователей')
            } finally {
                setLoading(false)
            }
        }
        loadUsers();
    }, []);

    if (loading) {
        return <p className={"loading"}>загрузка...</p>
    }

    if (error) {
        return <p className={"error"}>{error}</p>
    }

    return (
        <div>
            <h1>Пользователи</h1>

            <input/>
            <button>Найти</button>


            <p>Добавить пользователя</p>
            <input/>
            <button>Добавить</button>

            {users.map((user) => (
                <div key={user.id}>
                    <p>ID: {user.id}</p>
                    <p>Имя: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <br/>
                </div>
            ))}
        </div>
    );
};

export default Users;