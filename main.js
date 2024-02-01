song1 = "";
song2 = "";
leftWristx=0;
leftWristy=0;
rightWristx=0;
rightWristy=0;


function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    
    posenet = ml5.poseNet(video, modelloaded);
    psoenet.on("pose", gotpose);
}

function modelloaded(){
    console.log("posenet is initiazied");
}

function gotpose(results){
    if(results.length > 0){
        console.log(results);

        leftWristx = results[0].pose.leftWrist.x;
        leftWristy = results[0].pose.leftWrist.y;

        console.log("LeftWristX = "+ leftWristx +" LeftWristy = "+ leftWristy);

        rightWristx = results[0].pose.rightWrist.x;
        rightWristy = results[0].pose.rightWrist.y;

        console.log("RightWristx = "+ rightWristx +" RightWristy = "+ rightWristy);
    }
}

function draw(){
   image(video, 0, 0, 600, 500);
}

function preload(){
    song1 = createCapture("music.mp3");
    song2 = createCapture("music2.mp3");
}

