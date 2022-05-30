const SIZE = 9;
initMenuItems();
initBoard();
initButtons();

function initBoard() {
  var board = getBoard();
  for (let i = 0; i < SIZE; i++) {
    var section = document.createElement('div');
    section.classList.add('section');
    for (let j = 0; j< SIZE; j++)  {
      var cell = document.createElement('div');
      cell.classList.add('cell', 'flex');
      input = createInput("1");
      cell.appendChild(input);
      section.appendChild(cell);
    }
    board.appendChild(section);
  }
}

function createInput(limit) {
  input = document.createElement('input');
  input.classList.add('font-2');
  input.setAttribute("maxlength", limit);
  input.setAttribute("oninput", "this.value=this.value.replace(/[^1-9]/g,'')");
  return input;
}

function getBoard() {
  return document.getElementById('board')
}

function initButtons() {
  var clearBtn = document.getElementById("clear-btn");
  clearBtn.addEventListener('click', clearBoard);
}

function clearBoard() {
  var board = getBoard();
  inputs = board.querySelectorAll("input");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
}

function initMenuItems() {
  const src = "https://raw.githubusercontent.com/eirikmadland/notion-icons/master/v5/icon4/";
  const href = "./pages/";
  var menuItems = document.querySelectorAll('.menu-item');
  for (let i = 0; i < menuItems.length; i++) {
    var item = menuItems[i];
    item.href = href + item.id + '.html';
    var img = item.getElementsByTagName('img')[0];
    img.src = src + img.id + '.svg';
  }
}