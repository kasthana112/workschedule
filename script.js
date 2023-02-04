
$(function () {
  var Today = dayjs();
$('#currentDay').text(Today.format('MMM D, YYYY'));  
})

$ (".saveBtn").on("click",function(){
  var value = $(this).siblings("description").val();
  console.log(value);
  var time = $(this).parent().attr("id");
  var newTime = time.split("-")[1];

  localStorage.setItem(newTime, value);
});

var hour = dayjs().format('H');

    for (let i = 9; i < 18; i++) {
      if (hour > i) {
        document.getElementById('h-' + i).classList.add('past');
      } else if (hour == i) {
        document.getElementById('h-' + i).classList.add('present');
      } else {
        document.getElementById('h-' + i).classList.add('future');
      }
    };
    
$("#h-9 .description").val(localStorage.setItem("hour-9"));
$("#h-10 .description").val(localStorage.setItem("hour-10"));
$("#h-11 .description").val(localStorage.setItem("hour11"));
$("#h-12 .description").val(localStorage.setItem("hour-12"));
$("#h-13 .description").val(localStorage.setItem("hour-13"));
$("#h-14 .description").val(localStorage.setItem("hour-14"));
$("#h-15 .description").val(localStorage.setItem("hour-15"));
$("#h-16 .description").val(localStorage.setItem("hour-16"));
$("#h-17 .description").val(localStorage.setItem("hour-17"));
        
      exactTime(0);