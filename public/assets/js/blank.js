$(document).ready(function () {
  // Initialize comboboxes
  $('#mySelect').combobox({ bsVersion: '4', clearIfNoMatch: false });
  
  $('#ttlSelect').combobox({ bsVersion: '4', clearIfNoMatch: false });
  $('#mySelect').parent().attr('style', 'width: 380px;');
  // style the wrapper
  $('#ttlSelect').parent().attr('style', 'width: 380px;');
  // IP Validation logic
  // Restrict input to numbers only
  $('.ip-segment').on('input', function () {
    // Remove all non-numeric characters
    this.value = this.value.replace(/[^0-9]/g, '');

    // Optional: Limit to 3 characters
    if (this.value.length > 3) {
      this.value = this.value.slice(0, 3);
    }
  });

  console.log('Initializing #mySelect', $('#mySelect').length);
  $('.combobox-container input').on('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '');
  });
 
  function isValidIPPart(part) {
    const num = Number(part);
    return part !== '' && !isNaN(num) && num >= 0 && num <= 255;
  }

  function validateFullIP() {
    const parts = [$('#ip1').val(), $('#ip2').val(), $('#ip3').val(), $('#ip4').val()];
    const feedback = $('#ipFeedback');
    const isValid = parts.every(isValidIPPart);
    feedback.toggleClass('d-none', isValid);
  }

  $('.ip-segment').on('blur', validateFullIP);

  $('.ip-segment').on('input', function () {
    if (this.value.length === 3) {
      $(this).nextAll('.ip-segment').first().focus();
    }
  });
});
