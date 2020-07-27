/*
Write a loop that makes "rows" calls to console.log to output the following
triangle:
#
##
###
####
#####
######
#######
*/

function drawTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
        console.log("#".repeat(i));
    }
};

drawTriangle(10);
