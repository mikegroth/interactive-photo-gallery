


// let card = "";

// for (let i = 1; i <= 9; i++) {
//     card += `<div class="gallery"><a href="photos/0${i}.jpg" data-caption="Image caption"><img src="photos/thumbnails/0${i}.jpg" alt=""></a></div>`;
// }

// for (let i = 10; i <= 12; i++) {
//     card += `<div class="gallery"><a href="photos/${i}.jpg" data-caption="Image caption"><img src="photos/thumbnails/${i}.jpg" alt=""></a></div>`;
// }

// document.querySelector('main').innerHTML = card;

baguetteBox.run('.gallery');


function searchBarInput() {
    var search = document.getElementById('searchbar');
    search.value = search.value.toLowerCase();
    console.log(search.value);
}

   
var input = document.getElementById('searchbar');
input = input.addEventListener("keyup", searchBarInput);

console.log(input);






