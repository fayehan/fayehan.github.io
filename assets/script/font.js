// function changeFont(num) {

// 	$(".textstyle").remove();
// 	if (num == 0){
// 		$('head').append("<link class='textstyle' href='https://fonts.googleapis.com/css?family=Cabin|Roboto+Condensed:700' rel='stylesheet'>");
// 		$("#title").css("font-family","'Roboto Condensed', Sans-Serif");
// 		$("#title").css("font-size","35px");
// 		$("#para").css("font-family","'Cabin', Sans-Serif");
// 		$("#para").css("font-size","16px");
// 	}
// 	else if (num==1){
// 		$('head').append("<link class='textstyle' href='https://fonts.googleapis.com/css?family=Open+Sans|Raleway:300,400' rel='stylesheet'>");
// 		$("#title").css("font-family","'Raleway', Sans-Serif");
// 		$("#title").css("font-size","44px");
// 		$("#para").css("font-family","'Open Sans', Sans-Serif");
// 		$("#para").css("font-size","15px");
// 	}
// 	else if (num==2){
// 		$('head').append("<link href='https://fonts.googleapis.com/css?family=Playfair+Display:700i|Source+Sans+Pro' rel='stylesheet'>");
// 		$("#title").css("font-family","'Playfair Display', Serif");
// 		$("#title").css("font-size","48px");
// 		$("#para").css("font-family","'Source Sans Pro', Sans-Serif");
// 		$("#para").css("font-size","16px");
// 	}
// }

// $(document).ready(function() {
// 	var randomNumber;

// 	$("#btn").click(
// 		function(){
// 			randomNumber = Math.floor(Math.random() * 3);
// 			// console.log(randomNumber);
// 			changeFont(randomNumber);
// 		}
// 	);
// });

var obj = {
	"styles":[
		{
		"Link": "<link class='textstyle' href='https://fonts.googleapis.com/css?family=Cabin|Roboto+Condensed:700' rel='stylesheet'>",
		"TitleFont": "Roboto Condensed",
		"TitleCate": "Sans-Serif",
		"TitleSize": "35px",
		"ParaFont": "Cabin",
		"ParaCate": "Sans-Serif",
		"ParaSize": "16px",
		"Tag":"style1"
		},

		{
		"Link": "<link class='textstyle' href='https://fonts.googleapis.com/css?family=Open+Sans|Raleway:300,400' rel='stylesheet'>",
		"TitleFont": "Raleway",
		"TitleCate": "Sans-Serif",
		"TitleSize": "44px",
		"ParaFont": "Open Sans",
		"ParaCate": "Sans-Serif",
		"ParaSize": "15px",
		"Tag":"style2"
		},
		{
		"Link": "<link class='textstyle' href='https://fonts.googleapis.com/css?family=Playfair+Display:700i|Source+Sans+Pro' rel='stylesheet'>",
		"TitleFont": "Playfair Display",
		"TitleCate": "Serif",
		"TitleSize": "48px",
		"ParaFont": "Source Sans Pro",
		"ParaCate": "Sans-Serif",
		"ParaSize": "16px",
		"Tag":"style2"
		},
	]
};



function changeFont(style){
	console.log(style);

	$(".textstyle").remove();
	$('head').append(style.Link);
	document.getElementById("title-font").innerHTML = style.TitleFont;
	document.getElementById("para-font").innerHTML = style.ParaFont;
	$("#title").css("font-family", style.TitleFont+","+ style.TitleCate);
	$("#title").css("font-size", style.TitleSize);
	$("#para").css("font-family", style.ParaFont+","+ style.ParaCate);
	$("#para").css("font-size", style.ParaSize);
}


var selected = obj.styles;
var length = selected.length;
var index= 0;


function updateSelected(){
	// alert("I am an alert box!");
	var e = document.getElementById("styles");
	var tag = e.options[e.selectedIndex].value;
	selected = obj.styles.filter(function (el) {

	    if (tag == "all"){
	    	return el.Tag != null;
	    }
	    return el.Tag == tag;

	});
	index= 0;
	length = selected.length;
	changeFont(selected[index]);


}


$(document).ready(function() {
	
	changeFont(selected[index]);

	$("#next-button").click(
		function(){
			index = index+1;
			if (index == length){
				index = 0;
			}
			changeFont(selected[index]);
			// console.log(index);
		}
	);

	$("#prev-button").click(
		function(){
			index = index-1;
			if (index == -1){
				index = length-1;
			}
			changeFont(selected[index]);			
			// console.log(index);
		}
	);


});


