var quotes = [["Don't cry because it's over, smile because it happened.", "Dr. Seuss"], ["Be yourself; everyone else is already taken.", "Oscar Wilde"], ["You know you're in love when you can't fall asleep because reality is finally better than your dreams.", "Dr. Seuss"], ["A room without books is like a body without a soul.", "Marcus Tullius Cicero"]];

function getRandomQuote() {
	return Math.floor(Math.random() * (quotes.length));
}

function randomColour() {
	return Math.floor(Math.random()*16777215).toString(16);
}

function inverseColour(hexnum) {
  hexnum = hexnum.toUpperCase();
  var splitnum = hexnum.split("");
  var resultnum = "";
  var simplenum = "FEDCBA9876".split("");
  var complexnum = new Array();
  complexnum.A = "5";
  complexnum.B = "4";
  complexnum.C = "3";
  complexnum.D = "2";
  complexnum.E = "1";
  complexnum.F = "0";
	
  for(i=0; i<6; i++){
    if(!isNaN(splitnum[i])) {
      resultnum += simplenum[splitnum[i]]; 
    } else if(complexnum[splitnum[i]]){
      resultnum += complexnum[splitnum[i]]; 
    }
  }
	
  return resultnum;


 //    var colourValues = colour.match(/\d+/g);
    
 //    for (i = 0; i < colourValues.length; i++) {
 //        colourValues[i] = parseInt(colourValues[i], 10);
 //    }
    
 //    var r = 255 - colourValues[0];
 //    var g = 255 - colourValues[1];
 //    var b = 255 - colourValues[2];
    
 //    var rgb = 'rgb(' + r + ',' + g + ',' + b + ');';
	// return rgb;
}

// Create container to display single quote
var $speaker = $(".speaker");
var $container = $(".container");
var $displayBoard = $("<p></p>");
var $quoting = $("<p></p>");

$speaker.append($quoting);
$container.append($displayBoard);

var randomQuote = quotes[getRandomQuote()];
var quote = randomQuote[0];
var speaker = randomQuote[1];
$displayBoard.text(quote);
$speaker.text(speaker);

// When button is clicked
$("#show-button").click(function() {
	var quoteColour = randomColour();
	var bgColour = inverseColour(quoteColour);
	randomQuote = quotes[getRandomQuote()];
	quote = randomQuote[0];
	speaker = randomQuote[1];

	$("p").css("color", '#' + quoteColour);
	$("span").css("color", '#' + quoteColour);
	$("body").css("background-color", '#' + bgColour);
	$displayBoard.text(quote);
	$speaker.text(speaker);

	$(this).text("Still Hungry?");
});


