const { text } = require('express');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: "outlook",
    auth:{
    user: "nk_nmr23@outlook.com",
        pass: "nodemailer23"
}
});

const options={
    from:"nk_nmr23@outlook.com",
    to:"nithinkm55@gmail.com",
    subject:"Hello Friend, this message is sent via NODEMAILER",
    text:"Nodemailer is awesome!"
    }
    transporter.sendMail(options, function (err,info){
if (err){
    console.log(err)
    return;
}
console.log("Sent: " +info.response);
    })