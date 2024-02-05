const path = require('path');
const express = require('express');
const port = 2000;
const app = express();

app.get("/signup",(req,res)=>{
    const signUpPath = path.join(__dirname,'views','signup.html');
    res.sendFile(signUpPath);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});