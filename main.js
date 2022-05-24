var board = getBoard();
for (let i = 0; i < board.length; i++) {
  input = board[i].getElementsByTagName("input")[0];
  input.setAttribute("maxlength", "1");
  input.setAttribute("oninput", "this.value=this.value.replace(/[^1-9]/g,'');");
}

var clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener('click', clearBoard);

function getBoard() {
  return document.getElementsByClassName("cell");
}

function clearBoard() {
  var board = getBoard();
  for (let i = 0; i < board.length; i++) {
    input = board[i].getElementsByTagName("input")[0];
    input.value = "";
  }
}