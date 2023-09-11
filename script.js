

function showGraph(){
    var element = document.getElementById("graph");
    var text = document.getElementById("showGraph");
    element.classList.toggle("d-block");
    text.innerHTML === `Show Graph <span class="fas fa-angle-down arrow"></span>` ?
    text.innerHTML = `Hide Graph <span class="fas fa-angle-up arrow"></span>` :
    text.innerHTML = `Show Graph <span class="fas fa-angle-down arrow"></span>`;
    
}

$(document).ready(function(){
    $('.toast').toast(window.outerWidth >= 960 ? 'show' : 'hide');
});

var input = document.getElementById("search");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        changeData();
    }
});

var myData = ["active", "critical", "recovered", "cases", "deaths", "tests"];

fetch(`https://disease.sh/v3/covid-19/countries/Philippines`)
.then((response)=>{
    return response.json();
})
.then((data)=>{
    document.getElementById("country").innerHTML = data.country;
    document.getElementById("flag").src = data.countryInfo.flag;
    document.getElementById("active").innerHTML = data.active.toLocaleString();
    document.getElementById("critical").innerHTML = data.critical.toLocaleString();
    document.getElementById("recovered").innerHTML = data.recovered.toLocaleString();
    document.getElementById("cases").innerHTML = data.cases.toLocaleString();
    document.getElementById("deaths").innerHTML = data.deaths.toLocaleString();
    document.getElementById("tests").innerHTML = data.tests.toLocaleString();
})

var changeData = () =>{
    var country = document.getElementById("search").value;
    fetch(`https://disease.sh/v3/covid-19/countries/${country}`)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        document.getElementById("country").innerHTML = data.country.toLocaleString();
        document.getElementById("flag").src = data.countryInfo.flag;
        document.getElementById("active").innerHTML = data.active.toLocaleString();
        document.getElementById("critical").innerHTML = data.critical.toLocaleString();
        document.getElementById("recovered").innerHTML = data.recovered.toLocaleString();
        document.getElementById("cases").innerHTML = data.cases.toLocaleString();
        document.getElementById("deaths").innerHTML = data.deaths.toLocaleString();
        document.getElementById("tests").innerHTML = data.tests.toLocaleString();
        
    });
}

var worldData = () =>{
    fetch(`https://disease.sh/v3/covid-19/all`)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{        
        document.getElementById("country").innerHTML = "Wordwide";
        document.getElementById("flag").src = '../images/globe.png';
        document.getElementById("active").innerHTML = data.active.toLocaleString();
        document.getElementById("critical").innerHTML = data.critical.toLocaleString();
        document.getElementById("recovered").innerHTML = data.recovered.toLocaleString();
        document.getElementById("cases").innerHTML = data.cases.toLocaleString();
        document.getElementById("deaths").innerHTML = data.deaths.toLocaleString();
        document.getElementById("tests").innerHTML = data.tests.toLocaleString();
    });
}

function startTime() {
    var today = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('currentDate').innerHTML = today.toLocaleDateString(undefined, options) + " " + today.toLocaleTimeString();
    var t = setTimeout(startTime, 1000);
}
function checkTime(i) {
if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
return i;
}


