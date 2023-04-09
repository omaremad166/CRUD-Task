import { Table } from 'react-bootstrap';
import './App.css';
import { getAllUsers } from './Services/user-service';
import { BrowserRouter, Route, NavLink, Router, Routes } from 'react-router-dom';
import UsersList from './Components/UsersList';
import RegisterUser from './Components/RegisterUser';
import EditUser from './Components/EditUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsersList />}/>
        <Route path="registeruser" element={<RegisterUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
