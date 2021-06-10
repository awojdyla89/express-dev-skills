
// We call in our model/skill aka our 'database' into the control to
// manipulate the data from the functions created in the database
// Here in the controller we can then render based on the endpoint.

const Skill = require("../models/skill");

module.exports = {
  index: index,
  show: show,
  new: newSkill,
  create,
  delete: deleteSkill,
};

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect("/skills");
}

function create(req, res) {
  // The model is responsible for creating data
  Skill.create(req.body);
  // Do a redirect anytime data is changed
  res.redirect("/skills");
}

function newSkill(req, res) {
  res.render("skills/new");
}

function show(req, res) {
  const singleSkill = Skill.getOne(req.params.id);

  res.render("skills/show", {
    skill: singleSkill, // key name skill is the variable in skills/show
  });
}

function index(req, res) {
  const skillsList = Skill.getAll();

  //always knows we start with 'views' folder as a starting point
  res.render("skills/index", {
    skills: skillsList, //key name skills is the variable in skills/index
  });
}
