var bills = [
    {
      id: 1,
      name: 'Mercado',
      value: 1000,
      date: '12/12/2016',
      friends: [
        {name: 'João Amado', id: 1},
        {name: 'Jorge Piaia', id: 2},
        {name: 'Jessica Franke', id: 3}
      ]
    },
    {
      id: 2,
      name: 'Limpeza',
      value: 100,
      date: '01/10/2016',
      friends: [
        {name: 'João Amado', id: 1},
        {name: 'Jorge Piaia', id: 2}
      ]
    },
    {
      id: 3,
      name: 'Festa',
      value: 200,
      date: '05/10/2016',
      friends: [
        {name: 'João Amado', id: 1},
        {name: 'Jorge Piaia', id: 2},
        {name: 'Jessica Franke', id: 3}
      ]
    }
  ];

exports.getBills = function(req, res) {
  res.json(bills);
};


exports.getBill = function(req, res) {
  var bill = bills.find(function(element, index){
    if (element.id == req.params.id){
      console.log(req.params);
      return true;
    }
    return false;
  });
  res.json(bill || {name: 'Jon Snow', id: -1});
};
