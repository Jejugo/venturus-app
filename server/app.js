const express = require('express');
const cors = require('cors')
const shortid = require('shortid');
let app = express();

app.use(cors());
app.use(express.static('public'));

app.get('/ride-group', (req, res) => {
  res.json([
    {
      userId: 1,
      ride: 'Always'
    },
    {
      userId: 2,
      ride: 'Sometimes'
    },
    {
      userId: 3,
      ride: 'Never'
    },
    {
      userId: 4,
      ride: 'Always'
    },
    {
      userId: 5,
      ride: 'Always'
    },
    {
      userId: 6,
      ride: 'Sometimes'
    },
    {
      userId: 7,
      ride: 'Always'
    },
    {
      userId: 8,
      ride: 'Never'
    },
    {
      userId: 9,
      ride: 'Always'
    },
    {
      userId: 10,
      ride: 'Sometimes'
    },
  ]);
});

app.get('/week-days', (req, res) => {
  res.json([
    {
      userId: 1,
      weekDays: ['Mon, Tue, Wed']
    },
    {
      userId: 2,
      weekDays: ['Mon, Sun, Thu']
    },
    {
      userId: 3,
      weekDays: ['Tue, Fri']
    },
    {
      userId: 4,
      weekDays: ['Mon']
    },
    {
      userId: 5,
      weekDays: ['Sat, Fri, Sun']
    },
    {
      userId: 6,
      weekDays: ['Mon']
    },
    {
      userId: 7,
      weekDays: ['Mon, Sun, Thu']
    },
    {
      userId: 8,
      weekDays: ['Sat, Fri, Sun']
    },
    {
      userId: 9,
      weekDays: ['Mon, Tue, Wed']
    },
    {
      userId: 10,
      weekDays: ['Wed, Fri']
    },
  ]);
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

app.listen(process.env.PORT || 3001, () => {
  console.log('Server listening on port %s, Ctrl+C to stop', process.env.PORT || 3001)
})