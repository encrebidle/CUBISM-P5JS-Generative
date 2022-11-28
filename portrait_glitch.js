function setup() {
    createCanvas(600, 600)
    background(0, 0, 0);
    
    }
    
    function draw() {
    // NECK
    stroke(4)
    stroke(255, 2014, 0)
    
    fill(201, 230, 250)
    rect(210, 330, 80, 100)
    
    // FOREHEAD
    noStroke()
    fill(212, 219, 235)
    ellipse(250, 245, 215, 260)
    
    fill(0, 0, 178)
    quad(230, 160, 230, 220, 160, 220, 200, 160)
    fill(0, 0, 125)
    quad(270, 160, 270, 220, 340, 220, 300, 160)
    fill(51, 92, 173)
    quad(230, 160, 270, 160, 280, 220, 220, 220)
    
    //AROUND THE EYES
    fill(0, 0, 125)
    quad(220, 220, 160, 240, 170, 280, 250, 250)
    fill(0, 0, 125)
    quad(280, 220, 340, 240, 330, 280, 250, 250)
    
    // EYEBROWS
    strokeWeight(2)
    stroke(255, 2014, 0)
    
    fill(77, 112, 219)
    arc(200, 230, 70, 40, PI, TWO_PI);
    arc(300, 230, 70, 40, PI, TWO_PI);
    
    //CHEEKS
    fill(194, 206, 230)
    quad(170, 280, 250, 250, 230, 320, 165, 340)
    fill(194, 206, 230)
    quad(330, 280, 250, 250, 270, 320, 330, 335)
    
    fill(0, 102, 255)
    triangle(240, 325, 165, 340, 235, 370)
    fill(0, 102, 255)
    triangle(260, 325, 330, 335, 265, 370)
    
    // NOSE
    fill(51, 92, 173)
    triangle(250, 220, 220, 320, 280, 320)
    
    fill(133, 157, 206)
    triangle(250, 240, 240, 300, 260, 300)
    fill(0, 0, 125)
    quad(240, 300, 235, 305, 235, 300, 242, 290)
    fill(0, 0, 125)
    quad(260, 300, 265, 305, 265, 300, 258, 290)
    
    // EYES
    fill(214, 222, 239)
    stroke(255, 201, 0)
    ellipse(210, 240, 50, 20);
    ellipse(290, 240, 50, 20);
    
    // INSIDE THE EYES
    strokeWeight(2)
    stroke(0, 51, 153)
    fill(102, 0, 204)
    ellipse(210, 240, 17, 20);
    strokeWeight(2)
    stroke(0, 51, 153)
    fill(102, 0, 204)
    ellipse(290, 240, 17, 20);
    
    //MOUTH
    fill(0, 0, 173)
    triangle(240, 315, 250, 320, 200, 320)
    fill(0, 0, 173)
    triangle(260, 315, 250, 320, 300, 320)
    quad(200, 323, 300, 323, 280, 330, 220, 330)
    
    //CHIN
    fill(0, 0, 175)
    ellipse(250, 360, 40, 35)
    
    //HAIR
    strokeWeight(3)
    stroke(255, 214, 0)
    noFill()
    ellipse(250, 120, 50, 40)
    ellipse(220, 100, 50, 40)
    ellipse(270, 130, 50, 40)
    ellipse(280, 115, 50, 40)
    ellipse(210, 115, 50, 40)
    ellipse(200, 122, 50, 40)
    ellipse(290, 122, 50, 40)
    ellipse(230, 122, 50, 40)
    ellipse(255, 112, 50, 40)
    
    //EARS
    noStroke()
    fill(133, 157, 206)
    triangle(142, 230, 130, 290, 155, 310)
    
    triangle(358, 230, 372, 290, 342, 310)
    
    }
    
    