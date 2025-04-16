document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3001')
        .then(response => response.text())
        .then(data => {
            const messageElement = document.createElement('p');
            messageElement.textContent = data;
            document.body.appendChild(messageElement);
        })
        .catch(error => console.error('Error fetching data:', error));
});
