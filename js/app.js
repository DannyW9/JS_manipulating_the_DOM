document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#new-animal');
  const speciesList = document.querySelector('#species-list');
  const deleteButton = document.querySelector('#delete');
  const table = document.querySelector('#tbody');

  // form.addEventListener('submit', (event) => {
  //   event.preventDefault();
  //
  //   const speciesInput = event.target.species.value;
  //   const continentInput = event.target.continent.value;
  //   const statusInput = event.target.status.value;
  //
  //   const newEntry = document.createElement('p');
  //   newEntry.textContent = `${speciesInput} -- ${continentInput} -- ${statusInput}`;
  //   newEntry.classList.add('entry');
  //
  //   speciesList.appendChild(newEntry);
  //   form.reset();
  // })

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const speciesInput = event.target.species.value;
    const continentInput = event.target.continent.value;
    const statusInput = event.target.status.value;

    const row = document.createElement('tr');
    const td1 = row.appendChild(document.createElement('td'));
    const td2 = row.appendChild(document.createElement('td'));
    const td3 = row.appendChild(document.createElement('td'));

    td1.textContent = speciesInput;
    td2.textContent = continentInput;
    td3.textContent = statusInput;

    table.appendChild(row);
    form.reset();
  })

  // deleteButton.addEventListener('click', () => {
  //   while (speciesList.firstChild) {
  //     speciesList.removeChild(speciesList.firstChild);
  //   }
  // });

  deleteButton.addEventListener('click', () => {
    while (table.firstChild) {
      table.removeChild(table.firstChild);
    }
  });









})
