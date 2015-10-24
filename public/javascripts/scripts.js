$(document).ready(function() {
  console.log("The document is ready!");

  $(function() {
    $( "#from" ).datepicker({
      autoSize:true,
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 3,
      onClose: function( selectedDate ) {
        $( "#to" ).datepicker( "option", "minDate", selectedDate );
      }
    });
    $( "#to" ).datepicker({
      autoSize:true,
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 3,
      onClose: function( selectedDate ) {
        $( "#from" ).datepicker( "option", "maxDate", selectedDate );
      }
    });
  });
  // $('.input-daterange input').each(function() {
  //     $(this).datepicker("clearDates");
  // });



})