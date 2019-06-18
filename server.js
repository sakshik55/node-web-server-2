var express=require('express');
var hbs=require('hbs');

const port= process.env.PORT || 3000;

 var a=express();
a.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partial');
a.use(express.static(__dirname +'/public'));

hbs.registerHelper('getCurrentYear',()=>{
  return new Date().getFullYear();
});

hbs.registerHelper('screamit',(text)=>{
  return text.toUpperCase();
});


a.get('/',(req,res)=>{
   res.render('root.hbs',{
     pageTitle:'welcomeszzz',
     welcome:'well well well welcome...leggo'
   });
});

a.get('/about',(req,res)=>{
  res.render('about.hbs',{
    pageTitle:'about about ',
  });
});

a.get('/bad',(req,res)=>{
  res.send({
    errorMessage:'unable to hanlde req'
  })
});

a.listen(port, ()=>{
  console.log('server is up at'+port);
});
