

// console.log(scores);

var scoresSorted = _.sortBy(scores, 'score');

var scoresReversed = new Array();
scoresReversed = scoresSorted.slice(0);
scoresReversed.reverse();

// console.log("------sorted---------");
// console.log(scoresSorted);

// console.log("--------reversed----------");
// console.log(scoresReversed);

var h = window.innerHeight;
var teamH = (h-160)/5;

_.each(scoresReversed, function (element, index, list) {

    console.log("index:" +index);
    var currentSlide = "1";

    switch(index){
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            currentSlide = "1";
        break;

        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            currentSlide = "2";
        break;

        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
            currentSlide = "3";
        break;

        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
            currentSlide = "4";
        break;
        
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
            currentSlide = "5";
        break;
    
    }
 
    var selector = "#section" + currentSlide;
    console.log("selector: " + selector);

    if(!element.colour){
        element.colour = '#000';
    }

    console.log(element.colour);

    var teamBox = `<div class="team" style="height:` + teamH + `px;">` +
                        `<div class="rank">`+ parseInt(index + 1) + `</div>` +
                        `<div class="logo" style="background: `+element.colour+` url('svg/`+element.logo+`') center 50% no-repeat/120%; cover">` +
                        //`<img src="/svg/`+ element.logo +`" />` +
                        `</div>` +
                        `<div class="teamnamelogo" style="background: `+element.colour+` url('svg/`+element.logo+`') -400px center no-repeat/220%; cover">` +
                        `<div class="teamname">` +
                        element.teamName + `&nbsp;&nbsp;&nbsp;&nbsp;[ `+element.score+` ]  ` +
                        `</div>` +
                        `</div>` +
                    `</div>`;

    // console.log(teamBox);
    $( selector).append(teamBox);

});

var section1content = $('#section1').html();
var section2content = $('#section2').html();
var section4content = $('#section4').html();
var section5content = $('#section5').html();

$('#section1').empty().html( section5content );
$('#section2').empty().html( section4content );
$('#section4').empty().html( section2content );
$('#section5').empty().html( section1content );


//all scores
_.each(scoresReversed, function (element, index, list) {

    var teamBox = `<div class="team_all">` +
    `<div class="rank_all">`+ parseInt(index + 1) + `</div>` +
    `<div class="logo_all" style="background: `+element.colour+` url('svg/`+element.logo+`') 10% 50% no-repeat/110%; cover">` +
    //`<img src="/svg/`+ element.logo +`" />` +
    `</div>` +
    `<div class="teamnamelogo_all" style="background: `+element.colour+`;">` +
    `<div class="teamname_all">` +
    element.teamName + `&nbsp;[ `+element.score+` ]  ` +
    `</div>` +
    `</div>` +
    `</div>`;

    $("#section6").append(teamBox);
});


$(function() {
    $.deck('.slide');
});