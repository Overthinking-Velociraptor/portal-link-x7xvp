const clock = () => {
    var date    = new Date();
    var hours   = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var midday;
  
    hours     = updateTime(hours);
    minutes   = updateTime(minutes);
    seconds   = updateTime(seconds);
    var name  = "Students";
  
    // if else condition
  
    midday = (hours >= 12) ? "PM" : "AM";
  
    document.getElementById("clock").innerHTML =
      ""+hours+"" + ":" + ""+minutes+"" + ":" + ""+seconds+"" + ""+midday+"";
  
    var time = setTimeout(function () {
      clock();
    }, 1000);
  
    //   Good Morning and Good Night Conditions
  
    if (hours < 12) {
      var greeting = "Good Morning " + name + " selamat belajar, God bless us. Don't forget to check the announcement!";
    }
  
    if (hours >= 12 && hours <= 18) {
      var greeting = "Good Afternoon " + name + " Never forget to finish your assignements";
    }
  
    if (hours >= 18 && hours <= 24) {
      var greeting = "Good Evening " + name + " before you go to sleep, better check the announcement if it's available";
    }
  
    document.getElementById("greetings").innerHTML = greeting;
  }
  
  const updateTime = (k) => {
    if (k < 10) {
      return "0" + k;
    } else {
      return k;
    }
  }
  
  // call clock function 
  clock();