import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'; 


const app = express()

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// console.log(path.dirname("C:/Users/Admin/Desktop/webdev/18-1-2024/views/home.html"));
// app.use(express.static(path.join(__dirname ,'18-1-2024')));

app.get('/index', (req, res)=> {
  console.log(__dirname)
    res.sendFile(path.join(__dirname, 'views/index.html'))
   
  });


app.get('/home', (req, res)=> {
  console.log(__dirname)
    res.sendFile(path.join(__dirname, 'views/home.html'))
   
  });

  app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, 'views/about.html'))
 
});

app.get('/contact', function (req, res) {
  res.sendFile(path.join(__dirname, 'views/contact.html'))
 
});

app.get('/services', function (req, res) {
  res.sendFile(path.join(__dirname, 'views/services.html'))
 
});

  app.listen(4000,function(req,res){
  console.log("server start")
});


