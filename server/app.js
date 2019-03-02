const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./controller/connection');
const Usuario = require('./models/User');
let app = express();

app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(express.static('public'));


connection();

let list = [
  {_id: 1, ride: 'Always', weekDays: ['Mon, Tue, Wed']}, 
  {_id: 2, ride: 'Sometimes', weekDays: ['Mon, Sun, Thu']}, 
  {_id: 3, ride: 'Never', weekDays: ['Tue, Fri']},
  {_id: 4, ride: 'Always', weekDays: ['Mon']},
  {_id: 5, ride: 'Always', weekDays: ['Sat, Fri, Sun']},
  {_id: 6, ride: 'Sometimes', weekDays: ['Mon']},
  {_id: 7, ride: 'Always', weekDays: ['Mon, Sun, Thu']},
  {_id: 8, ride: 'Never', weekDays: ['Sat, Fri, Sun']},
  {_id: 9, ride: 'Always', weekDays: ['Mon, Tue, Wed']},
  {_id: 10, ride: 'Sometimes', weekDays: ['Wed, Fri']}
]

//delete all Users and populate it again when loaded
Usuario.collection.deleteMany({});

//insert Default users
Usuario.collection.insertMany(list, (err, docs) => {
  console.log('trying to add collection');
  if(err) {
    console.log(err);
  };
  console.log('items saved');
});

app.get('/api/users', (req, res) => { 

  Usuario.find({}, (err, data) => {
    res.json(data);
  });

});

app.get('/userlogged', (req, res) => {
  res.json({
    id: 12345,
    username: "Jeff Goes",
    friends: ["Lucas", "Rafael", "Priscila", "Roberta"],
    savedItems: ["Item1", "Item2", "Item3"],
    userPrefenences: {
      dataPrivacy: true,
      showUserDetails: false
    }
  });
});

app.post('/post/newuser', urlencodedParser, (req, res) => {
  console.log('acionou o post!!');
  Usuario.collection.countDocuments().then((count) => {
    req.body._id = count + 1;

    Usuario.collection.insertOne(req.body, (err, docs) => {
      console.log('trying to add one to collection');
      if(err) {
        console.log(err);
      };
      console.log('item saved');
      console.log(req.body);
    });
  });
});

app.listen(process.env.PORT || 3001, () => {
  console.log('Server listening on port %s, Ctrl+C to stop', process.env.PORT || 3001)
})