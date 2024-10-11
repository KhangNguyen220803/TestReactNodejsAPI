import React, { useState, useEffect } from 'react';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa'; // Các biểu tượng cho Xem, Sửa, Xóa
import 'bootstrap/dist/css/bootstrap.min.css'; // Nhúng Bootstrap

function ListUser() {
  const [users, setUsers] = useState([]);

  // Lấy danh sách người dùng khi component được tải
  useEffect(() => {
    fetchUsers();
  }, []);

  // Hàm lấy dữ liệu người dùng từ API
  const fetchUsers = () => {
    fetch('http://localhost:3000/api/dataUser')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Lỗi khi lấy dữ liệu:', error);
      });
  };

  // Hàm reload danh sách sinh viên
  const handleReload = () => {
    fetchUsers();  // Gọi lại hàm fetchUsers để cập nhật danh sách sinh viên
  };

  // Hàm xử lý xóa người dùng
  const handleDelete = async (e, masv) => {
    // e.preventDefault();



    try {
      const response = await fetch(`http://localhost:3000/deleteUser/${masv}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Sau khi xóa thành công, gọi hàm reload để cập nhật danh sách
        handleReload();
      } else {
        const data = await response.json();
        console.error(`Lỗi: ${data.message}`);
      }
    } catch (error) {
      console.error('Lỗi khi xóa người dùng:', error);
    }
  };

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
                  style={{ width: '50px', height: '50px' }}
                />
              </td>
              <td>
                
                <a className="btn btn-link" href={`http://localhost:6868/detailUser/${user.masv}`}>
                <FaEye />
                </a>
              </td>
              <td>
                <a className="btn btn-link" href={`http://localhost:6868/editUser/${user.masv}`}>
                  <FaEdit />
                </a>
              </td>
              <td>
                <form onSubmit={(e) => handleDelete(e, user.masv)}>
                  <input type="hidden" value={user.masv} name="masv" />
                  <button type="submit" className="btn btn-link text-danger">
                    <FaTrash />
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListUser;
