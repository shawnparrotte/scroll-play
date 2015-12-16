$(document).ready(function(){
  $(".content-box").css("height", "100vh");
  $(".shadow-box").css("height", "100vh");
  $(".content-box").css("width", "100vw");
  $(".shadow-box").css("width", "100vw");
})

//the main draw function
var draw = setInterval(function(){


  //set a variable for the total height of the site
  var totalWindowHeight = $(window).height() * 5;
  //set wrapper height
  $("#wrapper").css("height", totalWindowHeight);


  //*** 1st box ***
  if( $(window).scrollTop() < $(window).height() ) {

    //resets top parameters
    $("#box1").css("top", 0);
    $("#box2").css("top", 0);
    $("#box3").css("top", 0);
    $("#box4").css("top", 0);
    $("#box5").css("top", 0);

    //reset tranform parameters
    $("#box2").css("transform", "translate(0px,0px)");
    $("#box3").css("transform", "translate(0px,0px)");
    $("#box4").css("transform", "translate(0px,0px)");
    $("#box5").css("transform", "translate(0px,0px)");

    //variable to translate y
    var box1move = "translate(0px,-" + $(window).scrollTop() + "px)";
    //transform box1 up and out!
    $("#box1").css("transform", box1move);

  }

  //*** 2nd box *** inbetween window height and window height x 2
  if( $(window).scrollTop() >= $(window).height() && $(window).scrollTop() < ($(window).height() * 2) ) {

    //resets top parameters
    $("#box2").css("top", 0);
    $("#box3").css("top", 0);
    $("#box4").css("top", 0);
    $("#box5").css("top", 0);

    //reset tranform parameters
    $("#box3").css("transform", "translate(0px,0px)");
    $("#box4").css("transform", "translate(0px,0px)");
    $("#box5").css("transform", "translate(0px,0px)");

    //create variables for box2 transform
    var x = $(window).height(), y = $(window).scrollTop() - x;

    //create complex variable for transform function
    var box2move = "translate(0px,-" + y + "px)";
    //add back later
    //var shadow2move = "translate(0px,-" + ($(window).scrollTop() - $(window).height()) + "px)"

    //create variable for moving top parameter for box1
    var box1out = -($(window).height() + 20);
    //kick it out of the top (removes artifacts)
    $("#box1").css("top", box1out);

    //transform box2 up and out!
    $("#box2").css("transform", box2move);
    //$("#shadow2").css("transform", shadow2move)

  }

  //*** 3rd box *** inbetween window height x 2 and window height x 3
  if( $(window).scrollTop() >= ($(window).height() * 2) && $(window).scrollTop() < ($(window).height() * 3) ) {

    //resets top parameters
    $("#box3").css("top", 0);
    $("#box4").css("top", 0);
    $("#box5").css("top", 0);

    //reset tranform parameters
    $("#box4").css("transform", "translate(0px,0px)");
    $("#box5").css("transform", "translate(0px,0px)");

    //create variables for box3 transform
    var x = $(window).height() * 2, y = $(window).scrollTop() - x;

    //create complex variable for transform function
    var box3move = "translate(0px,-" + y + "px)";
    //add back later
    //var shadow2move = "translate(0px,-" + ($(window).scrollTop() - $(window).height()) + "px)"

    //create variable for moving top parameter for box2
    var box2out = -($(window).height() + 20);
    //kick it out of the top (removes artifacts)
    $("#box2").css("top", box2out);

    //transform box3 up and out!
    $("#box3").css("transform", box3move);
    //$("#shadow2").css("transform", shadow2move)

  }

  //*** 4th box *** inbetween window height x 3 and window height x 4
  if( $(window).scrollTop() >= ($(window).height() * 3) && $(window).scrollTop() < ($(window).height() * 4) ) {

    //resets top parameters
    $("#box4").css("top", 0);
    $("#box5").css("top", 0);

    //reset tranform parameters
    $("#box5").css("transform", "translate(0px,0px)");

    //create variables for box4 transform
    var x = $(window).height() * 3, y = $(window).scrollTop() - x;

    //create complex variable for transform function
    var box4move = "translate(0px,-" + y + "px)";
    //add back later
    //var shadow2move = "translate(0px,-" + ($(window).scrollTop() - $(window).height()) + "px)"

    //create variable for moving top parameter for box3
    var box3out = -($(window).height() + 20);
    //kick it out of the top (removes artifacts)
    $("#box3").css("top", box3out);

    //transform box4 up and out!
    $("#box4").css("transform", box4move);
    //$("#shadow2").css("transform", shadow2move)

  }

  //*** 5th box *** greater than window height x 4
  if( $(window).scrollTop() >= ($(window).height() * 4) )  {

    //create variable for moving top parameter for box4
    var box3out = -($(window).height() + 20);
    //kick it out of the top (removes artifacts)
    $("#box4").css("top", box3out);

  }

}, 10)
