
// These are the routes. 
// The routes callnack function is in the controller
// Based on the type of route a different function is performed

let express = require('express');
let router = express.Router();
const skillsCtrl = require('../controllers/skills');


router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.delete);

module.exports = router;

//-----MVC FLOW------------
// From the browser endpoint (localhost:3000/skills)
// It looks through the server.js file
// Finds the router being requested (endpoint) (app.use('/skills', skillsRouter))
// It goes to skillsRouter and finds the endpoint in the routes folder
// It triggers the function skillsCtrl.index and goes to the controller folder
// The index function is calling the model folder
// The model folder getAll() function is called and returns all the data
// And stores it in the controller function and then
// the function responds to the client(browser) and displays the index.ejs
// which is being called by the router folder