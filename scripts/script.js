////////////////////////// Libraries //////////////////////////
//var csv = require('jquery-csv');

////////////////////////// Main //////////////////////////
const SIZE = 9;
initMenuItems();
board = getBoard();
initBoard(board);
initButtons();

////////////////////////// Init //////////////////////////

function initBoard(board) {
  for (let i = 0; i < SIZE; i++) {
    var section = document.createElement('div');
    section.classList.add('section');
    for (let j = 0; j< SIZE; j++)  {
      var newCell = document.createElement('div');
      newCell.classList.add('cell', 'flex');
      input = createInput("1");
      newCell.appendChild(input);
      section.appendChild(newCell);
    }
    board.appendChild(section);
  }
}

function initButtons() {
  var btns = document.querySelectorAll('button');
  for (let i = 0; i < btns.length; i++) {
    btn = btns[i];
    btn.classList.add('clr-light', 'pad-0', 'fillet');
  } 
  addListener("clear-btn", clearBoard);
  addListener("new-puzzle-btn", newPuzzle);
}

function addListener(id, func) {
  var clearBtn = document.getElementById(id);
  clearBtn.addEventListener('click', func);
}

function initMenuItems() {
  const src = "https://raw.githubusercontent.com/eirikmadland/notion-icons/master/v5/icon4/";
  const href = "./pages/";
  var menuItems = document.querySelectorAll('.menu-item');
  for (let i = 0; i < menuItems.length; i++) {
    var item = menuItems[i];
    item.href = href + item.id + '.html';
    item.classList.add('flex', 'stretch', 'pad-2', 'gap-2', 'no-grow', 'j-start', 'font-2');
    var img = item.getElementsByTagName('img')[0];
    img.src = src + img.id + '.svg';
  }
}

////////////////////////// Board Actions //////////////////////////

function clearBoard() {
  const emptyStr = Array(SIZE*SIZE).fill('.');
  board = getBoard();
  fillBoard(board, emptyStr);
}

function newPuzzle() {
  clearBoard();
  var puzzleStr = getPuzzleStr();
  board = getBoard();
  fillBoard(board, puzzleStr);
}

function getPuzzleStr() {
  const file = "/data/sudoku-3m.csv";
  const size = 3*Math.pow(10, 6);
  const puzzle_index = myRand(size);
  var data = $.csv.toObjects(file);
  return data[puzzle_index].puzzle;
}

function fillBoard(board, str) {
  inputCells = board.querySelectorAll("input");
  n_cells = inputCells.length
  print(str);
  for (let i = 0; i < n_cells; i++) {
    const empty = str[i] == '.';
    const value = (empty) ? '' : str[i];
    inputCells[i].value = value;
  }
}

function getBoard() {
  return document.getElementById('board');
}

////////////////////////// Helpers //////////////////////////

function createInput(limit) {
  input = document.createElement('input');
  input.classList.add('font-2');
  input.setAttribute("maxlength", limit);
  input.setAttribute("oninput", "this.value=this.value.replace(/[^1-9]/g,'')");
  return input;
}

function myRand(size) {
  return Math.random*size;
}

function print(str) {
  console.log(str);
}