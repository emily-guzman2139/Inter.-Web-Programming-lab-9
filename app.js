const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
//FOR ME: GET HAVE TO GO FIRST AND THEN POST. 
app.get('/',(req,res)=>{
    res.render('login'); //login.ejs
});

app.post('/login',(req,res)=>{
   const { email, password } = req.body;
    res.render('dashboard', {user: email}); //dashboard.ejs, returns Welcome email input. 
});

app.listen(3000);
