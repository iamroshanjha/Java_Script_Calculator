$(document).ready(function() 
{
  var str="";
  
  $("#zero").click(function()
    {
      if(str=="0")
        {
          str="0"
        }
      else
        str=str.concat("0");
      $("#input").text(str);
    $("#answer").text(0);

    });
  $("#one").click(function()
    {
      if(str=="0")
        {
          str="1";
        }
      else
        str=str.concat("1");
      $("#input").text(str);
    $("#answer").text(1);

    });
  $("#two").click(function()
    {
      if(str=="0")
        {
          str="2"
        }
      else
        str=str.concat("2");
      $("#input").text(str);
    $("#answer").text(2);

    });
  
  $("#three").click(function()
    {
      if(str=="0")
        {
          str="3"
        }
      else
        str=str.concat("3");
      $("#input").text(str);
    $("#answer").text(3);

    });
  $("#four").click(function()
    {
      if(str=="0")
        {
          str="4"
        }
      else
        str=str.concat("4");
      $("#input").text(str);
    $("#answer").text(4);

    });
  $("#five").click(function()
    {
      if(str=="0")
        {
          str="5"
        }
      else
        str=str.concat("5");
      $("#input").text(str);
    $("#answer").text(5);

    });
  $("#six").click(function()
    {
      if(str=="0")
        {
          str="6"
        }
      else
        str=str.concat("6");
      $("#input").text(str);
    $("#answer").text(6);

    });
  $("#seven").click(function()
    {
      if(str=="0")
        {
          str="7"
        }
      else
        str=str.concat("7");
      $("#input").text(str);
    $("#answer").text(7);

    });
  $("#eight").click(function()
    {
      if(str=="0")
        {
          str="8"
        }
      else
        str=str.concat("8");
      $("#input").text(str);
    $("#answer").text(8);

    });
  $("#nine").click(function()
    {
      if(str=="0")
        {
          str="9"
        }
      else
        str=str.concat("9");
      $("#input").text(str);
    $("#answer").text(9);

    });
  
  $("#dot").click(function()
    {
      str=str.concat(".");
      $("#input").text(str);
    $("#answer").text('.');

    });
  
  $("#add").click(function()
    {
      if(str.charAt(str.length-1)=="+" || str.charAt(str.length-1)=="-" || str.charAt(str.length-1)=="*" || str.charAt(str.length-1)=="/" )
        {
          console.log("Error");
        }
      else
        str=str.concat("+");
      $("#input").text(str);
    $("#answer").text('+');

    });
  $("#sub").click(function()
    {
      if(str.charAt(str.length-1)=="+" || str.charAt(str.length-1)=="-" || str.charAt(str.length-1)=="*" || str.charAt(str.length-1)=="/" )
        {
          console.log("Error");
        }
      else
        str=str.concat("-");
      $("#input").text(str);
    $("#answer").text('-');

    });
  $("#multiply").click(function()
    {
      if(str.charAt(str.length-1)=="+" || str.charAt(str.length-1)=="-" || str.charAt(str.length-1)=="*" || str.charAt(str.length-1)=="/" )
        {
          console.log("Error");
        }
      else
        str=str.concat("*");
      $("#input").text(str);
    $("#answer").text('*');

    });
  $("#divide").click(function()
    {
      if(str.charAt(str.length-1)=="+" || str.charAt(str.length-1)=="-" || str.charAt(str.length-1)=="*" || str.charAt(str.length-1)=="/" )
        {
          console.log("Error");
        }
      else
        str=str.concat("/");
      $("#input").text(str);
    $("#answer").text('/');

    });
    
  $("#ac").click(function()
    {
      str="0";
      $("#answer").text(str);
      $("#input").text(str);
    });
  $("#ce").click(function()
    {
      str=str.slice(0,-1);
      $("#input").text(str);

    });
  
  
  $("#equal").click(function()
    {
      $("#answer").text(eval(str));
       str=str.concat("= "+eval(str));
    $("#input").text(str);
      console.log(eval(str));
      //str="";
    });
  

});