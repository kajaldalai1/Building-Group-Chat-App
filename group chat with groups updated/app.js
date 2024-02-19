const express=require('express')
const app=express();
const bodyParser=require('body-parser')
const sequelize=require('./util/chat')
const User=require('./models/usergroup')
const group=require('./models/groups')
const userGroup=require('./models/usergroup')
const Chat=require('./models/chat')

const userRouter=require('./routes/user')
const chatRouter=require('./routes/chat')
const groupRouter=require('./routes/groups')
const path=require('path')
const cors=require('cors');
const { HasMany } = require('sequelize');
app.use(cors())
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname,'public','html')))
app.use(bodyParser.urlencoded({extended:false}))
app.use('/',userRouter)
app.use('/',chatRouter)
app.use('/',groupRouter)
User.hasMany(Chat);
Chat.belongsTo(User);
User.hasMany(userGroup);
userGroup.belongsTo(User);

group.hasMany(userGroup);
userGroup.belongsTo(group)




sequelize.sync({alter:true})
.then(()=>{
    app.listen(3000);
    console.log('database schema updated');
})
.catch((err)=>{
    console.log('error updating database schema:',err)
})
