import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const EditUser = () => {
    const { masvne } = useParams(); // Lấy mã sinh viên từ URL
    const [users, setUsers] = useState({});
    const [masv, setMasv] = useState('');
    const [hoten, setHoten] = useState('');
    const [gioitinh, setGioitinh] = useState('');
    const [diachi, setDiachi] = useState('');
    const [dienthoai, setDienthoai] = useState('');
    const [cccd, setCccd] = useState('');
    const [lop, setLop] = useState('');
    const [hinhanh, setHinhanh] = useState(); // Để lưu trữ file hình ảnh
    const [hinhanhcu, setHinhanhcu] = useState(''); // Lưu hình ảnh cũ

    // Lấy danh sách người dùng khi component được tải
    useEffect(() => {
        fetchUsers();
    }, []);

    // Hàm lấy dữ liệu người dùng từ API
    const fetchUsers = () => {
        fetch(`http://localhost:3000/api/dataUserForm/${masvne}`)
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
                setHinhanhcu(data.hinhanh); // Lưu hình ảnh cũ
            })
            .catch((error) => {
                console.error('Lỗi khi lấy dữ liệu:', error);
            });
    };

    // Đồng bộ các giá trị từ users vào các state tương ứng khi users thay đổi
    useEffect(() => {
        if (users) {
            setMasv(users.masv || '');
            setHoten(users.hoten || '');
            setGioitinh(users.gioitinh || '');
            setDiachi(users.diachi || '');
            setDienthoai(users.dienthoai || '');
            setCccd(users.cccd || '');
            setLop(users.lop || '');
        }
    }, [users]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Tạo FormData để gửi hình ảnh và các dữ liệu khác
        const formData = new FormData();
        formData.append('masv', masv);
        formData.append('hoten', hoten);
        formData.append('gioitinh', gioitinh);
        formData.append('diachi', diachi);
        formData.append('dienthoai', dienthoai);
        formData.append('cccd', cccd);
        formData.append('lop', lop);

        // Kiểm tra nếu không có hình ảnh mới thì dùng hình ảnh cũ
        if (hinhanh) {
            formData.append('hinhanh', hinhanh);
        } else {
            formData.append('hinhanhcu', hinhanhcu); // Gửi hình ảnh cũ
        }

        const response = await fetch(`http://localhost:3000/editUser/${masvne}`, {
            method: 'POST',
            body: formData, // Sử dụng FormData để gửi dữ liệu nhị phân
        });

        const data = await response.json();
        if (response.ok) {
            alert(data.message);
        } else {
            alert('Error updating user: ' + data.message);
        }
    };

    return (
        <div className="container mt-5 w-50">
            <h2>Sửa Thông Tin Sinh Viên</h2>

            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="mb-3">
                    <label htmlFor="masv" className="form-label">Mã Sinh Viên</label>
                    <input
                        type="hidden"
                        className="form-control"
                        id="masv"
                        value={masv}
                        onChange={(e) => setMasv(e.target.value)}
                        required
                    />
                    <p className="form-control">
                        {masv}
                    </p>
                </div>
                <div className="mb-3">
                    <label htmlFor="hoten" className="form-label">Họ tên</label>
                    <input
                        type="text"
                        className="form-control"
                        id="hoten"
                        placeholder="Nhập Họ tên"
                        value={hoten}
                        onChange={(e) => setHoten(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="gioitinh" className="form-label">Giới tính</label>
                    <input
                        type="text"
                        className="form-control"
                        id="gioitinh"
                        placeholder="Nhập Giới tính"
                        value={gioitinh}
                        onChange={(e) => setGioitinh(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="diachi" className="form-label">Địa chỉ</label>
                    <input
                        type="text"
                        className="form-control"
                        id="diachi"
                        placeholder="Nhập Địa chỉ"
                        value={diachi}
                        onChange={(e) => setDiachi(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="dienthoai" className="form-label">Điện thoại</label>
                    <input
                        type="text"
                        className="form-control"
                        id="dienthoai"
                        placeholder="Nhập Điện thoại"
                        value={dienthoai}
                        onChange={(e) => setDienthoai(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="cccd" className="form-label">CCCD</label>
                    <input
                        type="text"
                        className="form-control"
                        id="cccd"
                        placeholder="Nhập CCCD"
                        value={cccd}
                        onChange={(e) => setCccd(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="lop" className="form-label">Lớp</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lop"
                        placeholder="Nhập Lớp"
                        value={lop}
                        onChange={(e) => setLop(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="hinhanh" className="form-label">Hình ảnh</label>
                    <input
                        type="file"
                        className="form-control"
                        id="hinhanh"
                        onChange={(e) => setHinhanh(e.target.files[0])} // Lưu đối tượng file
                    />
                 
                </div>
                <button type="submit" className="btn btn-primary">Lưu</button>
            </form>
        </div>
    );
};

export default EditUser;
