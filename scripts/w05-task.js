/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');

let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        let article = document.createElement("article");
        let templeName = document.createElement("h3");
        templeName.textContent = temple.templeName;

        let templeimg = document.createElement("img");
        templeimg.setAttribute("src", temple.imageUrl);
        templeimg.setAttribute("alt", temple.location);

        article.appendChild(templeName);
        article.appendChild(templeimg); 
    
    templesElement.appendChild(article);
    });
    console.log(templeList)
};

/* async getTemples Function using fetch()*/
const getTemples = async() => {
    const response =await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok){
        templeList = await response.json();
        displayTemples(templeList);
    };
};

/* reset Function */
const reset = () => {
    templesElement.innerHTML = "";
};

/* sortBy Function */

const sortBy = (temples) => {
    reset();
    let filter = document.querySelector("#sortBy").value;
    switch (filter) {
        case "utah":
            displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
        
            break;

        case "notutah":
            displayTemples(temples.filter((temple) =>!temple.location.includes("Utah")));
        
            break;

        case "older":
            let filter0 = new Date(1950, 0, 1);
            displayTemples(temples.filter((temple) => filter0 > new Date(temple.dedicated)));
        
            break;
        case "all":
            displayTemples(temples);
            break;
    }
};

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList)});
getTemples();