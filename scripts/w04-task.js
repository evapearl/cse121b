/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name : "Eunice Ebevuhe",
    photo : "images/mg1.jpg",
    favoriteFoods: [
        "Jellof rice",
        "Pasta",
        "Okro soup and Eba"
    ],
    hobbies : [
        "Singing",
        "Reading",
        "Watching movies",
        "Hiking"
    ],
    placesLived : []

};



/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place : "Benin City, Nigeria",
        length : "16 years"
    }    
);

myProfile.placesLived.push(
    {
        place : "Asaba, Nigeria",
        length : "7 years"
    }    
);

myProfile.placesLived.push(
    {
        place : "Abidjan West, Cote D'ivoire",
        length : "4 months"
    }    
);


/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */

document.querySelector('#photo').src= myProfile.photo;

document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach( food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach( hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});


/* Places Lived DataList */

myProfile.placesLived.place.forEach( place => {
    let dt = document.createElement('dt');
    let text = place;
    dt.appendChild(text)
    document.getElementById('#places-Lived').appendChild(dt);
});

myProfile.placesLived.forEach( length => {
    const dd = document.createElement('dd');
    let text = length;
    dd.appendChild(text);
    document.querySelector('#places-Lived').append(dd);
});

