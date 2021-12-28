noseX = 0;
noseY = 0;
right_eyeX = 0;
right_eyeY = 0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
    clown_hat = loadImage('https://i.postimg.cc/SKz77qpn/clown-hat-removebg-preview.png');
}

function setup() {
    canvas = createCanvas(600, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(600, 600);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        noseX = results[0].pose.nose.x - 15;
        noseY = results[0].pose.nose.y - 15;
        right_eyeX = results[0].pose.rightEye.x - 100;
        right_eyeY = results[0].pose.rightEye.y - 200;
    }
}

function draw() {
    image(video, 0, 0, 600, 400);
    image(x, noseX, noseY, 30, 30);
    image(y, right_eyeX, right_eyeY, 200, 200);
}

function take_snapshot() {
    save('myFilterImage.png');
}
function a(){
    y=clown_hat
}
function b(){
    x=clown_nose;
}