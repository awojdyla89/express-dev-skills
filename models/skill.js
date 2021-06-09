const skills = [
    {id: 11, skill: 'Learning Javascript', accomplished: false},
    {id: 22, skill: 'Sleeping', accomplished: true},
    {id: 33, skill: 'Eating', accomplished: true}
];

// export the functions below for use
module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function deleteOne(id){
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}

function create(skill){
    //create id
    skill.id = Date.now() % 1000000;
    //create skill properties
    skill.accomplished = false;
    skills.push(skill);
    
}

function getOne(id){
    return skills.find(skill => skill.id === parseInt(id));
}

function getAll(){
    return skills;
};