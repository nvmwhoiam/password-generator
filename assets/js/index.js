
const currentLength = document.querySelector('[data-show="length"]');
const generateResult = document.querySelector('[data-generate="result"]');
const resultDiv = document.querySelector('[data-show="result"]');
const rangeDiv = document.querySelector('[data-element="range"]');
const hasUppercase = document.querySelector('[name="hasuppercase"]');
const hasLowercase = document.querySelector('[name="haslowercase"]');
const hasNumbers = document.querySelector('[name="hasnumbers"]');
const hasSpecialChars = document.querySelector('[name="hasspecialchars"]');
const generateBtn = document.querySelector('[data-btn="generate"]');

function encodeHTML(str) {
    return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function getAllowedChars() {
    let chars = {
        uppercase: 'QWERTYUIOPASDFGHJKLZXCVBNM',
        lowercase: 'qwertyuiopasdfghjklzxcvbnm',
        numbers: '1234567890',
        symbols: '!@#$%^&*(),.?":{}|<>',
    };
    return chars;
}

function generatePassword(length = 8) {
    const chars = getAllowedChars();
    let password = [];
    let allChars = '';

    if (hasUppercase.checked) {
        password.push(chars.uppercase.charAt(Math.floor(Math.random() * chars.uppercase.length)));
        allChars += chars.uppercase;
    }
    if (hasLowercase.checked) {
        password.push(chars.lowercase.charAt(Math.floor(Math.random() * chars.lowercase.length)));
        allChars += chars.lowercase;
    }
    if (hasNumbers.checked) {
        password.push(chars.numbers.charAt(Math.floor(Math.random() * chars.numbers.length)));
        allChars += chars.numbers;
    }
    if (hasSpecialChars.checked) {
        password.push(chars.symbols.charAt(Math.floor(Math.random() * chars.symbols.length)));
        allChars += chars.symbols;
    }

    for (let i = password.length; i < length; i++) {
        password.push(allChars.charAt(Math.floor(Math.random() * allChars.length)));
    }

    // Shuffle the password array to ensure randomness
    return encodeHTML(password.sort(() => Math.random() - 0.5).join(''));
}

rangeDiv.addEventListener('input', () => {
    const length = rangeDiv.value;
    currentLength.innerHTML = length;
});

generateBtn.addEventListener('click', () => {
    generateResult.innerHTML = generatePassword(rangeDiv.value);
});

resultDiv.addEventListener('click', () => {
    if (generateResult.innerHTML !== 'GENERATE') {
        copyToClipboard(generateResult.innerText);

        const copied = document.querySelector(".copied");
        copied.style.display = 'block';

        setTimeout(() => {
            copied.style.display = 'none';
        }, 3000);
    }
});


function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
}
