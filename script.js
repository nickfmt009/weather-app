var button = document.querySelector('.button')
var inputvalue = document.querySelector('.inputvalue')
var name = document.querySelector('.name')
var temp = document.querySelector('.temp')
var desc = document.querySelector('.desc')

button.addEventListener('click',function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid=9acd25294d3ff9196e09ba2291e002c3')
.then(response => response.json())
.then(data => {
var nameValue = data['name']
var tempValue = data['main']['temp']
var descValue = data['weather'][0]['description']

name.innerHTML = nameValue
temp.innerHTML =  tempValue
desc.innerHTML = descValue;
})
.catch(err => alert("wrong city please"))
})



