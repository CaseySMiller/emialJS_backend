require("dotenv").config();
const { Category } = require("./models");
const axios = require('axios');

const mailController = async (email) => {
  //retrieve and parse the category names
  const categories = await Category.findAll();
  let catNameArray = [];
  for (let i = 0; i < categories.length; i++) {
    nameObj = { name: categories[i].category_name };
    catNameArray.push(nameObj);
  }

  const mailParams = {
    email: email,
    categories: catNameArray,
  };
  const sent = await sendMail(mailParams);
  if (sent) {
    return sent;
  } else {
    return false;
  }
};

const sendMail = async (mailParams) => {
  // console.log(mailParams);
  const result = await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
    service_id: process.env.EJS_SID,
    template_id: process.env.EJS_TID,
    user_id: process.env.EJS_UID,
    accessToken: process.env.EJS_SECRET,
    template_params: mailParams,
  });

  if (result) {
    return result;
  } else {
    return false;
  }
};

module.exports = mailController;


