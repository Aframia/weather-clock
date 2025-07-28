setInterval( function (){

let localDate = document.querySelector("#local-date");
let localTime = document.querySelector("#local-time");

let localCity = moment.tz.guess();
let date = moment().tz(`${localCity}`).format("dddd, MMMM d, YYYY");
let time =  moment().tz(`${localCity}`).format("HH:mm ss a");

localDate.innerHTML = date;
localTime.innerHTML = time;

},1000);
let date1 = document.querySelector("#date1");
let time1 = document.querySelector("#time1");

let cityOne = moment().tz("Africa/Lagos");
let dateOne = cityOne.format("dddd, MMMM d, YYYY");
let timeOne =  cityOne.format("HH:mm:ss a");

date1.innerHTML = dateOne;
time1.innerHTML = timeOne;


let date2 = document.querySelector("#date2");
let time2 = document.querySelector("#time2");

let cityTwo = moment().tz("America/Cancun");
let dateTwo = cityTwo.format("dddd, MMMM d, YYYY");
let timeTwo =  cityTwo.format("HH:mm:ss a");

date2.innerHTML = dateTwo;
time2.innerHTML = timeTwo;


let date3 = document.querySelector("#date3");
let time3 = document.querySelector("#time3");

let cityThree = moment().tz("Africa/Nairobi");
let dateThree = cityThree.format("dddd, MMMM d, YYYY");
let timeThree =  cityThree.format("HH:mm:ss a");


date3.innerHTML = dateThree;
time3.innerHTML = timeThree;



function newPage(event){
let cityNew = document.querySelector(".cityNew");
let city = event.target.value;
let newCity = event.target.name;
console.log(newCity);
let date = moment().tz(`${city}`).format("dddd, MMMM d, YYYY");
let time = moment().tz(`${city}`).format("HH:mm:ss a");

cityNew.innerHTML=`
  <div class="city">
            <div class="city-new">
                <h2 id="city-new">${city}</h2>
                <p id="date-new">${date}</p>
            </div>
            <div class="city-time">
                <h3 id="time-new">${time}</h3>
            </div>
            </div>
            <hr>
            <p><a href="index.html">Home</a></p>
    </div>
`;

}

let selectCity = document.querySelector("#selectCity");
selectCity.addEventListener("change",newPage)