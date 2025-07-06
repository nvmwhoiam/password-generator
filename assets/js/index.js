const currentLength = document.querySelector('[data-show="length"]');
const generateResult = document.querySelector('[data-generate="result"]');
const resultDiv = document.querySelector('[data-show="result"]');
const rangeDiv = document.querySelector('[data-element="range"]');
const hasUppercase = document.querySelector('[name="hasuppercase"]');
const hasLowercase = document.querySelector('[name="haslowercase"]');
const hasNumbers = document.querySelector('[name="hasnumbers"]');
const hasSpecialChars = document.querySelector('[name="hasspecialchars"]');

const mainCopyPassword = document.querySelector('[data-btn="copy_password_main"]');
const sectionHistory = document.querySelector('.section_history');

const savedPasswords = JSON.parse(localStorage.getItem('savedPasswords')) || [];

function encodeHTML(str) {
    return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function getAllowedChars() {
    return {
        uppercase: 'ABCDEFGHJKLMNPQRSTUVWXYZ',
        lowercase: 'abcdefghijkmnpqrstuvwxyz',
        numbers: '23456789',
        symbols: '!@#$%^&*-_+=',
    };
}

function getSecureRandomInt(max) {
    const randomBuffer = new Uint32Array(1);
    window.crypto.getRandomValues(randomBuffer);
    return randomBuffer[0] % max;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = getSecureRandomInt(i + 1);
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generatePassword(length = 12) { // Default to 12 
    if (length < 8 || length > 128) {
        throw new Error('Password length must be between 8 and 128 characters');
    }

    const chars = getAllowedChars();
    let password = [];
    let allChars = '';

    const selectedTypes = [
        hasUppercase.checked && 'uppercase',
        hasLowercase.checked && 'lowercase',
        hasNumbers.checked && 'numbers',
        hasSpecialChars.checked && 'symbols',
    ].filter(Boolean);

    if (selectedTypes.length === 0) {
        throw new Error('At least one character type must be selected');
    }

    selectedTypes.forEach(type => {
        const charSet = chars[type];
        password.push(charSet[getSecureRandomInt(charSet.length)]);
        allChars += charSet;
    });

    for (let i = password.length; i < length; i++) {
        password.push(allChars[getSecureRandomInt(allChars.length)]);
    }

    mainCopyPassword.removeAttribute('disabled');

    const passwordValue = encodeHTML(shuffleArray(password).join(''));

    const passwordData = {
        id: generateId(),
        password: passwordValue,
        date: new Date().toISOString()
    };

    savedPasswords.push(passwordData);

    localStorage.setItem('savedPasswords', JSON.stringify(savedPasswords));

    historyItem(passwordData);

    return passwordValue;
}

rangeDiv.addEventListener('input', () => {
    const length = rangeDiv.value;
    currentLength.innerText = length;
});

document.addEventListener('click', (e) => {
    const backBtn = e.target.closest('[data-btn="back"]');
    if (backBtn) {
        setClosingToClosed(sectionHistory);
    }

    const historyBtn = e.target.closest('[data-btn="history"]');
    if (historyBtn) {
        setClosedToOpen(sectionHistory);
    }

    const mainCopyBtn = e.target.closest('[data-btn="copy_password_main"]');
    if (mainCopyBtn) {
        copyToClipboard(generateResult.innerText);

        const copied = document.querySelector(".copied");
        copied.style.display = 'block';

        setTimeout(() => {
            copied.style.display = 'none';
        }, 3000);
    }

    const copyBtn = e.target.closest('[data-btn="copy_password"]');
    if (copyBtn) {
        const historyItem = copyBtn.closest('.history_item');
        const passwordText = historyItem.querySelector('.password_text');

        copyToClipboard(passwordText.innerText);

        const smallEl = document.createElement('small');
        smallEl.classList.add('copied');
        smallEl.innerText = "Copied!";
        historyItem.appendChild(smallEl);

        const copied = historyItem.querySelector(".copied");

        setTimeout(() => {
            copied.remove();
        }, 3000);
    }

    const generateBtn = e.target.closest('[data-btn="generate"]');
    if (generateBtn) {
        generateResult.innerHTML = generatePassword(rangeDiv.value);
    }

});

function historyItem(passwordData) {
    const blockHTML = `
        <div class="history_item" data-id="${passwordData.id}">

            <div class="block_item">
                <span class="password_text" title="${passwordData.password}">${passwordData.password}</span>
                <small class="password_date">${passwordData.date}</small>
            </div>

            <button type="button" class="btn_icon" data-btn="copy_password" aria-label="Copy password">
                <i class="icon_copy-regular"></i>
            </button>

        </div>
    `;

    const item = document.querySelector('[data-show="password_history"]');
    if (item) {
        item.insertAdjacentHTML("afterbegin", blockHTML);
    }
}

for (const passwordData of savedPasswords) {
    historyItem(passwordData);
}

function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
}

function setClosedToOpen(selector) {
    selector.setAttribute("data-state", "open");
}

function setClosingToClosed(selector) {
    selector.setAttribute("data-state", "closing");

    selector.addEventListener("animationend", function () {

        selector.setAttribute("data-state", "closed");

    }, { once: true });
}