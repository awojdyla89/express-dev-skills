const skills = [
    {id: 11, skill: 'Learning Javascript', accomplished: false},
    {id: 22, skill: 'Sleeping', accomplished: true},
    {id: 33, skill: 'Eating', accomplished: true}
];

// export the functions below for use
module.exports = {
    getAll,
    getOne
};

function getOne(id){
    return skills.find(skill => skill.id === parseInt(id));
}

function getAll(){
    return skills;
};