img="";
Status="";
objects=[];
function setup(){
    canvas=createCanvas(840, 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded");
    Status=true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if(error){
        console.log(error);
    }    
    console.log(results)
    objects=results;
}

function preload(){
    img=loadImage('Cars.jpg');
}

function draw(){
    image(img, 0, 0, 840, 420);
    if(Status != ""){
        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML="Status: Object Detected";

            fill("#FF0000");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label + " " + percent + "%", objects[i].x/2, objects[i].y/2);
            noFill();
            stroke('#FF0000');
            rect(objects[i].x/2, objects[i].y/2, objects[i].width/2, objects[i].height/2);
            document.getElementById("identified_Objects").innerHTML=objects.length
        }
    }
    
}