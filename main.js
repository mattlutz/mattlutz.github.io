
//functions handling topping selector buttons
      function GetTopping1(){
                var e = document.getElementById("topping1");
                var result1 = e.options[e.selectedIndex].text;
                
                document.getElementById("result1").innerHTML = result1;
            }

      function GetTopping2(){
                var e = document.getElementById("topping2");
                var result2 = e.options[e.selectedIndex].text;
                
                document.getElementById("result2").innerHTML = result2;
            }

      function GetTopping3(){
                var e = document.getElementById("topping3");
                var result3 = e.options[e.selectedIndex].text;
                
                document.getElementById("result3").innerHTML = result3;
            }

      function GetSauce(){
                var e = document.getElementById("sauce");
                var result4 = e.options[e.selectedIndex].text;
                
                document.getElementById("result4").innerHTML = result4;
            }

//function handling Show Previous SOD button (currently a toggle)
function showPrev() {
  var x = document.getElementById("prevSOD");
  if (x.style.display === "none") {
    x.style.display = "inline-table";
  } else {
    x.style.display = "none";
  }
}
    
//      FUTURE FUNCTION
//      function SetToppings(){
//          var e = document.getElementById
//      }