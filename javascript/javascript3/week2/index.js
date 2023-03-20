const currency = document.querySelectorAll('.currency');
const button = document.querySelector('.exchange');
const api_url = 'https://open.er-api.com/v6/latest/USD';

// Fetch currency exchange rates from API
const getDataFromApi = async () => {
  try {
    const response = await fetch(api_url);
    const { rates } = await response.json();

    // Populate currency dropdowns with options
    const getCurrencies = (obj) => {
      for (const [key, value] of Object.entries(obj)) {
        const option = `<option value=${value}>${key}</option>`;

        if (key === 'DKK') {
          currency[0].innerHTML += `<option selected="selected" value=${value}>${key}</option>`;
        } else if (key === 'EUR') {
          currency[1].innerHTML += `<option selected="selected" value=${value}>${key}</option>`;
        } else {
          currency[0].innerHTML += option;
          currency[1].innerHTML += option;
        }
      }
    };

    getCurrencies(rates);
  } catch (error) {
    console.log(error);
  }
};

// Convert currency when button is clicked or dropdown value changes
const countAmount = () => {
  const currencyFrom = currency[0].value;
  const currencyTo = currency[1].value;
  const amountValue = document.querySelector('.fromInput').value;

  if (amountValue <= 0) {
    alert('Please put a valid number');
    return;
  }

  const resultInput = document.querySelector('.toInput');
  const result = (amountValue / currencyFrom) * currencyTo;
  resultInput.value = `${result.toFixed(2)}`;
};

// Event listeners
button.addEventListener('click', countAmount);
currency[0].addEventListener('change', countAmount);
currency[1].addEventListener('change', countAmount);

// Fetch currency exchange rates on page load
getDataFromApi();
