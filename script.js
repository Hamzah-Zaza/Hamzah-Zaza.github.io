// Add an event listener to the search form
const container = document.querySelector('#data-container');

// Fetch data from the API
fetch('https://github.com/Hamzah-Zaza')
  .then(response => response.json())
  .then(data => {
    // Create an element to display the data
    const item = document.createElement('div');
    item.innerHTML = `
      <h2>${data.title}</h2>
      <p>${data.completed ? 'Completed' : 'Not Completed'}</p>
    `;
    // Append the element to the container
    container.appendChild(item);
  })
  .catch(error => console.error(error));
