$(document).ready(function() {
    initializeApp();
});

var first_card_clicked = null;
var second_card_clicked = null;
var total_possible_matches = 2;
var match_counter = 0;
var first_card_source='';
var second_card_source='';

function revealCard(clickedCard){

        $(clickedCard).addClass('hide');
}

function hideMismatchedCards(){
    $(first_card_clicked).removeClass('hide');
    $(second_card_clicked).removeClass('hide');
    first_card_clicked=null;
    second_card_clicked=null;
}

function initializeApp(){
    addClickToCards();
}

function addClickToCards(){
    $('.card').click(handleCardClick);
}

function handleCardClick(){
        card_clicked = event.currentTarget;
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
                match_counter++;
                first_card_clicked = null;
                second_card_clicked = null;
                if(match_counter === total_possible_matches) {
                    alert("you won yay party");
                }
                else {
                    return
                }
            }
            else {
                setTimeout(hideMismatchedCards, 2000);
            }
        }

}

