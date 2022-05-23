var cells = document.getElementsByClassName("cell");
for (let i = 0; i < cells.length; i++) {
  input = cells[i].getElementsByTagName("input")[0];
  input.setAttribute("maxlength", "1");
  input.setAttribute("oninput", "this.value=this.value.replace(/[^1-9]/g,'');");
}
elementVar.setAttribute("attribute", "value");