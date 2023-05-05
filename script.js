const descriptionText = document.querySelector('.description-text');
fetch('https://raw.githubusercontent.com/Hamzah-Zaza/test-repository/main/description.txt')
  .then(response => response.text())
  .then(text => {
    descriptionText.textContent = text;
  })
  .catch(error => console.error(error));
