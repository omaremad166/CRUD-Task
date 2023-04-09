import React, { useState, useEffect, useMemo, useRef } from "react";
import { getAllUsers } from "../Services/user-service";
import { User } from "../Models/user";
import { Link } from "react-router-dom";

const UsersList = (props: any) => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        retrieveUsers();
    }, []);

    const retrieveUsers = async () => {
        const users: User[] = await getAllUsers();
        setUsers(users);
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Users List</h1>
            <table className="table table-bordered table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Age</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{String(user.id)}</td>
                            <td>{String(user.name)}</td>
                            <td>{String(user.phone)}</td>
                            <td>{String(user.age)}</td>
                            <td><Link to={`/edit/${user.id}`}>Edit</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersList;