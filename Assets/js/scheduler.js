$(document).ready(function() {
  var currentDayEl = $('#currentDay');

  function displayDay() {
    var today = dayjs().format('dddd, MMM DD');
    currentDayEl.text(today);
  }

  displayDay(); // call to display the date

  $('.saveBtn').click(function() { //any element with the class saveBtn is clicked, the function inside the click method will be executed.
    const parentBlock = $(this).closest('.time-block'); // to find ".time-block" near SAVE
    const hourId = parentBlock.attr('id').replace('hour-', ''); // Extract numeric part
    const textArea = parentBlock.find('textarea'); //finds the textarea element within the parentBlock
    const textValue = textArea.val().trim();
  
    if (textValue !== '') {  //is not an empty string
        localStorage.setItem(hourId, textValue); //to store the textValue with the key hourId 
    } else { //is empty
        localStorage.removeItem(hourId); //remove any existing data associated with the key hourId 
    }
  });

    // Load stored data when the page loads
  $('.time-block').each(function() {
    const hourId = parseInt($(this).attr('id').replace('hour-', ''), 10); // Convert to number
    const savedText = localStorage.getItem(hourId);
      
    if (savedText) {
      $(this).find('textarea').val(savedText);
    }

    var now = parseInt(dayjs().format('H'), 10); // Convert to number
    var rowEl = $(this);

    function blockColour() {
      rowEl.removeClass('past present future'); // delet all pre-implanted class

      if (hourId < now) { // lesser than now
          rowEl.addClass('past');
        } else if (hourId == now) {
          rowEl.addClass('present'); // same as now
        } else {
          rowEl.addClass('future'); // bigger than now
        }
      }

      blockColour(); // Call the function to apply color initially
  });
});