var time;

time = new Date();
time = time.getHours();
alert(time);

if (time < 7){
  alert("Take the bus");
} else {
  alert("Take the train")
}