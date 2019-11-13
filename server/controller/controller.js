//->myapp/app/controllers/controller

var student = {
        student1: {
          firstname: "Jack",
          lastname: "Davis",
          major: "Computer Science",
          year: "freshman",
          age: 25,
          id: 1
        },
        student2: {
          firstname: "Mary",
          lastname: "Taylor",
          major: "English",
          year: "senior",
          age: 37,
          id: 2
        },
        student3: {
          firstname: "Peter",
          lastname: "Thomas",
          major: "Chemistry",
          year: "junior",
          age: 17,
          id: 3
        },
        student4: {
          firstname: "Peter",
          lastname: "Thomas",
          major: "Physics",
          year: "senior",
          age: 17,
          id: 4
        }
      }



//This uses PUG for visual
//->myapp/views/homepage.pug
//  This is where we put the layout for the webpage
//->myapp/app.js
//  This is where we import? the 'pug' engine to use
export.get_homepage = function(req, res, next) {
  res.render('homepage', { title: 'Homepage Title'});
}

 
 exports.create = function(req, res){
    var newStudent = req.body;
    customers["student" + newStudent.id] = newStudent;
    console.log("--->After Post, students:\n" + JSON.stringify(students, null, 4));
    res.end("Post Successfully: \n" + JSON.stringify(newStudent, null, 4));
 };

exports.findAll = function(req, res) {
  console.log("--->Find All: \n" + JSON.stringify(student, null, 4));
  res.end("All students: \n" + JSON.stringify(student, null, 4));
};

exports.findOne = function(req, res) {
    var std = student["customer" + req.params.id];
    console.log("--->Find customer: \n" + JSON.stringify(std, null, 4));
    res.end( "Find a Student:\n" + JSON.stringify(std, null, 4));
};

exports.update = function(req, res) {
  var id = parseInt(req.params.id);
  var updatedStudent = req.body; 
  if(student["customer" + id] != null){
    // update data
    customers["customer" + id] = updatedStudent;

    console.log("--->Update Successfully, customers: \n" + JSON.stringify(student, null, 4))
    
    // return
    res.end("Update Successfully! \n" + JSON.stringify(updatedStudent, null, 4));
  }else{
    res.end("Don't Exist Customer:\n:" + JSON.stringify(updatedStudent, null, 4));
  }
};

exports.delete = function(req, res) {
  var deleteStudent = student["student" + req.params.id];
    delete student["student" + req.params.id];
    console.log("--->After deletion, student list:\n" + JSON.stringify(student, null, 4) );
    res.end( "Deleted student: \n" + JSON.stringify(deleteStudent, null, 4));
};


