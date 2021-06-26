let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-form__inputAmount");
let currencyElement = document.querySelector(".js-form__select");
let resultElement = document.querySelector(".js-form__result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let currency = currencyElement.value;
    let rateEur = 4.5503;
    let rateGbp = 5.3015;
    let rateUsd = 3.8198;

    switch (currency) {
        case "EUR":
            result = (amount / rateEur).toFixed(2) + ` ${currency}`;
            break;
        case "GBP":
            result = (amount / rateGbp).toFixed(2) + ` ${currency}`;
            break;
        case "USD":
            result = (amount / rateUsd).toFixed(2) + ` ${currency}`;
            break;
    }
            resultElement.value = result;
    
});