- [overview](#overview)
- [snake](#snake)
- [15 puzzle](#15-puzzle)
- [tic tac toe](#tic-tac-toe)
- [whack a mole](#whack-a-mole)
- [rock paper scissors](#rock-paper-scissors)
 

[live website](https://tortaruga.github.io/vanilla-js-games/)

# overview

collection of simple traditional games made with vanilla javascript (snake, 15 puzzle, tic tac toe, whack-a-mole, rock paper scissors). 

all games work both on desktop and mobile.

# snake

you can move the snake either with arrows keys or by clicking the buttons. 
the speed increases with every apple you eat until it reaches 0.209s, then it stays constant. it might still be a little fast tho, the highest score i managed to reach is 14.  

# 15 puzzle

just click shuffle and reorder the numbers. 

if you don't click shuffle you can still move the tiles how you want and then reorder them and you will get the success message with the number of moves, but the timer won't start (and the number of moves will also count the ones it took to shuffle). 

# tic tac toe

you can choose to play with a physical opponent from the same device, play against the computer, or watch the computer play against itself.

the computer's moves are handled with a minimax algorithm, which basically evaluates the best move for the computer, but since that would mean that you cannot win against it (only reach a draw or lose) i added a randomness factor.

this basically means that a percentage of the time the computer will choose the best possible move, while sometimes it will just select a random move.
it may result in very stupid moves on its part sometimes.

# whack a mole

try to click the colored square when it appears randomly on the screen.

this is easier to play on a mobile screen with your finger than on a bigger screen with your mouse (but then again it is totally possible that i'm just not agile enough).

# rock paper scissors

basic game of rock paper scissors against the computer.

the computer selects its move randomly.