import {useEffect, useState} from 'react';
import {apiClient, type User} from "../api/apiClient.ts";
import '../styles/Users.css';

const Users = () => {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)


    useEffect(() => {
        const loadUsers = async () =>{
            try{
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

    if(error){
        return <p className={"error"}>{error}</p>
    }

    return (
        <div>
            <h1>Пользователи</h1>



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