//----GLOBAL VARIABLES----//
var donde = window.location.pathname;
console.log(donde);

if (donde == "/senate-data-copia.html") {
    donde = "senate";
}
if (donde == "/house-data-copia.html") {
    donde = "house";
}

var url = "https://api.propublica.org/congress/v1/113/" + donde + "/members.json";

var checkbox = document.getElementsByTagName("input");


fetch(url, {
    headers: {
        "X-API-Key": "Gk4q1LhfyZlB9T5EedIxo3BU7pLqjIl41GO4ZY13"
    }
}).then(function (data) {
    return data.json();
}).then(function (myData) {
    console.log(myData);

    arrayMember = myData.results[0].members;

})

const app = new Vue({
    el: "#app"
})
