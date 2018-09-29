$(document).ready(function() {
    initializeApp();
});

var first_card_clicked = null;
var second_card_clicked = null;
var total_possible_matches = 9;
var match_counter = 0;
var first_card_source='';
var second_card_source='';


//priorities--

// more functionality:
// dynamically create game board with jquery
// randomize the positions of the cards with jquery

// fix css and make it not so ugly
// edit photos to at least give them a border so it looks better against the background of the page

// potential things for later-
// ask the owners of internet dogs i follow if i can use their dogs' photos - likely would only do this after the first set is finished and the css is fixed, so there is something to show them when i approach them.
// perhaps when a match involving that dog is completed, there is a link offered to information about the breed and any related social media fan pages the owner may have for their dog
// if this falls through - maybe try to find other professional stock photos with similar backgrounds - may look more professional if the backdrops are similar, would also make the dogs themselves stand out more
// maybe play random dog-related sound effect when a match is made

// known bugs to fix:
// 1 when you click the same image twice, it sees the sources are the same and considers them a match
// 2 if you click an unmatched card and then click a previously matched card, it sees they do not match, and flips both the unmatched AND the previously matched cards over.


//stats variables
var matches = 0;
var attempts = 0;
if(attempts = 0){
    var accuracy = 0;
}
var games_played = 0;

function initializeApp(){
    addClickToCards();
    addClickToReset();
    // displayStats();
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

function reset_stats(){
    games_played++;
    matches = 0;
    attempts = 0;
    if(attempts = 0) {
        accuracy = 0;
    }
    displayStats();
    $('.card').removeClass('hide');
}

function revealCard(clickedCard){

    $(clickedCard).addClass('hide');
}

function hideMismatchedCards(){
    $(first_card_clicked).removeClass('hide');
    $(second_card_clicked).removeClass('hide');
    first_card_clicked=null;
    second_card_clicked=null;
}

function addClickToCards(){
    $('.card').click(handleCardClick);
}

function handleCardClick(){
        var card_clicked = event.currentTarget;
        if(first_card_clicked === null) {
            first_card_clicked = event.currentTarget;
            first_card_source = $(event.currentTarget).find('.front > img').attr('src');
            revealCard(first_card_clicked);
            return
        }
        else if(second_card_clicked === null) {
            second_card_clicked = event.currentTarget;
            second_card_source = $(event.currentTarget).find('.front > img').attr('src');
            revealCard(second_card_clicked);
            if(first_card_source === second_card_source) {
                matches++;
                match_counter++;
                attempts++;
                displayStats();
                first_card_clicked = null;
                second_card_clicked = null;
                if(match_counter === total_possible_matches) {
                    alert('you won yay party');
                }
            }
                else {
                    attempts++;
                    displayStats();
                    setTimeout(hideMismatchedCards, 2000);
                    return
                }
            }

}

