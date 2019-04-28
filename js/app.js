document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#new-animal');
  const speciesList = document.querySelector('#species-list');
  const deleteButton = document.querySelector('#delete');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const speciesInput = event.target.species.value;
    const continentInput = event.target.continent.value;
    const statusInput = event.target.status.value;

    const newEntry = document.createElement('p');
    newEntry.textContent = `${speciesInput} -- ${continentInput} -- ${statusInput}`;
    newEntry.classList.add('entry');

    speciesList.appendChild(newEntry);
    form.reset();
  })


  deleteButton.addEventListener('click', () => {
    while (speciesList.firstChild) {
      speciesList.removeChild(speciesList.firstChild);
    }
  });









})
