var count = 0;
var input = document.getElementById("count");
  function plus(){
    count++;
    input.value = count;
  }
  function minus(){
    if (count > 1) {
        count--;
        input.value = count;
      }  
    }