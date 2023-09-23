/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
// Declare and instantiate variables for name, year and image 
let fullName = 'Eunice Ebevuhe';
const currentYear = Date();
const profilePicture = 'images/img.jpg';
console.log(`It is now ${currentYear}`);



/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');




/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);





/* Step 5 - Array */
// array of favourite food
let favFoods = ['Jellof rice', 'Pancake','Pasta', 'Moi Moi'];

// loop and display original array
for (let i = 0; i < favFoods.length; i++) {foodElement.innerHTML += `${favFoods[i]}`;
}
foodElement.innerHTML += '<br>';

// add new favourite item
favFoods.push(",chips");

// Display updated array
for (let i = 0; i < favFoods.length; i++){foodElement.innerHTML += `${favFoods[i]}`;
}
foodElement.innerHTML += '<br>';

// remove first item
favFoods.shift();

// display array with item removed
for (let i = 0; i < favFoods.length; i++){foodElement.innerHTML += `${favFoods[i]}`;
}
foodElement.innerHTML += '<br>';

//remove last item
favFoods.pop();

// display final array
for (let i = 0; i < favFoods.length; i++){foodElement.innerHTML += `${favFoods[i]}`;
}
foodElement.innerHTML += '<br>';

foodElement.innerHTML = `<br>${favFoods}`;
favFoods.pop();
foodElement.innerHTML = `<br>${favFoods}`;
