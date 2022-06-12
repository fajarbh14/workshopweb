const indexController = require('../controllers/index.controller');
const postController = require('../controllers/post.controller');
const userController = require('../controllers/user.controller');
const dataController = require('../controllers/data.controller'); 
const auth = require('../middlewares/auth');

const router = require('express').Router();

router.get('/', indexController.index);

router.get('/posts', postController.index);
router.get('/posts/create', postController.create);
router.post('/posts/store', postController.store);
router.get('/posts/edit/:id', postController.edit);
router.post('/posts/update/:id', postController.update);
router.get('/posts/delete/:id', postController.delete);

//users
router.get('/users', userController.index);
router.get('/users/create', userController.create);
router.post('/users/store', userController.store);
router.get('/users/edit/:id', userController.edit);
router.post('/users/update/:id', userController.update);
router.get('/users/delete/:id', userController.delete);
module.exports = router;

//data
router.get('/dataa', dataController.index);
router.get('/dataa/create', dataController.create);
router.post('/dataa/store', dataController.store);
router.get('/dataa/edit/:id', dataController.edit);
router.post('/dataa/update/:id', dataController.update);
router.get('/dataa/delete/:id', dataController.delete);
module.exports = router;
