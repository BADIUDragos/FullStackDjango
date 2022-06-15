var playerOne = prompt("Player one enter your name, you will be Blue")
var playerOneColor = 'rgb(86, 151, 255)'

var playerTwo = prompt("Player Two: Enter your name, you will be red")
var playerTwoColor = 'rgb(237, 45, 73)'

var game_on = true
var table = $('table tr')

function reportWin (rowNum, colNum){
    console.log("You won starting at this row,col")
    console.log(rowNum)
    console.log(colNum)
}

function changeColor(rowIndex, colIndex, color){
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color', color)
}

function returnColor(rowIndex, colIndex){
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color')
}

function checkBottom(colIndex){
    var colorReport = returnColor(5, colIndex)
    for(var i = 0; row > -1; i--){
        colorReport = returnColor(row, colIndex)
        if (colorReport === 'rgb(128, 128, 128'){
            return row
        }
    }
}

function colorMatchCheck(one, two, three, four){
    return (one === two && one === three && one === four && one !== 'rgb(128, 128, 128)' && one !== undefined)
}

function horizontalWinCheck() {
    for (var row = 0; row < 6; row++){
        for (var col = 0; col < 4; col++){
            if (colorMatchCheck(returnColor(row,col),returnColor(row,col+1),returnColor(row,col+2),returnColor(row,col+3))){
                console.log("Horizontal")
                return true
            }
            else continue
        }
    }
}

function verticalWinCheck() {
    for (var col = 0; col < 7; col++){
        for (var row = 0; row < 3; row++){
            if (colorMatchCheck(returnColor(row,col),returnColor(row+1,col),returnColor(row+2,col),returnColor(row+3,col))){
                console.log("Vertical")
                return true
            } 
            else continue
        }
    }
}

function diagonalWinCheck(){

}

//start w player 1
var currentPlayer = 1;
var currentName = playerOne
var currentColor = playerOneColor

$('h3').text(playerOne + "it's your turn, pick a column to drop in")

$(".board button").on('click',function(){
   var col = $(this).closest('td').index();

   var bottomAvail = checkBottom(col);
   changeColor(bottomAvail,col,currentColor)
   if(horizontalWinCheck() || verticalWinCheck()){
       $('h1').text( currentName+ " you have one")
   }

   currentPlayer = currentPlayer * -1;
   if (currentColor === 1){
    currentName = playerOne
    $('h3').text(currentName + "it's your turn")
    currentColor = playerTwoColor
   } else {
    currentName == playerTwo
    $('h3').text(currentName + "it's your turn")
    currentColor = playerTwoColor
   }
})