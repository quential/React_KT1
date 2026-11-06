import axios from 'axios';

export interface User {
    id: number
    name: string
    email: string
}

export const apiClient = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 5000,
});

// Использование в любом файле:
// apiClient.get<User[]>('/users')