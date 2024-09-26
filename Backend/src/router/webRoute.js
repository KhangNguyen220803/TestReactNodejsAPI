import express from 'express'
// import getHomePage from '../controllers/homeController'
// import aboutPage from '../controllers/aboutController'
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


// ejs cũ--------------------------------------------------

    // router.post('/searchUser/:search', User.searchUser)

    // router.get('/editUser/:masv', User.fillUserForm)

    // router.post('/searchUser', User.searchUser)

    // router.get('/user', User.getAllUser)

    // router.get('/', getHomePage)

    // router.get('/about', aboutPage)

    // router.get('/addUser', User.showUserForm)

    // router.get('/detailUser/:masv', User.getDetailUser)
// ejs cũ--------------------------------------------------


    return app.use('/', router)
}

export default initWebRouter
