var  colors = ['#ff9999', '#27ae60',  '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', "#BDBB99", "#77B1A9", "#73A857"];
var currentQuote='';
function changeColor() {
  var randColors = colors[Math.floor(Math.random()*colors.length)];
  $('.quotebox , #randomquote, #tweetQuote').animate({backgroundColor: randColors}, 1000);
 // console.log(randColors);
  }

function myRandomQuote() {
$.ajax({url:'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?',
  dataType: 'jsonp',
  success: function(data) {

    $('#quote').empty();           
    $('#quote').append(data.quoteText  + ' - ' + data.quoteAuthor );

    }});
}

$(function() {
	$('#randomquote').click(function() {
	  myRandomQuote();	
    changeColor();
  });
$('#tweetQuote').click(function() {
  var d =$("#quote").html();
  window.open("https://twitter.com/intent/tweet?text=" + d);
});
 

});