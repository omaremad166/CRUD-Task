import axios from 'axios';
import { User } from '../Models/user';

export async function getAllUsers() {
    try {
        const response = await axios.get('/api/users');
        return await response.data;
    } catch (error) {
        return [];
    }
}

export async function getUserById(id: string) {
    try {
        const response = await axios.get(`/api/users/${id}`);
        return await response.data;
    } catch (error) {
        return undefined;
    }
}

export async function updateUser(id: string, updatedUser: User) {
    try {
        const response = await axios.put<User>(`/api/users/${id}`, updatedUser);
        return response.data;
    } catch (error) {
        return [];
    }
}

export async function AddUser(user: User) {
    try {
        const response = await axios.post('/api/users', user);
        return await response.data;
    } catch (error) {
        return [];
    }
}