const cardHolderInput = document.querySelector(".article-one-input");
const cardHolderSpan = document.querySelector(".div-two-span-1");

cardHolderInput.addEventListener('input', function() {
    cardHolderSpan.textContent = cardHolderInput.value;
});


const cardNumberInput = document.querySelector(".article-two-input");
const cardNumberH2 = document.querySelector(".div-two-h2");
const errorMessage1 = document.querySelector(".error-message-1");

cardNumberInput.addEventListener('input', function() {
    if (/^\d+$/.test(cardNumberInput.value)) {
        cardNumberH2.textContent = cardNumberInput.value;
        errorMessage1.textContent = '';
    } else {
        errorMessage1.textContent = 'Wrong format, numbers only.';
        errorMessage1.style.textTransform = "lowercase";
        errorMessage1.style.color = "red";
        errorMessage1.style.margin = "-30px 0px 20px 0px";
        cardNumberInput.style.borderColor = "red";
    }
});


const monthInput = document.querySelector(".article-three-input-1");
const monthSpan = document.querySelector(".div-two-span-2");

const yearInput = document.querySelector(".article-three-input-2");
const yearSpan = document.querySelector(".div-two-span-4");

const cvcInput = document.querySelector(".article-four-input");
const divOneP = document.querySelector(".div-one-p");


const errorMessage2 = document.querySelector(".error-message-2");
const errorMessage3 = document.querySelector(".error-message-3");

const confirmButton = document.querySelector(".confirm-button");

confirmButton.addEventListener('click', function() {
    const monthValue = monthInput.value;
    const yearValue = yearInput.value;
    const cvcValue = cvcInput.value;

    if (monthValue === '' | yearValue === '' | cvcValue === '' ) {
        errorMessage2.textContent = "Can't be blank.";
        errorMessage2.style.color = "red";
        errorMessage2.style.textTransform = "lowercase"; 
        errorMessage2.style.margin = "-20px 0px 20px 0px";
        monthInput.style.borderColor = "red";
        yearInput.style.borderColor = "red";

        errorMessage3.textContent = "Can't be blank.";
        errorMessage3.style.color = "red";
        errorMessage3.style.textTransform = "lowercase";
        errorMessage3.style.margin = "0px 0px 20px 20px";
        cvcInput.style.borderColor = "red";
    } else {
        location.href = "Interactive-card-thank-you.html";
    }
});

cvcInput.addEventListener('input', function() {
    divOneP.textContent = cvcInput.value;
});

monthInput.addEventListener('input', function() {
    monthSpan.textContent = monthInput.value;
});

yearInput.addEventListener('input', function() {
    yearSpan.textContent = yearInput.value;
});