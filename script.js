
$(function () {
  var Today = dayjs();
$('#currentDay').text(Today.format('MMM D, YYYY'));  
})
    for (let i = 9; i < 18; i++) {
      if (hour > i) {
        document.getElementById('h-' + i).classList.add('past');
      } else if (hour == i) {
        document.getElementById('h-' + i).classList.add('present');
      } else {
        document.getElementById('h-' + i).classList.add('future');
      }
    };
    
    var hour = dayjs().format('H');