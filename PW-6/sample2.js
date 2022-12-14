
console.log('App loaded')

var submitButton = document.getElementById("submit");

var coordinatesAPI = "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDHD5Azdp9yEur5KnVYJAUNf8ZAw6m40F4&address="

async function submit() {
    var inputAddress = document.getElementById("location").value;
    console.log('Submitted : ' + inputAddress);
    // let autoCompleteAddress = new google.maps.places.Autocomplete(inputAddress);

    if (inputAddress !== "" || inputAddress !== null) {
        let finalURL = coordinatesAPI + inputAddress
        console.log('Final url : ' + finalURL);
        let jsonData;
        await
            fetch(finalURL)
                .then(response => response.text())
                .then((data) => { jsonData = JSON.parse(data) })
                .catch((e) => { console.log(e) });
        // console.log(jsonData);
        console.log(jsonData['results']);

        let latitude = jsonData['results'][0]['geometry']['location']['lat'];
        let longitude = jsonData['results'][0]['geometry']['location']['lng'];

        console.log(latitude);
        console.group(longitude);
        let coordinates = new google.maps.LatLng(latitude, longitude);

        // nearBy(coordinates);
        // nearBy(latitude, longitude);
    } else {
        alert('Invalid Input');
    }
}

function findHospitals(coordinates) {
    // let map = 
}
let map;
// function nearBy(latitude, longitude) {
function findHospitals(latlong) {
    console.log('inside nearby function');
    // let latlong = new google.maps.LatLng(latitude, longitude);
    map = new google.maps.Map(document.getElementById('output_map'), {
        center: latlong,
        zoom: 15,
    });

    var request = {
        location: latlong,
        radius: '1500',
        type: ['hospital']
    };

    service = new google.maps.places.PlacesService(map);
    // service.nearbySearch(request, callback);
    service.nearbySearch(request, (results, status) => {
        console.log('inside callback function');
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {

                new google.maps.Marker({
                    map,
                    title: results[i].name,
                    position: results[i].geometry.location,
                });


            }
        }
    });
}

function callback(results, status) {
    console.log('inside callback function');
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {

            new google.maps.Marker({
                map,
                title: results[i].name,
                position: results[i].geometry.location,
            });


        }
    }
}

// initiating google maps api 
// callback function
/* function initMap(){

} */