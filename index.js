var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var temp_high_lo = document.querySelector('#temp_high_lo')
var Feels_Like = document.querySelector('#Feels_Like')
var wind = document.querySelector('#wind')


apik = "7e3f21edee540e6110af347b55eb1ab2"

function convertion(val){
    return (val - 273).toFixed(2)
}

    btn.addEventListener('click', function(){

        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
        .then(res => res.json())


        .then(data => {

        var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var tempature = data['main']['temp']
            var wndspd = data['wind']['speed']
            var feels = data['main']['feels_like']
            city.innerHTML=`Weather of <span>${nameval}<span>`
            temp.innerHTML = `Temperature: <span>${ convertion(tempature)} C</span>`
            temp_high_lo.innerHTML = `Temperature Min/Max: <span>${ convertion(data['main']['temp_min'])} C / ${ convertion(data['main']['temp_max'])} C</span>`
            Feels_Like.innerHTML = `Feels Like: <span>${ convertion(feels)} C</span>`
            description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
            wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`

        })

       .catch(err => alert('You entered Wrong city name'))
    })