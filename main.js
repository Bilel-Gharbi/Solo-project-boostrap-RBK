
var random = function(max){
    return Math.floor(Math.random()* max +1)
}
var scores , roundScore , activePlayer , gamePlaying; 

function start() { // initiate game 
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
    //$('#dice').hide()

    $('#score-player-0').text('0')
    $('#score-player-1').text('0')

    $('#current-score0').text('0') // current score player 1
    $('#current-score1').text('0') // current score player 2

    $('#name-player0').text('PLAYER 1') //player1 name // to change 
    $('#name-player1').text('PLAYER 2')  //player1 name // to change 

    $('.player1-box').removeClass('winner')
    $('.player1-box').removeClass('active')

    $('.player0-box').removeClass('winner')
    $('.player1-box').removeClass('active')
  
    $('.player0-box').addClass('active')
}

/* $('.btn-roll').click(function(){
    $('#dice-1').effect('shake')
}) */
$('a').click(function(){
    console.log(" roll- btn clicked")
   

    if(gamePlaying === true){
        var i = random(6) 
        var j = random(6) // for the second dice
        //console.log(i)
        //console.log(j)
        //display dices 
        $('#dice-1').attr('src','images/dice-'+ i +'.png')
        $('#dice-2').attr('src','images/dice-'+ j +'.png')

        if(i !== 1 && j !== 1){
            roundScore += i + j ;
            console.log(roundScore,"for",activePlayer," player") //  sum of two dices value
             
            //display current reuslt
            //current-score1
            var $current = $('#current-score'+activePlayer) // to target current-score1 or current-score2
            $current.text(roundScore) // display current score in current in even player 1 or 2 
        }else {
            nextPlayer() // go to the next player
        }
    }
})

function nextPlayer() {
    //Next player
    if(activePlayer === 0){
        activePlayer = 1
        var notActivePlayer = 0 // uses juste for styling 
    }else {
        activePlayer = 0
        var notActivePlayer = 1
    }
    roundScore = 0;

    $('#current-score0').text('0')
    $('#current-score1').text('0')
    //if active player = 0 the player0-box will take the class of active and  the player1-box will not take a active styling 
    $('.player'+activePlayer+'-box').addClass('active')
    $('.player'+notActivePlayer+'-box').removeClass('active')
    
    console.log("Next player start ")
}

//if one player hold 
$('.btn-hold').click(function(){
    console.log('Hold clicked')

    if(gamePlaying === true){
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore; // saving score score[1] += roundscore 

        var nb = scores[activePlayer] // to store the score from table inside an array 
        //updating score-player 0 or 1 
        $('#score-player-'+activePlayer).text(nb) // Nb is the scoor of player 0 or 1 depend on game
        console.log(activePlayer)
        if(scores[activePlayer] >= 50 ){
            // select id name0 or name 1 
            $('#name-player' + activePlayer).text('Winner !!! ')
            //$('.dice').hide() // display non
            $('.player' + activePlayer +'-box').addClass('winner') // add winner class
            $('.player' + activePlayer +'-box').removeClass('active') // remove class active

            gamePlaying = false;
        }else{
            nextPlayer()
        }
    }
})

$('.btn-new').click(start)
start();


