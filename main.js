song = "";
song2 = "";

function preload()
{
    song = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
   
}

rightwristX = 0;
rightwristY = 0;

leftwristX = 0;
leftwristY = 0;

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    rightwristX = results[0].pose.rightWrist.x;
    rightwristY = results[0].pose.rightWrist.y;
    console.log("rightWristX = " + rightwristX + "rightWristY = "+ rightwristY);

    leftwristX = results[0].pose.leftWrist.x;
    leftwristY = results[0].pose.leftWrist.y;
    console.log("leftWristX = " + leftwristX + "leftWristY = "+ leftwristY);

}

function draw(){
    image(video, 0, 0, 600, 500);
}


function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
