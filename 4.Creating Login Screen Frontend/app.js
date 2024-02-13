const express=require('express')
const app=express();
const bodyParser=require('body-parser')
const sequelize=require('./util/database')
const User=require('./models/users')
const userRouter=require('./routes/users')
const path=require('path')
const cors=require('cors')
app.use(cors())
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname,'public','html')))
app.use(bodyParser.urlencoded({extended:false}))

app.use('/',userRouter)


sequelize.sync({alter:true})
.then(()=>{
    app.listen(3000);
    console.log('database schema updated');
})
.catch((err)=>{
    console.log('error updating database schema:',err)
})


