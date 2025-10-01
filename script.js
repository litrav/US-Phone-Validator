const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');


const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

const checkPhoneNumber = () => {
    const phoneNumber = userInput.value;

    
    if (phoneNumber === '') {
        alert('Please provide a phone number');
        return;
    }

 
    const isValid = phoneRegex.test(phoneNumber);

    
    resultsDiv.textContent = '';
    resultsDiv.classList.remove('valid', 'invalid');

    
    if (isValid) {
        resultsDiv.textContent = `Valid US number: ${phoneNumber}`;
        resultsDiv.classList.add('valid');
    } else {
        resultsDiv.textContent = `Invalid US number: ${phoneNumber}`;
        resultsDiv.classList.add('invalid');
    }
};

const clearResults = () => {
    resultsDiv.textContent = '';
    userInput.value = '';
    resultsDiv.classList.remove('valid', 'invalid');
};


checkBtn.addEventListener('click', checkPhoneNumber);


userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        checkPhoneNumber();
    }
});

clearBtn.addEventListener('click', clearResults);

