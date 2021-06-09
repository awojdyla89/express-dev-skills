
// This is where all the logic happens. 
// We call in our model/skill AKA our database into the control to 
// manipulate the data
// we then render within the function.

const Skill = require('../models/skill');

module.exports = {
    index: index,
    show: show,
    new : newSkill
}

function newSkill(req, res){

    res.render('skills/new');
}

function show(req, res){
    const singleSkill = Skill.getOne(req.params.id);

    res.render('skills/show' , {
        skill: singleSkill // key name skill is the variable in skills/show
    })
}

// the logic that exists will deal with CRUD
function index(req, res){

    const skillsList = Skill.getAll();

    //always knows we start with views folder as a starting point
    res.render('skills/index', {
        skills : skillsList      //key name skills is the variable in skills/index
    })
}