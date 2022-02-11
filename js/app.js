document.addEventListener('DOMContentLoaded', () => {
    console.log('Round 1');

    const form = document.querySelector('#add-rocky-form');
    form.addEventListener('submit', handleFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);



})


const handleFormSubmit = function(event){
    event.preventDefault();
    console.log(event.target.title.value, 'round two');

    const rockyListItem = createRockyListItem(event.target);
    const rockyList = document.querySelector('#rocky-films');
    rockyList.appendChild(rockyListItem);

    event.target.reset();

}

    const createRockyListItem = function (form) {
        const rockyListItem = document.createElement('li');
        rockyListItem.classList.add('rocky-list-item');

        const resultTitle = document.createElement('p');
        resultTitle.textContent = `Film Title: ${form.title.value}`;
        rockyListItem.appendChild(resultTitle);

        console.log(form.actors.value, 'round three');

        const resultActors = document.createElement('p');
        resultActors.textContent = `Starring: ${form.actors.value}`;
        rockyListItem.appendChild(resultActors);

        console.log(form.year.value, 'round four');

        const resultYear = document.createElement('p');
        resultYear.textContent = `Year of Release: ${form.year.value}`;
        rockyListItem.appendChild(resultYear);

        return rockyListItem;

    }

    const handleDeleteAllClick = function (event) {
        const rockyFilms = document.querySelector('#rocky-films');
        rockyFilms.innerHTML = "";
    }