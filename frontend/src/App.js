import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListUser from './components/listUser';
import AddUser from './components/addUser';
import EditUser from './components/editUser';




// const urlBackend = process.env.URLBACKEND

function App() {




  return (
    <>
      <Header></Header>
      <Router>
          
            <Routes>
                <Route path="/listUser" element={<ListUser />} />
                <Route path="/editUser/:masvne" element={<EditUser />} />
                <Route path="/addUser" element={<AddUser />} />
          
            </Routes>
        </Router>

    </>

  );
}

export default App;
