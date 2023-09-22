/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Eunice Ebevuhe';
const currentYear = date();
let profilePicture = 'images/img.jpg';



/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('favFood');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');




/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${profilePicture}`);





/* Step 5 - Array */
let favFood = ['Jellof rice', 'Sauce gombo','Pasta', 'Moi moi'];
let fav = 'Coconut rice';
favFood.push('Coconut rice');
foodElement.innerHTML += `<br>${favFood}`;
favFood.shift();
foodElement.innerHTML = `<br>${favFood}`;
favFood.pop();
foodElement.innerHTML = `<br>${favFood}`;





