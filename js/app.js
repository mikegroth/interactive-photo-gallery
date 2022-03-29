
baguetteBox.run('.gallery');


function searchBarInput() {
    
    var search = document.getElementById('searchbar');
    search.value = search.value.toLowerCase();

    for ( let landscapeNumber = 1; landscapeNumber <=12; landscapeNumber++ ) {
    
        let caption = document.getElementById(`landscape-${landscapeNumber}`);
        caption = caption.getAttribute('data-caption').toLowerCase();
    
        const includesSearch = caption.includes(`${search.value}`);

        if (includesSearch) {
            document.getElementById(`landscape-${landscapeNumber}`).style.display = "initial";
        } else {
            document.getElementById(`landscape-${landscapeNumber}`).style.display = "none";
        }
    }

}

document.addEventListener("keyup", searchBarInput);













