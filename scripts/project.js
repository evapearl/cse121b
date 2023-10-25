const fishElement = document.querySelector("Fishes");
let fishList = [];

let displayFishes = (fishes) => {
    fishes.forEach((fish) => {
        let article = document.createElement("article");
        let fishName = document.createElement("h3");
        fishName.textContent = fish.fishName;

        let img = document.createElement('img');
        img.setAttribute("src", fish.imageUrl);
        img.setAttribute("alt", fish.location);

        article.appendChild(fishName);
        article.appendChild(img);

        fishElement.appendChild(article);
    });
};

const getFish = async () => {
    const response = await fetch("https://www.fishwatch.gov/developers");
    if (response.ok) {
        fishList = await response.text();
        displayFishes(fishList);
    };
}
let reset = () => {
    fishElement.innerHTML = "";
}

const sortBy = (fishes) => {
    reset();
    let filter = document.querySelector("#sortBy").value;
    switch (filter) {
        case "pacificIsland":
            displayFishes(fishes.filter((fish) => fish.location.includes("Pacific Island")));
            break;
        case "southeast":
            displayFishes(fishes.filter((fish) => fish.location.includes("Southeast")));
            break;
        case "alaska":
            displayFishes(fishes.filter((fish) => fish.location.includes("Alaska")));
            break;
        case "midatlantic":
            displayFishes(fishes.filter((fish) => fish.location.includes("Mid-Atlantic")));
            break;
        case "westcoast":
            displayFishes(fishes.filter((fish) => fish.location.includes("West Coast")));
            break;
        case "foreign":
            displayFishes(fishes.filter((fish) => fish.location.includes("Foreign")));
            break;
        case "newengland":
            displayFishes(fishes.filter((fish) => fish.location.includes("New England")));
            break;
        case "all":
            displayFishes(fishes);
            break;
    }
};

const fish = fishList;
fishes.sort((a,b => a - b));

const result = fishe.reduce((tally, fish) => {
    tally[fish] =(tally[fish] || 0) +1
    return tally;
}, {});
document.querySelector("#sortBy").addEventListener("change", () => sortBy(fishList));
getFish();