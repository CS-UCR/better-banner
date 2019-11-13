//->app/routes/index.js

var express = require('express');
var router = express.Router();

let homepage = require('../controllers/homepage');

//Get home page
router.get('/', homepage.get_homepage);
module.exports = router;



module.exports = function(app) {

	//uses the file in the controllers directory
	var customers = require('../controllers/controller.js');

	//create a new student
	app.post('/api/student', student.create);

	//retrieve all students
	app.get('/api/student', student.findAll);

	//Retrieve a single student by Id
	app.get('/api/student/:id', student.findOne);

	//Update a stduent with Id
	app.put('/api/customers/:id', student.update);

	//Delete a student with Id
	app.delete('/api/customers/:id', customers.delete);


}
