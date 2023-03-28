const http=require('http');
const express=require('express');
const result=require('./results')
// const views=require('views');
const app=express();
app.listen(8080);
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    const obj=result;
    res.render('hello',{result:result});
    console.log('server',{result:result})
})
