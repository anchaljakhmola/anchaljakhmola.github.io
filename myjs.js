function toggle(class_name, id, close_nav='true'){
    // console.log(window.name);
    if(class_name == "we_call"){
        window.name = id;
    }
    var tabs = document.getElementsByClassName(class_name);
    for(i=0; i<tabs.length; i++){
        tabs[i].style.display = "none";
    }
    var tab = document.getElementById(id).style.display = "block";

    if(class_name == "we_call" && $(window).width() < 758 && close_nav == 'true'){
        document.getElementById("nav_toggler").click();
    }
}

function displayClock(){
 // var display = new Date().toLocaleTimeString();
  var x = new Date()
 //var split = new Date().toString().split(" ");
 //var timeZoneFormatted = split[split.length - 2] + " " + split[split.length - 1];
//var x1=x.toUTCString();
  document.getElementById("demo").innerHTML = x; 
  setTimeout(displayClock, 970); 
}
