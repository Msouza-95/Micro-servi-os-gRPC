const {Router} = require('express');


const  UserController = require('./controllers/UserController');
const  BuyController = require( './controllers/BuyController');
const  SessionController = require( './controllers/SessionController');

const AuthMiddleware = require('./middlewares/auth');

const router = Router();

router.get('/users/:id', UserController.show);
router.post('/users/', UserController.store);

router.post('/session', SessionController.store);

//router.use(AuthMiddleware)
router.get('/buy', BuyController.index);
router.get('/buy/:id', BuyController.show);
router.post('/buy', BuyController.store);

module.exports = router;