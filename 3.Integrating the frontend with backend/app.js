const path = require('path');
const express = require('express');
const userRoutes = require('./routes/users');
const sequelize = require('./util/database');
const User = require('./models/users');



const bodyParser = require('body-parser');
const cors = require('cors');
const app=express();

app.use(cors({
    origin:"*"
}));

//app.set('view engine', 'ejs');
app.set('views','views');
app.set('views',path.join(__dirname, 'views'));

app.use(bodyParser.json({extended: true}));
app.use(express.static(path.join(__dirname,'public')));


app.get("/signup", (req,res)=>{
    const signUpPath = path.join(__dirname,'views','signup.html');
    res.sendFile(signUpPath);
});

app.use('/user',userRoutes)

sequelize.sync()
.then(result => {
    app.listen(process.env.PORT || 3000);
})
.catch(err => {
    console.log(err);
})