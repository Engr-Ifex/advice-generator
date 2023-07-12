window.addEventListener('DOMContentLoaded', FetchData);
let title = document.querySelector('#span');
let advice = document.querySelector('#para');
let btn  = document.querySelector('#btn');

async function FetchData(){
    const response = await fetch('https://api.adviceslip.com/advice');
    const json = await response.json();
    console.log(json);
    title.innerText = ` #${json.slip.id}`;
    advice.innerText = json.slip.advice;
}

btn.addEventListener('click', FetchData)