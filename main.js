$(document).ready(function() {
    initializeApp();
    $(window).on('orientationchange', function(event) {
        console.log(orientation);
    });
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
    "images/card1.jpg",
    "images/card2.jpg",
    "images/card3.jpg",
    "images/card4.jpg",
    "images/card5.jpg",
    "images/card6.jpg",
    "images/card7.jpg",
    "images/card8.jpg",
    "images/card9.jpg",
    "images/card1.jpg",
    "images/card2.jpg",
    "images/card3.jpg",
    "images/card4.jpg",
    "images/card5.jpg",
    "images/card6.jpg",
    "images/card7.jpg",
    "images/card8.jpg",
    "images/card9.jpg"
];
var randomizedOnce = [];

function initializeApp(){
    displayRandomBG();
    addClickToCards();
    addClickToReset();
    addClickToClose();
    appendRandomizedCards(cardArray);
}

function displayRandomBG(){
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

function reset_statsB(){
    var cardContainerArray = [];
    
    var frontDiv = $('<div>', {class: 'front'});
    var backDiv = $('<div>', {class: 'back'});

    $('#game-area').empty();

    for(var i = 0; i < 18; i++){
        var cardContainerDiv = $('<div>', {class: 'card-container', index: i});
        cardContainerArray.push(cardContainerDiv);

        for(var i = 0; i < 18; i++){
            var rotation = i;
            var cardDiv = $('<div>', {class: 'card'});


            cardContainerArray[i]
        }
    }
    console.log('array of card container divs', cardContainerArray);

    //create front div
    //create back div
    //append back card image to back div
    //(still need to append random images to front divs at this point)
    //append front and back divs to card div
    //append card div to card container
    //append card container to game area
    //apply shuffle to place images in front divs
    //apply click handlers to card
}

function reset_stats(){
    if (!$('.modal').hasClass('modal-hide')){
        $('.modal').addClass('modal-hide');
    }
    $('#game-area').empty();
    rebuildGameboard();

    games_played++;
    matches = 0;
    match_counter = 0;
    attempts = 0;
    first_card_clicked === null;
    second_card_clicked === null;
    displayStats();
    if(attempts === 0) {
        accuracy = '0.00%';
    }
    $('.accuracy .value').text(accuracy);
    cardArray = [
        "images/card1.jpg",
        "images/card2.jpg",
        "images/card3.jpg",
        "images/card4.jpg",
        "images/card5.jpg",
        "images/card6.jpg",
        "images/card7.jpg",
        "images/card8.jpg",
        "images/card9.jpg",
        "images/card1.jpg",
        "images/card2.jpg",
        "images/card3.jpg",
        "images/card4.jpg",
        "images/card5.jpg",
        "images/card6.jpg",
        "images/card7.jpg",
        "images/card8.jpg",
        "images/card9.jpg"
    ];
    appendRandomizedCards(cardArray);
    $('.card').off();
    addClickToCards();
}

function rebuildGameboard(){
    for(var i = 0; i < 18; i++){
        var cardContainerDiv = $('<div>').addClass('card-container');
        var cardDiv = $('<div>').addClass('card');
        var backDiv = $('<div>').addClass('back');
        var frontDiv = $('<div>').addClass('front');
        $(backDiv).append('<img src="images/back.png">');
        $(cardDiv).append(frontDiv);
        $(cardDiv).append(backDiv);
        $(cardContainerDiv).append(cardDiv);
        $('#game-area').append(cardContainerDiv);
    }
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
                }, 3000);
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

function shuffleCards(cardsToShuffle) {
    var shuffledCards = [];
    var arrayLength = cardsToShuffle.length;
    var randomNumber;
    // While there remain elements to shuffle…
    while (arrayLength) {

        // Pick a remaining element…
        var randomNumber = Math.floor(Math.random() * arrayLength--);

        // And move it to the new array.
        shuffledCards.push(cardsToShuffle.splice(randomNumber, 1)[0]);
    }

    return shuffledCards;
}

function appendRandomizedCards() {
    $('div .front').empty();
    var shuffledCards = shuffleCards(cardArray);
    var cardDivs = $('div .front');
    for (var i = 0; i < cardDivs.length; i++) {
        var targetedDiv = cardDivs[i];
        $(targetedDiv).append('<img src=' + shuffledCards[i] + '>');
    }
}

//to do list:
// 1 - media queries
// 2 - bug when resetting too fast. after 3 quick resets everything gets squashed in the game area
    // possible fix - empty and rebuild gameboard on reset

// 3 - maybe different background images for mobile?
