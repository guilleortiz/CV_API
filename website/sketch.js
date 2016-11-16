function setup() {
	createCanvas(400,400);
	background(51);

	var button =select('#submit');
	button.mousePressed(submitWord);

	function submitWord () {
		

		loadJSON('/all',gotData);
	}

	
	function gotData (data) {
		console.log(data);
		//var keys=Object.keys(data);
		/*for(var k in data) {
		   console.log(k, data[k]);
		   fill(255);
			textSize(25);
			var x=random(width);
			var y= random(height);
			text(k,x,y);
		}
		*/
		/*for(var i=0; i<data.length;i++){
			var word=keys[i];
			var score=data[word];
			console.log("word= "+word+"score= "+score);
			
			fill(255);
			textSize(64);
			text(word,50,50);

		}*/
	}

	 console.log("runnig");
}

function draw() {
	
}