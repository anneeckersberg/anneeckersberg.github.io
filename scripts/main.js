var imageSources = ["Broomasiceskaterlowroombroom.jpg", "Broomasiceskaterlowroomcinecitta.jpg"]

var index = 0;
window.setInterval(function(){
  if (index === imageSources.length) {
    index = 0;
  }
  document.getElementById("first-image").src = imageSources[index];
  index++;
} , 5000);
