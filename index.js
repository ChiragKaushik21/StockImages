import { createClient } from "pexels";
const client = createClient("FGYMjSTzlCOrxzVy7RlxK9xYJJIu8FZ4McedX6wFnIQDEnr88dG6Zfep");

const fetchPexelsQuery = (query) => {
    client.photos.search({ query, per_page: 1 }).then((photos) => {
        const pexelsPhotos = photos["photos"];
        let displayImage = pexelsPhotos[0];
        console.log("displayImage:", displayImage);

        const img = document.createElement("img");

        img.setAttribute("src", displayImage.src.original);
        img.setAttribute("alt", displayImage.alt);
        img.setAttribute("width", displayImage.width);
        img.setAttribute("height", displayImage.height);

        const anchorElement = document.getElementById("output");
        anchorElement.innerHTML = "";

        anchorElement.setAttribute("href", displayImage.url);
        anchorElement.setAttribute("target", "_blank");
        anchorElement.appendChild(img);
    });
};

const searchPexelQuery = () => {
    let search = document.getElementById("search");
    let searchValue = "";

    search.addEventListener("input", function () {
        searchValue = search.value;
        console.log(searchValue);
    });

    let searchButton = document.getElementById("searchButton");

    searchButton.addEventListener("click", function () {
        fetchPexelsQuery(searchValue);
    });
};

window.addEventListener("DOMContentLoaded", function () {
    fetchPexelsQuery("Nature");
    searchPexelQuery();
});