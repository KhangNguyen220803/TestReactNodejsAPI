import React from 'react';

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a
                                    className="nav-link active hover-highlight"
                                    aria-current="page"
                                    href="http://localhost:6868/listUser"
                                >
                                    Danh Sách Sinh Viên
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link active hover-highlight"
                                    aria-current="page"
                                    href="http://localhost:6868/addUser"
                                >
                                    Thêm Sinh Viên
                                </a>
                            </li>
                        </ul>
                        <form
                            className="d-flex"
                            style={{ width: '500px', marginLeft: '200px' }}
                            role="search"
                            method="post"
                            action="/searchUser"
                        >
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                name="search"
                            />
                            <input className="btn btn-primary" type="submit" value="Search" />
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}
