const searchButton = document.querySelector("#Buscar");
const searchInput = document.querySelector("#Entrada");

searchButton.addEventListener("click",search);
searchInput.addEventListener("keypress", searchEnter);

function search(){
  event.preventDefault();
  let inputValue = searchInput.value;
  let url = 'https://www.google.com/search?q=' + inputValue;
  window.location.assign(url);
}

function searchEnter(){
  if (event.keyCode == 13){
    event.preventDefault();
    let inputValue = searchInput.value;
    let url = 'https://www.google.com/search?q=' + inputValue;
    window.location.assign(url);
  }
}
