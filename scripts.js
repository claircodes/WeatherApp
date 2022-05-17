// Clair Parsons
// WebDev II Final Project -> Using openweathermap API to make my own weather App
// ( ͡° ͜ʖ ͡°) 

// #region Variables

const iconImg = document.getElementById('weather-icon');


const myZip = document.querySelector('#zipCode')
const submitButton = document.querySelector('#submitZip');
const userLocation = document.querySelector('#location')
const desc = document.querySelector('#desc') 
const temp = document.querySelector('#temp')
const api = 'c0bd27115980ee7866f0752b84b3b804'; //My API Key

// #location, #desc, and #temp are some of the div id's in my html doc. What they are doing here is connecting the id to my api data to display on the UI

// #endregion

submitButton.addEventListener('click', function() // Click submit and the fun begins!
{

  // I put everything in a giant if and else-if condition based off of my radio buttons. So if option-1 (farenheight) is checked, the api url has units as imperial and vice versa

  // #region Farenheight

    if(document.getElementById('option-1').checked)
    {  
        //alert("hello");
            
      fetch('https://api.openweathermap.org/data/2.5/weather?zip='+myZip.value+'&appid='+api+'&units=imperial') // Modding my url to actually get the data I want from the source
      .then(res => res.json()) // the fancy JSONning stuff

      .then(data =>  // fatty arrow notation for the data
      {

        const { icon } = data.weather[0];
        const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

        var zip = data['zip'] // enter zip into the search bar to get the location 
        var weatherDesc = data['weather']['0']['description'] // get said zip's weather and the description
        var weatherTemp = data['main']['temp'] // gathering the temperature

        let weatherIcon= data.weather[0].icon // grabbing the icon

        userLocation.innerHTML= data['name'] // getting the userLocation variable and displaying the zip code name

        temp.innerHTML = `${weatherTemp}°F` //Converting and displaying the temp data on the website. This is calling my conversion function

        desc.innerHTML = `⁺˚･☾*• ${weatherDesc} •*☽･˚⁺` // the description, with some sparkles

        iconImg.src = iconUrl;

    
      })

      .catch(err => alert('The Zip Code You Entered Is Invalid. It must contain 5 digits 😖')) // Enter a bad zip code? Then this alert pops up. I put the face there to show how dissapointing it is
    }

    // #endregion

  // #region Celcius
    else if (document.getElementById('option-2').checked) // If the user decides Celcius, the api now says that units are metric
    { 
      fetch('https://api.openweathermap.org/data/2.5/weather?zip='+myZip.value+'&appid='+api+'&units=metric') // Notice how I changed unit to metric instead?
      .then(res => res.json()) // the fancy JSONning stuff

      .then(data =>  // fatty arrow notation for the data
      {

        const { icon } = data.weather[0];
        const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

        var zip = data['zip'] // enter zip into the search bar to get the location 
        var weatherDesc = data['weather']['0']['description'] // get said zip's weather and the description
        var weatherTemp = data['main']['temp'] // gathering the temperature

        let weatherIcon= data.weather[0].icon // grabbing the icon

        userLocation.innerHTML= data['name'] // getting the userLocation variable and displaying the zip code name

        temp.innerHTML = `${weatherTemp}°C` //Converting and displaying the temp data on the website. This is calling my conversion function

        desc.innerHTML = `⁺˚･☾*• ${weatherDesc} •*☽･˚⁺` // the description, with some sparkles

        iconImg.src = iconUrl;

    
      })
      .catch(err => alert('The Zip Code You Entered Is Invalid. It must contain 5 digits 😖')) // Enter a bad zip code? Then this alert pops up. I put the face there to show how dissapointing it is

        
    }

    // #endregion


})
