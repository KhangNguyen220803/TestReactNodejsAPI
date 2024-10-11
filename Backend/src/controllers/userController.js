import express from "express"
import userModel from "../services/userModel"

const multer = require('multer');
const path = require('path');

// Cấu hình nơi lưu trữ và tên file cho ảnh
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/uploads/'); // Thư mục chứa file upload
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Đặt tên file với timestamp
    }
});

// Cấu hình multer với bộ lọc file
const upload = multer({
    storage: storage,
    limits: { fileSize: 10000000 }, // Giới hạn kích thước file 1MB
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);

        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb('Error: Images only!');
        }
    }
});


// ---------------------------------------------------------------------------------------------

const sendDataUser = async (req, res) => {

    let userList = await userModel.getAllUser()
    res.json(userList)
}

const sendDataUserDetail = async (req, res) => {

    let masv = req.params.masv
    let userDetail = await userModel.getDetailUser(masv)
    res.json(userDetail)
}



const addUser = async (req, res) => {

    try {
        // Dùng multer để upload ảnh
        upload.single('hinhanh')(req, res, async (err) => {
            if (err) {
                return res.status(400).send({ message: err });
            }

            // Lấy dữ liệu từ body request
            let { masv, hoten, gioitinh, diachi, dienthoai, cccd, lop } = req.body;
            let hinhanh = req.file ? req.file.filename : null;

            // Lưu user vào cơ sở dữ liệu
            await userModel.addUser(masv, hoten, gioitinh, diachi, dienthoai, cccd, lop, hinhanh);
        });
    } catch (error) {
        res.status(500).send({ message: 'Server Error' });
    }
};

const sendFillUserForm = async (req, res) => {

    let masv = req.params.masv
    let dataUser = await userModel.fillUserForm(masv)
    res.json(dataUser)
}


const updateUser = async (req, res) => {

    try {
        // Dùng multer để upload ảnh
        upload.single('hinhanh')(req, res, async (err) => {
            if (err) {
                return res.status(400).send({ message: err });
            }

            // Lấy dữ liệu từ body request
            let { masv, hoten, gioitinh, diachi, dienthoai, cccd, lop, hinhanhcu } = req.body;
            let hinhanh = req.file ? req.file.filename : hinhanhcu;

            // Lưu user vào cơ sở dữ liệu
            await userModel.updateUser(hoten, gioitinh, diachi, dienthoai, cccd, lop, hinhanh, masv);
        });
    } catch (error) {
        res.status(500).send({ message: 'Server Error' });
    }
};

const deleteUser = async (req, res) => {
    let masv = req.params.masv
    await userModel.deleteUser(masv)
}



const searchUser = async (req, res) => {
    let { search } = req.body
    res.redirect(`/api/searchUser/${search}`)
}

const sendsearchUser = async (req, res) => {
    let search = req.params.search
    let searchreturn = await userModel.searchUser(search)
    res.json(searchreturn)
}



export default { addUser, deleteUser, updateUser, sendDataUser, sendFillUserForm, sendDataUserDetail,searchUser, sendsearchUser }


















