const path = require('path');
const express = require('express');
const mailController = require('./mailController')

const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.post('/api/sendmail', (req, res) => {
  const result = mailController(req.body.email);
  if (result) {
    res.json(result);
  } else {
    res.json(false);
  }
});


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
