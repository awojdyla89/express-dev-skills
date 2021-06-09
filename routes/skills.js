// This is the endpoint, this is what the users browser calls like localhost:3000/skills
// we call in (require) the logic from the controllers
// the server gets the endpoint and spits out something from the controller back to the browser


let express = require('express');
let router = express.Router();
const skillsCtrl = require('../controllers/skills');


router.get('/', skillsCtrl.index);
router.get('/', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);




module.exports = router;



//------------
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