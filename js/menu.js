var count = 0;
var countEl = document.getElementById("quantity");
function plus(){
    count++;
    countEl.value = count;
}
function minus(){
  if (count > 0) {
    count--;
    countEl.value = count;
  } 
}

// $(function() {

//     $("form div").append('<div><input type="button" class="plus-btn plusbtn btn"></div><input type="text" value="" id="count"><div><input type="button" class="minus-btn btn">');

// });

// $(".button").on("click", function() {

//   var $button = $(this);
//   var oldValue = $button.parent().find("input").val(0);

//   if ($button() == this ) {
// 	  var newVal = parseFloat(oldValue) + 1;
// 	} else {
//    // Don't allow decrementing below zero
//     if (oldValue > 0) {
//       var newVal = parseFloat(oldValue) - 1;
//     } else {
//       newVal = 0;
//     }
//   }

//   $button.parent().find("input").val(newVal);

// });

// var id = $button.attr("id");
// $.ajax({
//   type: "POST",
//   url: "dosomething.php?id=" + id + "&newvalue=" + newVal,
  // success: function() {
  //   $button.parent().find("input").val(newVal);
  
// });