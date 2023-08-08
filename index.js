const express = require('express');
let port = 8080;
const app = express();
const mongoose = require('./config/mongoose');
const BookRecords = require('./models/admin');
app.use(express.urlencoded());
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    BookRecords.find({}).then((success)=>{
        return res.render('index',{
            success
        });
    }).catch((error)=>{
        console.log(error);
        return false;
    })
})
app.post('/insertData',(req,res)=>{
    const {name,price,pages,author} = req.body;
    BookRecords.create({
        name : name,
        price : price,
        pages : pages,
        author : author
    }).then((success)=>{
        console.log("Record Created");
        return res.redirect('back');
    }).catch((error)=>{
        console.log(error);
        return false;
    })
})
app.get('/deleteData',(req,res)=>{
    let id = req.query.id;
    BookRecords.findByIdAndDelete(id).then((success)=>{
        return res.redirect('back');
    }).catch((error)=>{
        console.log(error);
        return false;
    })
})
app.get('/editData',(req,res)=>{
    let id = req.query.id;
    BookRecords.findById(id).then((record)=>{
        return res.render('edit',{
            record
        })
    }).catch((error)=>{
        console.log(error);
        return false;
    })
})
app.post('/updateData',(req,res)=>{
    let editid = req.body.editid;
    const {name,price,pages,author} = req.body;
    console.log(pages);
    BookRecords.findByIdAndUpdate(editid,{
        name : name,
        price : price,
        pages : pages,
        author : author
    }).then((success)=>{
        console.log("Record Updated");
        return res.redirect('/');
    }).catch((error)=>{
        console.log(error);
        return false;
    })
})
app.listen(port,(error)=>{
    if(error){
        console.log(error);
        return false;
    }
    else{
        console.log("done "+port);
    }
})