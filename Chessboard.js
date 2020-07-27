/*
Write a program that creates a string that represents an 8×8 grid, 
using newline characters to separate lines. At each position of the 
grid there is either a space or a "#" character. The characters 
should form a chessboard. Passing this string to console.log should 
show something like this:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
*/

function drawGridnXn() {
    let row = '';
    for (let y = 1; y <= 8; y++) {
        if (y % 2 != 0) row = ' # # # #\n'
        else row = '# # # # \n'
        console.log(row);
    }
  
}

drawGridnXn(); 