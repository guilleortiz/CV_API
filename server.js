var fs= require('fs');
var data=fs.readFileSync('cv.json');//syncronous hasta que no termine no haga otra cosa al cargar el server es interesante que hasta q no arraque y cargue no haga nada mas
var cv=JSON.parse(data);

//console.log(cv);

console.log("server is starting...");

var express=require('express');//import
var port = process.env.PORT || 3000;

var app=express();//ejetupo express y ya tengo la web app
var server=app.listen(port,listening);//lisen for incoming conextions


function listening(){

	console.log("listening in port "+port);

}

app.use(express.static('website'));//to have static files





//----------cv  ------------------------

app.get('/cv',sendAll);

function sendAll(request,response){
	var cvFormat=JSON.stringify(cv, null, 4); 
	response.send(cv); 

}
//----------END  ------------------------



