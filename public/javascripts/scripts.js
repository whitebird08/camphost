$(document).ready(function() {
  console.log("The document is ready!");

  // $(function() {
  //   $( "#from" ).datepicker({
  //     autoSize:true,
  //     defaultDate: "+1w",
  //     changeMonth: true,
  //     numberOfMonths: 3,
  //     onClose: function( selectedDate ) {
  //       $( "#to" ).datepicker( "option", "minDate", selectedDate );
  //     }
  //   });
  //   $( "#to" ).datepicker({
  //     autoSize:true,
  //     defaultDate: "+1w",
  //     changeMonth: true,
  //     numberOfMonths: 3,
  //     onClose: function( selectedDate ) {
  //       $( "#from" ).datepicker( "option", "maxDate", selectedDate );
  //     }
  //   });
  // });

  $(function() {
      $( "#datepicker" ).datepicker();
    });

//   router.get('/books', function(req, res, next) {
//   unirest.get('http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json?api-key=' + NYT_API_KEY)
//       .end(function (response) {
//         // console.log(response.body);
//         var books = response.body.results.books
//         console.log(response.body.results.books[0], 'YOYUOYOYOYOY')
//   res.render('books/index', { title: 'NYT Books', books: books });
//       })
// });
function campgroundApi(){
  unirest.get('http://api.amp.active.com/camping/campgrounds/?pstate=CO&pname=Rocky+Mountain+National+Park&arvdate=02%2F12%2F2016&lengthOfStay=5&siteType=10001&api_key=' + CAMPGROUND_API_KEY)
      .end(function (response) {
        // console.log(response.body);
        var parkName = response.body.results.pname
        console.log(response.body.results.pname[0], 'YOYUOYOYOYOY')
  res.render('campgrounds/cg', { title: 'campgrounds', campgrounds: campgrounds });
      })
}
  

// unirest.get('http://api.amp.active.com/camping/campgrounds/?pstate=CO&pname=Rocky+Mountain+National+Park&arvdate=02%2F12%2F2016&lengthOfStay=5&siteType=10001&api_key=' + CAMPGROUND_API_KEY)



})