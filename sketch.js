//INSPIRED BY "La Colonizacion del Espacio" de Carreño Antonio.

function setup () {
    //Dimensiones de la obra
    createCanvas(400, 500)
    //Color de fondo (0,255)
    background(70, 25, 112)
   
  ////////////////Lineas Espaciales
    noStroke();
    fill(218, 112, 214, 20)
  bezier(100, 0, 60, 150, 300, 50, 400, 300) 
  bezier(400, 150, 70, 300, 350, 400, 0, 500)
  bezier(470, 500, 360, 350, 100, 500, 0, 350)
    fill(106, 90, 205, 50)
  bezier(50, 0, 60, 150, 300, 50, 400, 250) 
  bezier(400, 100, 70, 300, 350, 400, 0, 470)
  bezier(400, 500, 360, 350, 100, 500, 0, 350)
   fill(199, 21, 133, 30);
  bezier(0, 0, 60, 150, 300, 50, 400, 400) 
  bezier(400, 125, 70, 300, 350, 400, 0, 500)
  bezier(300, 500, 360, 350, 100, 500, 0, 200)//////////////PLANETAS
  
  ///////////////////PUERTA
   fill(224, 250, 250)
  rect(50, 50, 125, 200);
   
  /////////////////PUERTA MARRON
  fill(160, 82, 45)
  quad(300, 20, 175, 50, 175, 250, 300, 280)
  
  ////////////////MANIJA
    fill(255, 255, 15)
  ellipse(280, 160, 12, 8)
    
  
  ///////////////////// NUBES
    fill(255);
  bezier(70, 180, 80, 200, 60, 210, 50, 200)  
  bezier(70, 180, 130, 150, 60, 100, 50, 160)
  bezier(130, 75, 120, 90, 70, 80, 105, 50)
  bezier(160, 50, 200, 80, 150, 100, 130, 75)
  bezier(150, 170, 100, 160, 80, 230, 175, 200)
  bezier(150, 170, 160, 120, 180, 120, 175, 200)
     
  ///////////////////Relleno de Nubes
  triangle(51, 160, 51, 200, 70, 180)
  triangle(105, 51, 135, 80, 160, 51)
    
  //////////////////Puntos / Estrellas
  fill(106, 90, 205)
    ellipse(250, 350, 8, 8)
    ellipse(150, 300, 8,8)
    ellipse(320, 100, 8, 8)
    ellipse(385, 180, 8, 8)
    ellipse(360, 450, 8, 8)
    ellipse(130, 30, 8, 8)
    ellipse(20, 350, 8, 8)
    ellipse(30, 200, 8, 8)
    ellipse(340, 400, 8, 8)
    ellipse(19, 25, 8, 8)
    ellipse(200, 280, 8, 8)
    ellipse(130, 480, 8, 8)
    ellipse(190, 390, 8, 8)
    ellipse(100, 350, 8, 8)
    ellipse(350, 300, 8, 8)
    ellipse(370, 30, 8, 8)
    ellipse(310, 480, 8, 8)
    
  fill(255)
    ellipse(250, 350, 5, 5)
    ellipse(150, 300, 5, 5)
    ellipse(320, 100, 5, 5)
    ellipse(385, 180, 5, 5)
    ellipse(360, 450, 5, 5)
    ellipse(130, 30, 5, 5)
    ellipse(20, 350, 5, 5)
    ellipse(30, 200, 5, 5)
    ellipse(340, 400, 5, 5)
    ellipse(19, 25, 5, 5)
    ellipse(200, 280, 5, 5)
    ellipse(130, 480, 5, 5)
    ellipse(190, 390, 5, 5)
    ellipse(100, 350, 5, 5)
    ellipse(350, 300, 5, 5)
    ellipse(370, 30, 5, 5)
    ellipse(310, 480, 5, 5)
    
  //////////////////SOMBRA
    fill(255, 255, 255, 60)
    quad(50,250, 0, 1000, 500, 550, 175, 250)
    
  //////////////PLANETAS
    noStroke();
    fill(255, 255, 0)
    ellipse(90, 490, 200, 200);
    fill(154, 205, 50, 70);
    bezier(43, 400, 50, 460, 200, 430, 190, 490)
    bezier(15, 420, 0, 490, 150, 380, 180, 600)
    fill(255, 69, 0, 150)
    ellipse(370, 350, 100,100);
    fill(255, 69, 0, 150)
    bezier(320, 365, 200, 430, 360, 400, 480, 295);
    fill(0, 0, 220, 30)
    ellipse(350, 20, 100,100)
    fill(0, 0, 205)
    ellipse(350, 20, 70, 70)
    
   
   
  }