var users = [
    {name: 'João Amado', id: 1},
    {name: 'Jorge Piaia', id: 2},
    {name: 'Jessica Franke', id: 3}
  ];

exports.getUsers = function(req, res) {
  res.json(users);
};


exports.getUser = function(req, res) {
  var user = users.find(function(element, index){
    if (element.id == req.params.id){
      console.log(req.params);
      return true;
    }
    return false;
  });
  res.json(user || {name: 'Jon Snow', id: -1});
};
