console.log('%c HI', 'color: firebrick');

document.addEventListener('DOMContentLoaded', function() {
    const imageURL = "https://dog.ceo/api/breeds/image/random/4";
    const breedURL = "https://dog.ceo/api/breeds/list/all";
    const imageContainer = document.getElementById('dog-image-container');
    const breedList = document.getElementById('dog-breeds');
    const dropdown = document.getElementById('breed-dropdown');

    fetch(imageURL)
        .then(response => response.json())
        .then(data => {
            data.message.forEach(imageUrl => {
                const imageElement = document.createElement('img');
                imageElement.src = imageUrl;
                imageContainer.appendChild(imageElement);
            });
        });

    fetch(breedURL)
        .then(response => response.json())
        .then(data => {
            const breeds = Object.keys(data.message);
            breeds.forEach(breed => {
                const listItem = document.createElement('li');
                listItem.textContent = breed;
                breedList.appendChild(listItem);
            });
        });

    breedList.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            event.target.style.color = 'blue';
        }
    });

    dropdown.addEventListener('change', function(event) {
        const selectedLetter = event.target.value.toLowerCase();
        const breedItems = breedList.getElementsByTagName('li');

        Array.from(breedItems).forEach(item => {
            const breedName = item.textContent.toLowerCase();
            if (breedName.startsWith(selectedLetter)) {
                item.style.display = 'list-item';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
