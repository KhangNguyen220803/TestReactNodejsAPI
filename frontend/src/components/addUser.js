import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddUser = () => {
    const [masv, setMasv] = useState('');
    const [hoten, setHoten] = useState('');
    const [gioitinh, setGioitinh] = useState('');
    const [diachi, setDiachi] = useState('');
    const [dienthoai, setDienthoai] = useState('');
    const [cccd, setCccd] = useState('');
    const [lop, setLop] = useState('');
    const [hinhanh, setHinhanh] = useState(null); // To store the file

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create FormData object to send the image and other data
        const formData = new FormData();
        formData.append('masv', masv);
        formData.append('hoten', hoten);
        formData.append('gioitinh', gioitinh);
        formData.append('diachi', diachi);
        formData.append('dienthoai', dienthoai);
        formData.append('cccd', cccd);
        formData.append('lop', lop);
        formData.append('hinhanh', hinhanh); // Append the image file

        const response = await fetch('http://localhost:3000/addUser', {
            method: 'POST',
            body: formData, // Using FormData to send binary data
        });

        const data = await response.json();
        if (response.ok) {
            alert(data.message);
        } else {
            alert('Error adding user: ' + data.message);
        }
    };

    return (
        <div className="container mt-5 w-50">
            <h2>Thêm Sinh Viên</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="mb-3">
                    <label htmlFor="masv" className="form-label">Mã Sinh Viên</label>
                    <input
                        type="text"
                        className="form-control"
                        id="masv"
                        placeholder="Nhập Mã Sinh Viên"
                        value={masv}
                        onChange={(e) => setMasv(e.target.value)}
                        required
                    />
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
                        onChange={(e) => setHinhanh(e.target.files[0])} // Save the file object
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Thêm Sinh Viên</button>
            </form>
        </div>
    );
};

export default AddUser;
