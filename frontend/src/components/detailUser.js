import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const DetailUser = () => {
    const { masvne } = useParams(); // Lấy mã sinh viên từ URL

    const [user, setUser] = useState(null); // Thay đổi từ mảng sang một object

    // Lấy thông tin chi tiết người dùng khi component được tải
    useEffect(() => {
        fetchUserDetail();
    }, [masvne]);

    // Hàm lấy dữ liệu người dùng từ API
    const fetchUserDetail = () => {
        fetch(`http://localhost:3000/api/dataUserDetail/${masvne}`)
            .then((response) => response.json())
            .then((data) => {
                setUser(data);
            })
            .catch((error) => {
                console.error('Lỗi khi lấy dữ liệu:', error);
            });
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Thông Tin Chi Tiết Sinh Viên</h1>

            {user ? (
                <table className="table table-striped table-bordered text-center">
                    <thead className="thead-dark">
                        <tr>
                            <th>MSSV</th>
                            <th>Họ Tên</th>
                            <th>Giới Tính</th>
                            <th>Địa Chỉ</th>
                            <th>Điện Thoại</th>
                            <th>CCCD</th>
                            <th>Lớp</th>
                            <th>Hình Ảnh</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{user.masv}</td>
                            <td>{user.hoten}</td>
                            <td>{user.gioitinh}</td>
                            <td>{user.diachi}</td>
                            <td>{user.dienthoai}</td>
                            <td>{user.cccd}</td>
                            <td>{user.lop}</td>
                            <td>
                                {user.hinhanh ? (
                                    <img
                                        src={`http://localhost:3000/${user.hinhanh}`}
                                        alt={user.hoten}
                                        style={{ width: '50px', height: '50px' }}
                                    />
                                ) : (
                                    'Không có ảnh'
                                )}
                            </td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <p>Đang tải dữ liệu...</p>
            )}
        </div>
    );
};

export default DetailUser;
