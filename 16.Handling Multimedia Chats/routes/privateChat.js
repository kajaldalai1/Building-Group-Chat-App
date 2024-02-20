const express=require('express');
const router=express.Router();
const privateChatController=require('../controllers/privateChatbox');
const userAuth=require('../middleware/auth');
const upload = require("../middleware/fileupload");
//const upload = require('../middleware/s3Upload');

//router.get('/private-chat', privateChatController.privateChatPage);

//router.get('/chat/message',userAuth,privateChatController.privateChatPage);

router.get(`/private-chat/heading-data/:userId`,privateChatController.privateChatHeading)
router.get('/private-chat-page',privateChatController.privateChatPage);
router.get('/private-chat/friends-list',privateChatController.listOfUsers);
router.post('/private-chat/message',userAuth,upload.single('file'),privateChatController.postPrivateMsg);
router.get(`/private-chat/allMsgs/:receiverId/:senderId`,privateChatController.getAllPrivateMsgs);
router.get(`/private-chat/new-messages/:receiverId/:senderId`,privateChatController.getNewPrivateMsgs)

module.exports=router