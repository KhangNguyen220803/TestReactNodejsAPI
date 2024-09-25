import React, { useState, useEffect } from 'react';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa'; // Các biểu tượng cho Xem, Sửa, Xóa
import 'bootstrap/dist/css/bootstrap.min.css'; // Nhúng Bootstrap

function ListUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/dataUser')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Danh Sách Sinh Viên</h1>
    

      <table className="table table-striped table-bordered text-center">
        <thead className="thead-dark">
          <tr>
            <th>STT</th>
            <th>MSSV</th>
            <th>Họ Tên</th>
            <th>Giới Tính</th>
            <th>Địa Chỉ</th>
            <th>Điện Thoại</th>
            <th>CCCD</th>
            <th>Lớp</th>
            <th>Hình Ảnh</th>
            <th>Xem</th>
            <th>Sửa</th>
            <th>Xóa</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.masv}>
              <td>{index + 1}</td>
              <td>{user.masv}</td>
              <td>{user.hoten}</td>
              <td>{user.gioitinh}</td>
              <td>{user.diachi}</td>
              <td>{user.dienthoai}</td>
              <td>{user.cccd}</td>
              <td>{user.lop}</td>
              <td>
                <img
                
                  src={`http://localhost:3000/${user.hinhanh}`}
                  alt={user.hoten}
                  style={{ width: '50px', height: '50px'}}
                />
                
          

              </td>
              <td>
                <button className="btn btn-link">
                  <FaEye />
                </button>
              </td>
              <td>
                <button className="btn btn-link">
                  <FaEdit />
                </button>
              </td>
              <td>
                <button className="btn btn-link text-danger">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListUser;
