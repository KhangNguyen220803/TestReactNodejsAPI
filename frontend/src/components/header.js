import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Nhập useNavigate

const Header = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate(); // Khai báo navigate bằng useNavigate hook

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('search', search);

        const response = await fetch('http://localhost:3000/searchUser', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
        if (response.ok) {
            // alert(data.message);
            navigate(`/searchUser/${search}`); // Chuyển hướng đến trang tìm kiếm với từ khóa
        } else {
            // alert('Error adding user: ' + data.message);
        }
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                         
                            <Link to="/listUser" className="nav-link active hover-highlight">
                            Danh Sách Sinh Viên
                            </Link>

                  
                        </li>
                        <li className="nav-item">
                            <Link to="/addUser" className="nav-link active hover-highlight" > 
                                Thêm Sinh Viên
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex" style={{ width: '500px', marginLeft: '200px' }} onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="form-control me-2"
                            id="masv"
                            placeholder="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            required
                        />
                        <input className="btn btn-primary" type="submit" value="Search" />
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Header;
