 image1 ="";
image2 ="";
image3 = "";
image4 = "";
image5 = "";
status = "";

function preload(){
image1 = loadImage("Fridge.jpg");
image2 = loadImage("Heater.jpg");
image3 = loadImage("Oven.jpg");
image4 = loadImage("Rice Cooker.jpg");
image5 = loadImage("Tv.jpg");
 }

 function setup() {
     canvas = createCanvas(380, 380);
     canvas.center();
     objectDetector = ml5.objectDetector('cocossd', modelLoaded);
 }

 function modelLoaded() {
     console.log("Model Loaded")
     status = true;
     objectDetector.detect(video, gotResult);
 }
 function gotResult(error, results) {
    
     
 }

 function draw() {
     image(img, 0,0, 600, 580);


     if(status != "")
     {

        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video, gotResult);
        for (i = 0; i <object.length; i++)
        {
            document.getElementById("status").innerHTML= "status : Object Has Been Detected";
            document.getElementById("image1").innerHTML = "Image 1 is..... : "+ objects.length;

            fill(r, g, b);
            percent = floor(object[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke(r,g,b);
            Reflect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
     }
 }