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
    img=loadImage('Bottle.jpg');
}

function draw(){
    image(img, 0, 0, 840, 420);
    if(Status != ""){
        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML="Status: Object Detected";

            fill("#FF0000");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label + " " + percent + "%", objects[i].x-200, objects[i].y-100);
            noFill();
            stroke('#FF0000');
            rect(objects[i].x-200, objects[i].y-200, objects[i].width, objects[i].height);
            document.getElementById("identified_Objects").innerHTML=objects.length
        }
    }
    
}