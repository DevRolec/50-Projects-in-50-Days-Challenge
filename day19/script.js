
// SELECT HTML ELEMENTS

const converterForm = document.getElementById("converterForm");

const amountInput = document.getElementById("amount");

const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");

const swapBtn = document.getElementById("swapBtn");
const convertBtn = document.getElementById("convertBtn");

const resultSection = document.getElementById("result");

const convertedAmount = document.getElementById("convertedAmount");
const exchangeRate = document.getElementById("exchangeRate");
const lastUpdated = document.getElementById("lastUpdated");

const errorMessage = document.getElementById("errorMessage");


// FORMAT CURRENCY

function formatCurrency(amount, currency) {

    return new Intl.NumberFormat("en", {
        style: "currency",
        currency: currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);

}


// CONVERT CURRENCY

async function convertCurrency() {

    const amount = Number(amountInput.value);

    const from = fromCurrency.value;
    const to = toCurrency.value;

    // CLEAR PREVIOUS MESSAGES

    errorMessage.textContent = "";
    resultSection.hidden = true;


    // VALIDATE INPUT

    if (
        amountInput.value.trim() === "" ||
        !Number.isFinite(amount) ||
        amount <= 0
    ) {

        errorMessage.textContent =
            "Please enter a valid amount greater than zero.";

        return;
    }


    // DISABLE BUTTON WHILE LOADING

    convertBtn.disabled = true;
    convertBtn.textContent = "Converting...";


    try {

        let rate;
        let rateDate;


        // HANDLE SAME CURRENCY

        if (from === to) {

            rate = 1;
            rateDate = null;

        } else {

            // BUILD API URL

            const apiURL =
                `https://api.frankfurter.dev/v2/rate/${from}/${to}`;


            // REQUEST EXCHANGE RATE

            const response = await fetch(apiURL);


            // CHECK REQUEST STATUS

            if (!response.ok) {

                throw new Error(
                    "Unable to retrieve exchange rate."
                );

            }


            // CONVERT RESPONSE TO JAVASCRIPT OBJECT

            const data = await response.json();


            // EXTRACT RATE AND DATE

            rate = Number(data.rate);
            rateDate = data.date;


            // VALIDATE RETURNED RATE

            if (!Number.isFinite(rate) || rate <= 0) {

                throw new Error(
                    "Invalid exchange rate received."
                );

            }

        }


        // PERFORM CONVERSION

        const result = amount * rate;


        // DISPLAY CONVERTED AMOUNT

        convertedAmount.textContent =
            formatCurrency(result, to);


        // DISPLAY EXCHANGE RATE

        exchangeRate.textContent =
            `1 ${from} = ${rate.toFixed(4)} ${to}`;


        // DISPLAY DATE

        lastUpdated.textContent = rateDate
            ? `Reference rate date: ${rateDate}`
            : "Same currency — no exchange rate required.";


        // SHOW RESULT SECTION

        resultSection.hidden = false;

    }

    catch (error) {

        errorMessage.textContent =
            error.message +
            " Please check your internet connection and try again.";

    }

    finally {

        // RESTORE BUTTON

        convertBtn.disabled = false;
        convertBtn.textContent = "Convert Currency";

    }

}


// HANDLE FORM SUBMISSION

converterForm.addEventListener("submit", function(event) {

    event.preventDefault();

    convertCurrency();

});


// SWAP CURRENCIES

swapBtn.addEventListener("click", function() {

    const temporaryCurrency = fromCurrency.value;

    fromCurrency.value = toCurrency.value;

    toCurrency.value = temporaryCurrency;

    // CLEAR OLD RESULTS

    resultSection.hidden = true;
    errorMessage.textContent = "";

});
