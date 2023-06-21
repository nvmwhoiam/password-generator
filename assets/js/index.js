window.addEventListener("load", function () {
    const currentEl = document.getElementById("length")
    const resultEl = document.getElementById("result");
    const resultContEl = document.getElementById("resultCont");
    const rangeEl = document.getElementById("range");
    const upperEl = document.getElementById("uppercase");
    const lowerEl = document.getElementById("lowercase");
    const numbersEl = document.getElementById("numbers");
    const symbolsEl = document.getElementById("symbols");
    const generateEl = document.getElementById("generate");

    let range = rangeEl.value;
    const hasUpper = upperEl.checked;
    const haslowerEl = lowerEl.checked;
    const hasnumbersEl = numbersEl.checked;
    const hassymbolsEl = symbolsEl.checked;

    function AllowedChars(uppercase, lowercase, numbers, symbols) {
        let pwd = "";

        if (uppercase) {

            pwd += "QWERTYUIOPASDFGHJKLZXCVBNM";

        }

        if (lowercase) {

            pwd += "qwertyuiopasdfghjklzxcvbnm";

        }

        if (numbers) {

            pwd += "1234567890";

        }

        if (symbols) {

            pwd += "@$!%*#?&";

        }

        return pwd;
    }

    function generatePassword1(length = 8) {

        // let pwd = AllowedChars(upperEl.checked, lowerEl.checked, numbersEl.checked, symbolsEl.checked);
        let pwd = AllowedChars(upperEl.checked, lowerEl.checked, numbersEl.checked, true);

        let retVal = "";

        for (var i = 0, n = pwd.length; i < length; ++i) {
            retVal += pwd.charAt(Math.floor(Math.random() * n));
        }

        return retVal;

    }

    console.log(generatePassword1(8))

    rangeEl.addEventListener("input", () => {

        currentEl.innerHTML = rangeEl.value;
        resultEl.innerHTML = generatePassword1(rangeEl.value);

    });

    generateEl.addEventListener("click", () => {

        resultEl.innerHTML = generatePassword1(rangeEl.value);

    });

    resultContEl.addEventListener("click", () => {

        if (resultEl.innerHTML !== "GENERATE") {

            copyText(resultEl);

        }

    });

    function copyText(e) {

        navigator.clipboard.writeText(e.innerText);
    }
});