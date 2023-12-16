song1="";
song2="";
leftWristX=0;
rightWristX=0;
leftWristY=0;
rightWristY=0;

function preload(){
    song1 = loadSound("M1.mp3");
    song2 = loadSound("M2.mp3");
}


function setup(){
canvas = createCanvas(600, 500);
canvas.center();


video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}


function gotPoses(results){
if(results.length >0){
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    leftWristY=results[0].pose.leftWrist.y;
    rightWristY=results[0].pose.rightWrist.y;
    console.log("leftWristX ="+ leftWristX);
    console.log("leftWristY ="+ leftWristY);
    console.log("rightWristX ="+ rightWristX);
    console.log("rightWrist Y="+ rightWristY);
}
}

function modelLoaded(){
console.log("PoseNet Is Intialized");

}

function draw(){
    image(video, 0, 0, 600, 500);
}

