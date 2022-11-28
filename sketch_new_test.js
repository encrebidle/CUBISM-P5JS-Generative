var s1 = function (sketch) {
    let h = 600
    let w = 600
    let headwidth;
    let eyex;
    let eyey;
    let moutx;
    let nose;
    var onOff;
    quad1 = []
    quad2 = []
    shape1 = []
    shape2 = []
    shape3 = []
    shape4 = []
    shape5 = []
    arc1 = []
    nose1 = []
    nose2 = []
    sketch.setup = function () {
        let canvas1 = sketch.createCanvas(600, 600, sketch.WEBGL);
        canvas1.position(0, 0);
        rancoords()
    }
    sketch.draw = function () {
        //for canvas 1
        background(220);
        //fill(92,52,40)
        //brown background
        if (onOff == true) {
            translate(random(-.5, .5), random(-.5, .5));
        }//noStroke()
        //add morse code for each art piece 
        //random variable on x and y)
        //stroke(0)
        strokeWeight(5)
        //line(1,0,4,5);
        //rect(0, 0, 55, 55);
        //rotate(PI/2)

        beginShape();
        //fill(0);
        vertex(shape5[0], shape5[1])
        vertex(shape5[2], shape5[3])
        vertex(shape5[4], shape5[5])
        vertex(shape5[6], shape5[7])
        vertex(shape5[8], shape5[9])
        vertex(shape5[10], shape5[11])
        vertex(shape5[12], shape5[13])
        vertex(shape5[14], shape5[15])

        endShape(CLOSE)
        //fill(0);
        quad(quad1[0], quad1[1], quad1[2], quad1[3], quad1[4], quad1[5], quad1[6], quad1[7])
        quad(quad2[0], quad2[1], quad2[2], quad2[3], quad2[4], quad2[5], quad2[6], quad2[7])
        fill(green(255))

        //quad(270, 150, 270,300, 100, 180, 120,150)
        //triangle(273,39,420,30,273,60)


        beginShape();
        vertex(shape1[0], shape1[1])
        vertex(shape1[2], shape1[3])
        vertex(shape1[4], shape1[5])
        vertex(shape1[6], shape1[7])
        vertex(shape1[8], shape1[9])
        vertex(shape1[10], shape1[11])
        vertex(shape1[12], shape1[13])
        endShape(CLOSE)


        beginShape();
        vertex(shape2[0], shape2[1])
        vertex(shape2[2], shape2[3])
        vertex(shape2[4], shape2[5])
        vertex(shape2[6], shape2[7])
        vertex(shape2[8], shape2[9])
        vertex(shape2[10], shape2[11])
        vertex(shape2[12], shape2[13])

        endShape(CLOSE)

        beginShape();
        vertex(shape3[0], shape3[1])
        vertex(shape3[2], shape3[3])
        vertex(shape3[4], shape3[5])
        vertex(shape3[6], shape3[7])
        vertex(shape3[8], shape3[9])

        endShape(CLOSE)

        endShape(CLOSE)

        beginShape();
        vertex(shape4[0], shape4[1])
        vertex(shape4[2], shape4[3])
        vertex(shape4[4], shape4[5])
        vertex(shape4[6], shape4[7])
        vertex(shape4[8], shape4[9])

        endShape(CLOSE)

        beginShape();
        vertex(nose1[0], nose1[1])
        vertex(nose1[2], nose1[3])
        vertex(nose1[4], nose1[5])
        vertex(nose1[6], nose1[7])


        //vertex(, )
        endShape(CLOSE)
        beginShape();

        vertex(nose2[0], nose2[1])
        vertex(nose2[2], nose2[3])
        vertex(nose2[4], nose2[5])


        //vertex(, )
        endShape(CLOSE)

        arc(arc1[0], arc1[1], arc1[2], arc1[3], 0, PI, arc1[4]);
        translate(180, 200)
        beginShape();
        vertex(-80, 0);
        bezierVertex(-30, -50, 30, -50, 80, 0);
        bezierVertex(30, 50, -30, 50, -80, 0)
        endShape();

        ellipse(0, 0, 50, 50);
        ellipse(0, 0, 30, 30);

        beginShape();
        //yellow eye
        //fill(236,220,133);
        ellipse(170, 20, 100, 100);
        //ellipse(170,15,100,30);
        arc(175, 10, 70, 30, 0, PI, OPEN);


        triangle(110, 5, 150, -30, 230, 22)
        //translate(170, 20);
        //rotate(frameCount / 200.0);

        //polygon(00, 00, 40, 5);
        //arc(170, 20, 80, 80, 0, PI +PI/2, PIE);
        //pop()
        //fill(0);

        endShape(CLOSE)
        //star(170, 35, 15, 10, 5);


        //eyes right 
        beginShape();
        //yellow eye
        //fill(236,220,133);
        ellipse(99, 99, 36, 36);
        //fill(0);
        ellipse(99, 99, 10, 10);
        endShape(CLOSE)
        //rect(50, 50, 50, 50, 10)
        /*
         push();
        translate(100, -50);
        rotate(frameCount / 200.0);
       
        polygon(00, 00, 50, 3);
        pop();*/








    }
    function rancoords(){
        //original drawn coords
        //nose
     /*   
      beginShape();
      vertex(250, 100)
      vertex(290,120 )
      vertex(280,300 )
      vertex(250, 200)
    */
      nose1[0] = random(230, 250)
      nose1[1] = random(90, 110)
      nose1[2] = random(285, 298 )
      nose1[3] = random(110, 135)
      nose1[4] = random(270, 290)
      nose1[5] = random(290, 310)
      nose1[6] = random(240, 260)
      nose1[7] = random(190,210 )
      
    /*
      //vertex(, )
      endShape(CLOSE)
      beginShape();
      
      vertex(250, 200)
      vertex(230,300)
      vertex(280, 307)
      
    
      //vertex(, )
      endShape(CLOSE)
    */
      nose2[0] = nose1[6]
      nose2[1] = nose1[7]
      nose2[2] = random(180,230 )
      nose2[3] = random(280,310 )
      nose2[4] = nose1[4]
      nose2[5] = nose1[5]
    
    
    
        //shape5 body
        shape5[0]= random(225,265)
        shape5[1]= random(150,150)
        shape5[2]= random(275, 290)
        shape5[3]= random(150,150)
        shape5[4]= random(340,400)
        shape5[5]= random(520,498)
        shape5[6]= random(500,560)
        shape5[7]= random(480,490)
        shape5[8]= random(624,624)
        //shape5[9]= random(460,470)
        shape5[9]= random(600,600)
        shape5[10]= random(15,15)
        shape5[11]= random(624,624)
        shape5[12]= random(10, 30)
        shape5[13]= random(500,600)
        shape5[14]= shape5[0]
        shape5[15]= shape5[13]
        //quad(400, 20, 270, 150, 60, 150, 60, 105)
       //quad(270, 150, 270,300, 100, 180, 120,150)
       //shape1_quad
       quad1[0] = random(380, 410)
       quad1[1] = random(18, 22)
       quad1[2] = 270
       quad1[3] = random(160, 150)
       quad1[4] = random(50, 70)
       quad1[5] = random(145, 154)
       quad1[6] = quad1[4]
       quad1[7] = random(100, 110)
    //shape2quad
    quad2[0] = 270
    quad2[1] = random(140, 150)
    quad2[2] = 270
    quad2[3] = random(280, 310)
    quad2[4] = random(80, 110)
    quad2[5] = random(170, 190)
    quad2[6] = random(50, 110)
    quad2[7] = quad1[5]
    //beginshape_coord _random 
    /*
    beginShape();
    vertex(270, 150)
    vertex(310, 70)
    vertex(380, 100)
    vertex(340, 180)
    vertex(410, 160)
    vertex(450, 210)
    vertex(270, 300)
    endShape(CLOSE)
    */
    shape1[0] = random(260, 270)
    shape1[1] = random(140,150 )
    shape1[2] = random(290,320 )
    shape1[3] = random(60,85 )
    shape1[4] = random(350, 390)
    shape1[5] = random(80,110 )
    shape1[6] = random(330, 350)
    shape1[7] = random(160, 190)
    shape1[8] = random(400, 420)
    shape1[9] = random(140,170 )
    shape1[10] = random(420, 460)
    shape1[11] = random(190,225 )
    shape1[12] = 270
    shape1[13] = random(300,400 )
    
    /*
    beginShape();
    vertex(270, 250)
    vertex(130, 250)
    vertex(140, 350)
    vertex(200, 350)
    vertex(200, 420)
    vertex(270, 420)
    
    endShape(CLOSE)*/
    shape2[0] = random(270,280)
    shape2[1] = random(240,260)
    shape2[2] = random(110,130)
    shape2[3] = random(230,250)
    shape2[4] = random(110,150)
    shape2[5] = random(300,350)
    shape2[6] = random(180,210)
    shape2[7] = random(300,350)
    shape2[8] = random(190,210)
    shape2[9] = random(430,430)
    shape2[10] = 270
    shape2[11] = shape2[9]
    /*
    beginShape();
    vertex(270, 250)
    vertex(330, 250)
    vertex(470, 350)
    vertex(370, 420)
    vertex(250, 350)
    
    
    endShape(CLOSE)*/
    shape3[0] = 270
    shape3[1] = random(230,255)
    shape3[2] = random(310,350)
    shape3[3] = random(230,260)
    shape3[4] = random(450,480)
    shape3[5] = random(325,360)
    shape3[6] = random(350,370)
    shape3[7] = random(420,430)
    shape3[8] = random(250,270)
    shape3[9] = random(350,420)
    
    /*
    endShape(CLOSE)
    
    beginShape();
    vertex(180, 430)
    vertex(390, 430)
    vertex(330, 350)
    vertex(285, 410)
    vertex(225, 350)
    */
    shape4[0] = random(170,180 )
    shape4[1] = random(400,440 )
    shape4[2] = random(360,399 )
    shape4[3] = random(410,438 )
    shape4[4] = random(310,340 )
    shape4[5] = random(320,360 )
    shape4[6] = random(275,290 )
    shape4[7] = random(400,420 )
    shape4[8] = random(225,225 )
    shape4[9] = random(350,350 )
    
    //arc(285, 430, 212, 105, 0, PI, OPEN);
    
    arc1[0] = random(275,285)
    arc1[1] = random(420,430)
    arc1[2] = random(200,220)
    arc1[3] = random(80,115)
    arc1[4] = random([OPEN,CHORD])
       
    }
    
    function polygon(x, y, radius, npoints) {
        let angle = TWO_PI / npoints;
        beginShape();
        for (let a = 0; a < TWO_PI; a += angle) {
          let sx = x + cos(a) * radius;
          let sy = y + sin(a) * radius;
          vertex(sx, sy);
        }
        endShape(CLOSE);
      }
      
    function mousePressed(){
        if(onOff==true){
            onOff=false;
        }else{
            onOff=true;
        }
    }
    function star(x, y, radius1, radius2, npoints) {
        let angle = TWO_PI / npoints;
        let halfAngle = angle / 2.0;
        beginShape();
        for (let a = 0; a < TWO_PI; a += angle) {
          let sx = x + cos(a) * radius2;
          let sy = y + sin(a) * radius2;
          vertex(sx, sy);
          sx = x + cos(a + halfAngle) * radius1;
          sy = y + sin(a + halfAngle) * radius1;
          vertex(sx, sy);
        }
        endShape(CLOSE);
      }
     
};

// create a new instance of p5 and pass in the function for sketch 1
new p5(s1);

