var x,y,z
var t1="no"
var t2="no"
var t3="no"
var bg
function preload(){
bg=loadImage("background.jpg")
}
function setup(){
  var s=new p5.Speech();
  s.speak("No need to write in capital writting ")
  
}
function draw(){
  document.body.style.backgroundImage="url('https://wallpapercave.com/wp/wp4363424.jpg')"
  document.body.style.backgroundSize="1700px,1900px"
  x= document.getElementById("an1").value;
  y= document.getElementById("an2").value;
  z=document.getElementById("3").value;
 // var z= document.getElementById("").value;
 //console.log(r)
 if(x==="ISTOUCHING"||x==="istouching"){
  document.getElementById("result").innerHTML="Correct answer!!"
  t1="yes"
  
}
else if(x===""){
  document.getElementById("result").innerHTML="Enter something to check"
}
else{
  document.getElementById("result").innerHTML="ENTER SOMETHING ELSE..."
}
//level 2 answer check
if(y==="DEVELOPER TOOLS"||y==="developer tools"){
  document.getElementById("result2").innerHTML="Correct answer!!"
  t2="yes"
  
}
else if(y===""){
  document.getElementById("result2").innerHTML="Enter something to check"
}
else{
  document.getElementById("result2").innerHTML="TRY AGAIN!!"
}
//Question-3
if(z===""){
  document.getElementById("r3").innerHTML="GO AHEAD AND START TRYING"
}
else if(z==="RESTITUTION"||z==="restitution"){
  document.getElementById("r3").innerHTML="Correct Answer";
  t3="yes";
}
else{
  document.getElementById("r3").innerHTML="NO,Try Again"
}
if(t1==="yes"&&t2==="yes"&&t3==="yes"){
  console.log("Treasure unlocked!!!")
  document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1586974710160-55f48f417990?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJlYXN1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80')"
  document.getElementById("1").style.display="none";
  document.getElementById("2").style.display="none";
  document.getElementById("3r").style.display="none";
  document.getElementById("information").innerHTML="<marquee>CONGRATULATIONS TREASURE UNLOCKED </marquee>"
}
}