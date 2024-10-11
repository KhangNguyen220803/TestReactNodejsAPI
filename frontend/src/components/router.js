
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header';
import ListUser from './listUser';
import AddUser from './addUser';
import EditUser from './editUser';
import DetailUser from './detailUser'
import SearchUser from './searchUser';
function Routers() {

  return (
    <>
      <Router>
        <Header></Header>

        <Routes>
          <Route path="/" element={<ListUser />} />
          <Route path="/listUser" element={<ListUser />} />
          <Route path="/editUser/:masvne" element={<EditUser />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/detailUser/:masvne" element={<DetailUser />} />
          <Route path="/searchUser/:search" element={<SearchUser />} />

        </Routes>
      </Router>

    </>

  );
}

export default Routers;
