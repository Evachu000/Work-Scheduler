    // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  // Load stored data when the page loads
  window.addEventListener('load', function() {
    saveButtons.forEach(button => {
      const parentBlock = button.closest('.time-block');
      const hourId = parentBlock.id;
      const savedText = localStorage.getItem(hourId);
      if (savedText) {
          parentBlock.querySelector('textarea').value = savedText;
      }
    });
  });

  saveButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      const parentBlock = event.target.closest('.time-block');
      const hourId = parentBlock.id;
      const textArea = parentBlock.querySelector('textarea');
      const textValue = textArea.value;
      if (textValue.trim() !== '') {
          localStorage.setItem(hourId, textValue);
      } else {
          localStorage.removeItem(hourId); // Remove if textarea is empty
      }
    });
  });


  $(document).ready(function() {
    $('.saveBtn').click(function() {
      const parentBlock = $(this).closest('.time-block');
      const hourId = parentBlock.attr('id');
      const textArea = parentBlock.find('textarea');
      const textValue = textArea.val().trim();

      if (textValue !== '') {
        localStorage.setItem(hourId, textValue);
      } else {
        localStorage.removeItem(hourId);
      }
    });

    // Load stored data when the page loads
    $('.time-block').each(function() {
      const hourId = $(this).attr('id');
      const savedText = localStorage.getItem(hourId);
      if (savedText) {
        $(this).find('textarea').val(savedText);
      }
    });
  });

  // TODO: Add code to display the current date in the header of the page.
var currentDayEl = $('#currentDay');

function displayDay() {
  var today = dayjs().format('dddd, MMM DD');
  currentDayEl.text(today);
}

displayDay();

const hourId = parentBlock.attr('id').replace('hour-', ''); // Extract numeric part