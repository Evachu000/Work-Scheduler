// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

});

// TODO: Add code to display the current date in the header of the page.
var currentDayEl = $('#currentDay');

function displayDay() {
  var today = dayjs().format('dddd, MMM DD');
  currentDayEl.text(today);
}

displayDay();



// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

const saveButtons = document.querySelectorAll('.saveBtn');

$(document).ready(function() {
  $('.saveBtn').click(function() {
    const parentBlock = $(this).closest('.time-block');
    const hourId = parentBlock.attr('id').replace('hour-', ''); // Extract numeric part
    const textArea = parentBlock.find('textarea');
    const textValue = textArea.val().trim();

    if (textValue !== '') {
      localStorage.setItem(hourId, textValue);
    } else {
      localStorage.removeItem(hourId);
    }
  });


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  // Load stored data when the page loads
  $('.time-block').each(function() {
    const parentBlock = $(this).closest('.time-block');
    const hourId = $(this).attr('id');
    const savedText = localStorage.getItem(hourId);
    
    if (savedText) {
      $(this).find('textarea').val(savedText);
    }

    var now = dayjs().format('H');
    var rowEl = $('.time-block');

    function blockColour() {
      
      if (hourId.isBefore(now)) {
        rowEl.addClass('project-late');
      } else if (hourId.isSame(now)) {
         rowEl.addClass('project-today');
      } else if (hourId.isAfter(now)) {
        rowEl.addClass('project-today');
     }
    }

  });
});


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

var now = dayjs().format('H');
var rowEl = $('.time-block')

function blockColour() {
  const parentBlock = $(this).closest('.time-block');
  const hourId = parentBlock.attr('id');
	if (projectDate.isBefore(now)) {
    rowEl.addClass('project-late');
  } else if (projectDate.isSame(today)) {
     rowEl.addClass('project-today');
  }
}

