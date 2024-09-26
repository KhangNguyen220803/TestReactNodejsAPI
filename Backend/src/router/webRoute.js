import express from 'express'
import User from '../controllers/userController'

const router = express.Router()
const initWebRouter = (app) => {


    router.get('/api/dataUser/', User.sendDataUser);

    router.get('/api/dataUserForm/:masv', User.sendFillUserForm);

    router.get('/api/dataUserDetail/:masv', User.sendDataUserDetail);

    router.post('/searchUser', User.searchUser)

    router.get('/api/searchUser/:search', User.sendsearchUser)

    router.post('/editUser/:masv', User.updateUser)

    router.post('/addUser', User.addUser)

    router.delete('/deleteUser/:masv', User.deleteUser);


    return app.use('/', router)
}

export default initWebRouter
