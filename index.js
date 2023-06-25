function renderAnimalDetails(details) {
    const animalDetails = document.getElementById("animal-details");
    animalDetails.innerHTML = `
       <p>${details.id}</p>
        <p>${details.name}</p>
        <img src="${details.image}" alt="Image of ${details.name}">
        <p>Votes: ${details.votes}</p>`;
      
  }
  
  function getAnimalDetails(id) {
    fetch(`http://localhost:3000/characters/${id}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(details) {
        renderAnimalDetails(details);
      });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const animalNames = document.querySelectorAll('.animal-name');
    animalNames.forEach(function(name) {
      name.addEventListener('click', function() {
        const id = name.dataset.id;
        document.getElementById("animal-details").innerHTML = ""; 
        getAnimalDetails(id);
      });
    });
  });
  