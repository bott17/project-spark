


function Spark (){
	
	console.log("ensemble...");
	this.audioComponent = new AudioComponent();
	
}



function AudioComponent(){
	
	console.log("audio...");
	this.recognizing = false;
	this.recognition;
}


Spark.prototype.sayHello = function (){
	console.log("hello world :D");
};
