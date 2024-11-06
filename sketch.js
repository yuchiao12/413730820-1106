let font;  //載入字型文字
let points = [];  //轉成點狀文字
let angle =0
let r =20
//======================
function preload(){  //在執行setup()前，必須先做此函數執行，主要先載入字型
  //為載入在fonts資料夾內的Zeyada-Regular.ttf字型
  font = loadFont("fonts/NotoSansTC-VariableFont_wght.ttf") 
}
//============
function setup() { 
  createCanvas(windowWidth, windowHeight); //設定畫布寬高
  angleMode(DEGREES)//設定三角函數的角度0~360
  background("#fb6f92") //背景顏色
  //=======================
  points = font.textToPoints("CHIAO", -300, 80, 150, {
    sampleFactor:0.2
  }); for (let i=0; i<points.length-1; i++) {  
  } 

}

function draw() {   //每秒畫60次
  background("#fb6f92")
  rectMode(CENTER) //把方形座標放中間
  noFill() //以下畫的圖不要充滿顏色
  stroke("#000000") //線條顏色
  strokeWeight(3)  //線條粗細
  var rect_width=50 +mouseX/10 //方形的寬度
  var bc_width=50 +mouseY/10   //大圓的寬度
  var sc_width=25 +mouseX/100 //小圓的寬度
 for(let j=0;j<20;j=j+1) { 
  for(let i=0;i<40;i=i+1) {
  if(j<5){
    stroke("#800e13") 
  }else if(j<10){
    stroke("#800e13") 
  }else if(j<15){
    stroke("#800e13")
  }else if(j<20){
    stroke("#778da9")
  }

 ellipse(25+50*i,25+50*j, bc_width) //在座標(x:25,y:25)畫一個直徑50的圓
 rect(25+50*i,25+50*j,rect_width) //畫方形,在座標(x:25,y:25)畫一個直徑50的方形
 ellipse(50+50*i,50+50*j,sc_width)//畫小圓,直徑25
 }

}
translate(width/2,height/2)//把原本原點(0，0)在左上角，改到畫布中心點(width/2,height/2)
  rotate(frameCount%360) 
  for (let i=0; i<points.length-1; i++) {
    fill("#e63946")
    stroke("#111111") //線條的顏色
    strokeWeight(2) //線條的粗細
    line(points[i].x+r*sin(angle+i*10),points[i].y+r*sin(angle+i*10),points[i+1].x,points[i+1].y)
}
angle =angle+10
}