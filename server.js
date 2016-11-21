var fs= require('fs');
var data=fs.readFileSync('cv.json');//syncronous hasta que no termine no haa otra coas al cargar el server es interesante quehasta q no arraque y cargue no haga nada mas
var cv=JSON.parse(data);

console.log(cv);

console.log("server is starting...");

var express=require('express');//import
var port = process.env.PORT || 3000;

var app=express();//ejetupo express y ya tengo la web app
var server=app.listen(port,listening);//lisen por incoming conextions


function listening(){

	console.log("listening in port "+port);

}

app.use(express.static('website'));//to have static files





//----------GET REQUEST 2------------------------

app.get('/all',sendAll);

function sendAll(request,response){
	response.send(cv); 

}
//----------END GET REQUEST 2------------------------



