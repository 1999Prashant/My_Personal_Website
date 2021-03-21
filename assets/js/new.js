function myfunction() {
    var x = document.getElementById("new");
    var y = document.getElementById("new1");
    if (x.style.visibility == "hidden") {
      x.style.visibility = "visible";
      y.style.visibility = "hidden";
      document.getElementById("body").style.backgroundColor="white";
      // document.getElementById("header").style.backgroundColor="white";
      document.getElementById("body").style.color="black";
      ['probox1','probox2','probox3'].forEach(function(id){
        document.getElementById(id).style.background="white";
      });
      ['text','text1','text2','insideText','insideText1','insideText2','insideText3','insideText4','insideText5','text12','project1','project2','project3','project_head'].forEach(function(id){
            document.getElementById(id).style.color="#45505b";
      });
      {
      var element=document.getElementById("hero");
  element.classList.toggle("hero");
  element.classList.remove("hero1");}
  contact(1);
  // document.getElementById("subhead").style.background="#f7f8f9";

    } else {
      x.style.visibility = "hidden";
      y.style.visibility = "visible";
      document.getElementById("body").style.backgroundColor="#282c34";
      // document.getElementById("header").style.backgroundColor="#282c34";
      ['probox1','probox2','probox3'].forEach(function(id){
        document.getElementById(id).style.background="black";
      });

      ['body','text','text1','text2','insideText','insideText1','insideText2','insideText3','insideText4','insideText5','text12','project1','project2','project3','project_head'].forEach(function(id){
        document.getElementById(id).style.color="white";
  });
  var element=document.getElementById("hero");
  element.classList.toggle("hero1");
  element.classList.remove("hero");

  contact(0);
    // document.getElementById("subhead").style.background="#343A49";

    }

  }

  function contact(x)
  {
if(x==1)
{
  console.log("Prashant");
  //   ['loc','locd','mail','maild','phone','phoned'].forEach(function(id){
  //     document.getElementById(id).style.color="white";
  //   });
  // }
  //   else{
  //     ['loc','locd','mail','maild','phone','phoned'].forEach(function(id){
  //       document.getElementById(id).style.color="#45505b";
  //     });
  
    }
  }