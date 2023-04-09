import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { getUserById, updateUser } from '../Services/user-service';
import { useParams, useNavigate } from 'react-router-dom';

interface User {
    id: string;
    name: string;
    phone: string;
    age: string;
}

interface EditUserProps {
    name: string;
    phone: string;
    age: string;
}

function EditUser() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [user, setUser] = useState<User>({
        id: '',
        name: '',
        phone: '',
        age: '',
    });

    useEffect(() => {
        async function fetchUser() {
            debugger;
            if (id != null) {
                const fetchedUser = await getUserById(id.toString());
                setUser(fetchedUser);
            }
        }
        fetchUser();
    }, [id]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (id != null) {
            try {
                const updatedUser = await updateUser(id, user);
                console.log(updatedUser);
                navigate('/');
            } catch (error) {
                console.error('Error editing user:', error);
            }
        }
    };

    return (
        <div className="container">
            <h1>Edit User</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" value={user?.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
                </Form.Group>

                <Form.Group controlId="formPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Enter phone" value={user?.phone} onChange={(e) => setUser({ ...user, phone: e.target.value })} />
                </Form.Group>

                <Form.Group controlId="formAge">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="text" placeholder="Enter age" value={user?.age} onChange={(e) => setUser({ ...user, age: e.target.value })} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Save
                </Button>
            </Form>
        </div>
    );
}

export default EditUser;