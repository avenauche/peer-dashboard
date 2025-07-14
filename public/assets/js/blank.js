$(document).ready(function () {
  // Initialize comboboxes
  $('#mySelect').combobox({ bsVersion: '4', clearIfNoMatch: false });
  
  $('#ttlSelect').combobox({ bsVersion: '4', clearIfNoMatch: false });

  // Restrict input to numbers only
  $('.combobox-container input').on('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '');
  });

  // IP Validation logic
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
