//Text box code
function logSelection(event) {
  const log = document.getElementById('log');
  const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
  log.textContent = `Highlighted Text: ${selection}`;
  selectedtext = selection;
}

const input = document.querySelector('textarea');
input.addEventListener('select', logSelection);

document.onclick = hideMenu; 
document.oncontextmenu = rightClick; 

function hideMenu() { 
    document.getElementById("contextMenu") 
        .style.display = "none" 
} 

function rightClick(e) { 
    e.preventDefault(); 

    if (document.getElementById("contextMenu") .style.display == "block"){ 
         hideMenu(); 
    }else{ 
         var menu = document.getElementById("contextMenu")      
         menu.style.display = 'block'; 
         menu.style.left = e.pageX + "px"; 
         menu.style.top = e.pageY + "px"; 
        dictionaryLink();
    } 
}

function dictionaryLink() {
  var link = document.getElementById("right_click_dropdown_define");
  link.getAttribute("href");
  link.setAttribute("href",
  "https://www.dictionary.com/browse/" + selectedtext);
};

let selectedtext = "";

function show(){
  document.getElementById("page").classList.toggle("active");
}

document.getElementById("Make_Note").addEventListener("click", Note);
function Note(){
  let lam = document.createElement("p");
  lam.innerHTML = selectedtext;
  document.getElementById("page").appendChild(lam);
} 