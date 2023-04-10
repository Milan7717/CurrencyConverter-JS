//creating variable
const currencyFirstEl = document.getElementById("currency-first");

const worthFirstEl = document.getElementById("worth-first");

const currencySecondEl = document.getElementById("currency-second");
const worthsecondEl = document.getElementById("worth-second");

const exchangeRateEl = document.getElementById("exchange-rate");

updateRate();

//creating function

function updateRate() {


    //callling api
    fetch(`https://v6.exchangerate-api.com/v6/9f09eb606984c33632e446d5/latest/${currencyFirstEl.value}`
    )
        .then((response) => response.json())
        .then((data) => {

            //converting data with second currency div
            const rate = data.conversion_rates[currencySecondEl.value];
            console.log(rate);

            //changing value of p inbuttom according to change rate
            exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${rate + " " + currencySecondEl.value}`;

            //for second div input
            worthsecondEl.value = (worthFirstEl.value * rate).toFixed(3)
        });

}

//adding eventlistener
currencyFirstEl.addEventListener("change", updateRate)

currencySecondEl.addEventListener("change", updateRate)

worthFirstEl.addEventListener("input", updateRate)