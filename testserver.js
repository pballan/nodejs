var http = require('http');
var express = require('express');
var mysql = require('mysql');
var manejadorDeEventos = {};
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'mysql123',
  database : 'AlarmaSys'
});
var request = require('request');


var app = express();
var id = 0;

var server = http.createServer();
var posts = [];
var visitas = 0;

manejadorDeEventos.getUltimo = function(res){
  res.end(JSON.stringify(posts[posts.length-1]));
};
manejadorDeEventos.getIndex = function(res){
  res.sendFile( __dirname + "/public/index.html" );
}




connection.connect(function(err){
  if(!err) {
      console.log(" OK ----> BASE DE DATOS CONECTADA");
  } else {
      console.log(" ERROR ----> ERROR EN CONECCION A BASE DE DATOS");
  }
});

//app.use(express.static('public'))

app.use('/css', express.static(__dirname + '/public/css'));
app.use('/img', express.static(__dirname + '/public/img'));
app.use('/js', express.static(__dirname + '/public/js'));

var errorPath = "error404.html";

app.get('/', function (req, res) {
  manejadorDeEventos.getIndex(res);
})

app.get('/posts/new', function (req, res) {
  //res.end(JSON.stringify(posts[posts.length-1]));
  manejadorDeEventos.getUltimo(res);
});

app.get('/posts/:id', function (req, res) {
  var idReq = req.params.id;

  res.end(JSON.stringify(posts[idReq]));
});

app.delete('/posts/:id', function (req, res) {
  res.end(JSON.stringify(posts[id]));
});

app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/public/testapi.html" );
});


app.get("/consulta",function(req,res){
  connection.query('SELECT * from Cliente LIMIT 2', function(err, rows, fields) {
    connection.end();
    if (!err)
      res.end(JSON.stringify(rows));
    else
      console.log('Error while performing Query.');
  });
});


app.get('/recibir_datos', function (req, res) {
   datos = {
      noticia:req.query.noticia,
      titulo:req.query.titulo
   };
   id++;

   posts[id] = datos;
   res.end(JSON.stringify(posts));
})


app.get('/posts', function (req, res) {
  res.end(JSON.stringify(posts));
})


var server = app.listen(process.env.PORT || 3000, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})


server.listen(process.env.PORT || 3000);
