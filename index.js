function renderAnimalDetails(details) {
    const animalDetails = document.getElementById("animal-details");
    animalDetails.innerHTML = `
       <p> id :${details.id}</p>
        <p>name:${details.name}</p>
        <img src="${details.image}" >
       <p id ="count">Votes:${details.votes}</P>
       <button id ="votesButton">Add Votes </button>
       <button  id="resetButton">Reset</button>
        `;
        
        const votesButton=document.getElementById("votesButton")
     
        votesButton.addEventListener('click',function(){
          details.votes++
           const votesCount=document.getElementById("count")
           votesCount.textContent=`Votes:${details.votes}`
        })
        const resetButton=document.getElementById("resetButton")
        resetButton.addEventListener('click',function(){
          details.votes=0
          const votesCount=document.getElementById("count")
          votesCount.textContent=`Votes:${details.votes}`
        })
     
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
  