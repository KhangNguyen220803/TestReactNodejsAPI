import React, { useState } from 'react';

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
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <input
                type="text"
                placeholder="Masv"
                value={masv}
                onChange={(e) => setMasv(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Hoten"
                value={hoten}
                onChange={(e) => setHoten(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Gioitinh"
                value={gioitinh}
                onChange={(e) => setGioitinh(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Diachi"
                value={diachi}
                onChange={(e) => setDiachi(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Dienthoai"
                value={dienthoai}
                onChange={(e) => setDienthoai(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="CCCD"
                value={cccd}
                onChange={(e) => setCccd(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Lop"
                value={lop}
                onChange={(e) => setLop(e.target.value)}
                required
            />
            <input
                type="file"
                onChange={(e) => setHinhanh(e.target.files[0])} // Save the file object
                required
            />
            <button type="submit">Add User</button>
        </form>
    );
};

export default AddUser;
