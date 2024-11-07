let angle = 0;
let r = 255, g = 0, b = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
  rectMode(CENTER) //畫方形以中心點為座標
  noFill()  //方形內不填滿
  angleMode( DEGREES)  //設定角度的單位0-360
  //frameRate(10)

}
function draw() {
  background("#ffc8dd");  
  //translate(width/2,height/2) //把原點移到中心
  for(let y =0;y<height;y = y+120){
     for(let x=0;x<width;x = x+120){
    push()
      translate(x,y)//把原點放在滑鼠上
      stroke(255)   //線條顏色 
      strokeWeight(1)
      for(let i=0;i<10;i = i+1){
       let r =map(sin(frameCount),-1,1,50,255)
       let g =map(sin(frameCount/2),-1,1,50,255)
       let b =map(sin(frameCount/4),-1,1,50,255)
       stroke(r,g,b)
       rotate(angle)  //把物件旋轉10度，以原點(0.0)作基準點
       rect(0,0,100-i*3,100-i*3,20)  //畫一個方形，在視窗中間，寬高600
       angle = sin(frameCount)*(x/100*10)
      }
    pop()
    }
  }
    let rect_width = 50 + mouseX / 10;
    let bc_width = 50 + mouseX / 10;
    let sc_width = 25 + mouseX / 10;

    // 更新 RGB 顏色值
  r = (r + 1) % 256;
  g = (g + 2) % 256;
  b = (b + 3) % 256;

  // 設定文字顏色為中空且外框變色
  noFill();
  stroke(r, g, b);
  strokeWeight(8);

  textSize(150);
  textAlign(CENTER, CENTER);
  
  push();
  translate(width / 2, height / 2);
  rotate(angle);
  text('TKUET', 0, 0);
  pop();
  

  // 增加旋轉角度
  angle += 0.02;
  
  }



