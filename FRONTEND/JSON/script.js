// console.log("=== Hour 1:JSON Basics===")
// let student={
//     name:"MG",
//     age:21,
//     marks:[90,95,98]
// };

// let jsonString=JSON.stringify(student);
// console.log("JSON String:",jsonString);

// let parsedObj=JSON.parse(jsonString);
// console.log("Parsed Object:",parsedObj);

// let books=[
//     {
//     title:"JAVASCRIPT",
//     author:"MC Grahill",
//     prize:150
// },
//     {
//     title:"FULLSTACK",
//     author:"Bell",
//     prize:340
// },
//     {
//     title:"HTML",
//     author:"Abraham",
//     prize:100
// }
// ];
// //console.log(books.prize());
// fetch("https://jsonplaceholder.typicode.com/posts/")
// .then(Response =>Response.json())
// .then(data =>console.log("fetched data",data))
// .catch(error =>console.error("error",error));

//display JSON data on webpage

//predefined city 
//console.log("===waether info fetcher project===");

const cityCoords = {
    "bangalore": { lat: 12.97, lon: 77.59 },
    "delhi": { lat: 28.61, lon: 77.20 },
    "mumbai": { lat: 19.07, lon: 72.87 },
    "london": { lat: 51.51, lon: -0.13 },
    "new york": { lat: 40.71, lon: -74.01 }
};

document.getElementById("fetchBtn").addEventListener("click", () => {
    let city = document.getElementById("cityinput").value.toLowerCase();

    if (!cityCoords[city]) {
        document.getElementById("weather").innerHTML = "City not in the list";
        return;
    }

    let coords = cityCoords[city];
    let url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.current_weather) {
                document.getElementById("weather").innerHTML = `
                    <h3>Weather in ${city}</h3>
                    <p>Temperature: ${data.current_weather.temperature}°C</p>
                    <p>Wind: ${data.current_weather.windspeed} km/h</p>
                    <p>Time: ${data.current_weather.time}</p>
                `;
            } else {
                document.getElementById("weather").innerHTML = "No data available";
            }
        })
        .catch(error => {
            console.error(error);
            document.getElementById("weather").innerHTML = "Error fetching data";
        });
});
