Overview
    A memory game where you are shown a sequence of numbers in a short time spand.
    The player will have to repeat the sequence in the right order as shown.
    1=>5 1=>5
    Back and front of cards will have two different colors
    
Sound
    nice short noice on correct card.
    nice tune on round won
    modal with YOU WON! on winning the game
    low base noice on wrong card.
    no noice on lost game
    mondal with a restart and setting options
    
    ------modal to restart
    
  
Beginner mode
    9 cards on the board.
    Starts with 5 numbers to remember (the othe four dont flip).
    Cards that show number, will have a transparet color to help highlight location of the cards.
        !options to turn the location colors off
     count down timer to show cards maybe 3sec (test).
    Every third round, add another number card (total of 8 cards at end of game). 
    If wrong, has a second chance on the same run. Second time wrong, will end game.
    Counter for what level is reached.
    10 games won, wins the Game.
    
Medium mode
    16 cards on the board.
    Starts with 8 numbers to remember.
    Only cards with a number will flip over
        !option to turn all flip over on/off
    No location colors
        !options to turn the location colors on.
    count down timer- starts maybe 2 secs (test).
    Third round, 5th round, 7th, 9th and last round.  add another number card (total of 13 cards at end of game).
    Has one second chance for whole game.
    Counter for what level.
    Timer for how long the round took.
    10 games won, wins the game.
    
Hard mode
    25 cards on the board
    starts with 10 numbers to remember
    All cards will flip over, even if they dont have a number.
    No location color.
    starts with 2 sec, 100th second will be taken off every 2nd round (test)
    Every second round, add a new number. (15 cards to remember at end of game)
    No second chance
    Timer counting down start with 10sec.
    Timer to record how long it took.
    10 games won, wins the game.
    
Advanced mode
    Random assigned if you need to do the sequence in reverse order.
    1=>5 shows
    5=>1 needs
    
Test option
    Will show what was pressed worng, but allows you to advance anyways.
    Allow marker to see end result with HARD ADVANCED MODE
    
  
...................................................................

Logic of sequence (example with beginner, at start)
    The cards will be random assigned a number 1 to 9.
    round counter starts at 1
        -therefore 5 cards
    all numbers will be put on cards
    card number 1 - 5 will flip with a location highlighter
    click on cards in order shown
        -so click on button will add 1 to counter (start at 0)
        if (click number !== card number) therefore false
        false start at 0
        false will add one to false counter
        flase counter == 2; game ends
        
        -when click button == card counter (example 5) wins round.
        
        (round plus counter % 3 == 0) add ++1 to card counter
        
        -win card counter == 11 -GAME WON!
        
    
.....................................................................

add a random value (1 to 9) to div = cardValue

show card if cardValue => gameCardLevel
1,2,3,4,5 => 5

flip card to show value with time of 3 seconds
card background a different color
cardHighLight= true (option settings, default as beginner)

onclick
cardValue == to gameValue
1 == 1
then card == win
win = ++1 gameValue
therefore onclick equals 2
----->
if gameValue == gameCardLevel
== winLevel

new card values given at random

winLevel therefore ++1 to levelCounter
if LevelCounter == 10
therefore WinGame

levelCounter % 3 = 0
++1 to gameCardLevel
therefore adding cards to the game
..............................................................

sequence of game

1- pop up modal for instructions on "how to plays" and "tips and hints for options settings

2- Game has reset and starts at beginner mode (round starts at 1, timer is blank)
    2a- modes can be activated  - beginner/med/hard
                                - small/med/large

3- Start button is ready for actavation     

4-Game              -number of cards from mode (beg 9/med 16/hard 25)
                    -randomize of card id to all cards visible
                    -active cards from start (beg 3/ med 5/ hard 8)
                    -active cards flip to show id number
                    -timer to show cards (beg 3/ med 2/ hard 2)
                    -active cards flip over to hide the id
                    -active cards at beginner and options for highlight cards (other cards go opacite/ opacite cards cant be pressed)
                        -med- only active cards will flip/ opacite cards can be pressed (second chance per round) 
                        -hard- all cards flip/opacite cards can be pressed (second chance per game or chance to reset game)
                    -count down starts from 10 sec
                        -easy mode- count down ends- ask for redo round/ else game over
                        -med mode- count down ends / game over
                        -hard mode- count down ends / game over
