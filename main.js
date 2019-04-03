$(document).ready(function() {
    initializeApp();
});

var first_card_clicked = null;
var second_card_clicked = null;
var total_possible_matches = 9;
var match_counter = 0;
var first_card_source='';
var second_card_source='';
var cant_click_card = false;

// stats variables
var matches = 0;
var attempts = 0;
var accuracy = 0;
var games_played = 0;

// cards
cardArray = [
    "images/card01.png",
    "images/card02.png",
    "images/card03.png",
    "images/card04.png",
    "images/card05.png",
    "images/card07.png",
    "images/card08.png",
    "images/card09.png",
    "images/card10.png",
    "images/card01.png",
    "images/card02.png",
    "images/card03.png",
    "images/card04.png",
    "images/card05.png",
    "images/card07.png",
    "images/card08.png",
    "images/card09.png",
    "images/card10.png"
];
var randomizedOnce = [];

function initializeApp(){
    addClickToCards();
    addClickToReset();
    addClickToClose();
    appendRandomizedCards(cardArray);
    var bgArray = ['background1.jpg', 'background2.jpg', 'background3.jpg'];
    $('#game-bg').css({'background-image': 'url(images/' + bgArray[Math.floor(Math.random() * bgArray.length)] + ')'});
}

function displayStats(){
    $(".games-played .value").text(games_played);
    $('.attempts .value').text(attempts);
    var accuracyMath = matches/attempts * 100;
    accuracy = accuracyMath.toFixed(2) + '%';
    $('.accuracy .value').text(accuracy);
}

function addClickToReset(){
    $('.reset').click(reset_stats);
}

function addClickToClose(){
    $('.close').click(closeModal);
}

function closeModal(){
    $('.modal').addClass('modal-hide');
}

function reset_stats(){
    if (!$('.modal').hasClass('modal-hide')){
        $('.modal').addClass('modal-hide');
    }
    games_played++;
    matches = 0;
    match_counter = 0;
    attempts = 0;
    displayStats();
    if(attempts === 0) {
        accuracy = '0.00%';
    }
    $('.accuracy .value').text(accuracy);
    cardArray = [
        "images/card01.png",
        "images/card02.png",
        "images/card03.png",
        "images/card04.png",
        "images/card05.png",
        "images/card07.png",
        "images/card08.png",
        "images/card09.png",
        "images/card10.png",
        "images/card01.png",
        "images/card02.png",
        "images/card03.png",
        "images/card04.png",
        "images/card05.png",
        "images/card07.png",
        "images/card08.png",
        "images/card09.png",
        "images/card10.png"
    ];
    $('.card').removeClass('hidden');
    $('.card').removeClass('fade');
    setTimeout(function(){
        appendRandomizedCards(cardArray);
        addClickToCards();
    }, 1000);
    
}

function revealCard(clickedCard){
    $(clickedCard).addClass('hidden');
}

function hideMismatchedCards(){
    $(first_card_clicked).removeClass('hidden');
    $(second_card_clicked).removeClass('hidden');
    first_card_clicked = null;
    second_card_clicked = null;
}

function addClickToCards(){
    $('.card').click(handleCardClick);
}

function handleCardClick(){
    if(cant_click_card){
        return;
    }
    var card_clicked = event.currentTarget;
    if(first_card_clicked === null) {
        first_card_clicked = event.currentTarget;
        first_card_source = $(event.currentTarget).find('.front > img').attr('src');
        revealCard(first_card_clicked);
        $(first_card_clicked).off();
        return
    }
    else if(second_card_clicked === null) {
        second_card_clicked = event.currentTarget;
        second_card_source = $(event.currentTarget).find('.front > img').attr('src');
        revealCard(second_card_clicked);
        $(second_card_clicked).off();
        if(first_card_source === second_card_source) {
            matches++;
            match_counter++;
            attempts++;
            displayStats();
            $(first_card_clicked).addClass('fade');
            $(second_card_clicked).addClass('fade');
            first_card_clicked = null;
            second_card_clicked = null;
            if(match_counter === total_possible_matches) {
                setTimeout(function(){
                    $('#modal').removeClass('modal-hide');
                }, 2000);
            }
        }
        else {
            cant_click_card = true;
            $(first_card_clicked).on("click", handleCardClick);
            $(second_card_clicked).on("click", handleCardClick);
            attempts++;
            displayStats();
            setTimeout(hideMismatchedCards, 1500);
            cant_click_card = false;
            return
        }
    }
}

window.onclick = function(event) {
    if (event.target == modal) {
        $('#modal').addClass('modal-hide');
    }
}

//grabbed following code from https://bost.ocks.org/mike/shuffle/

function shuffleCards(arrayToShuffle) {
    var shuffledCards = [];
    var arrayLength = arrayToShuffle.length;
    var randomNumber;

    // While there remain elements to shuffle…
    while (arrayLength) {

        // Pick a remaining element…
        var randomNumber = Math.floor(Math.random() * arrayLength--);

        // And move it to the new array.
        shuffledCards.push(arrayToShuffle.splice(randomNumber, 1)[0]);
    }

    return shuffledCards;
}

function appendRandomizedCards(cardArray) {
    var shuffledCards = shuffleCards(cardArray);
    var cardDivs = $('div .front');
    for (var i = 0; i < cardDivs.length; i++) {
        var targetedDiv = cardDivs[i];
        $(targetedDiv).html('<img src=' + shuffledCards[i] + '>');
    }
}

//to do list:
// 1 - media queries