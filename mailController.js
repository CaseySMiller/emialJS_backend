const { Category} = require('./models');

const mailController = async () =>{
  console.log('mailController.js');

  //retrieve the categories data
  const categories = await Category.findAll();
  let catNameArray = [];
  for (let i = 0; i < categories.length; i++) {
    catNameArray.push(categories[i].category_name);
  }
  console.log(catNameArray);


  // retrieve the categories data and then use axios to send it to email.js
}

module.exports = mailController;