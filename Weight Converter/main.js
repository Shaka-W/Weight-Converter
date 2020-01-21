const form = document.querySelector('#weight-converter');
const pounds = document.querySelector('#pounds');
const kilograms = document.querySelector('.kilograms');
const errorMsg = document.querySelector('.error-message');
let userPounds;
kilograms.textContent = 'Your weight in Kilograms is: ';


const hideErrorMsg = () => {
    errorMsg.style.display ='none'
};

const hideUserPounds = () => {
    pounds.value = '';
    kilograms.textContent = 'Your weight in Kilograms is: ';
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (pounds.value === '' || pounds.value < 1) {
        hideUserPounds();
        errorMsg.style.display = 'block';
        setTimeout(hideErrorMsg, 2000);
    } else if (pounds.value >= 1) {
            userPounds = pounds.value;
            userPounds = userPounds * 0.45359237
            kilograms.textContent = 'Your weight in Kilograms is: ';
            kilograms.textContent += userPounds.toFixed(2);
            setTimeout(hideUserPounds, 5000);
    }
   
    
    
    
});