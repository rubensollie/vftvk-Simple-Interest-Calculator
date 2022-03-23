window.addEventListener('DOMContentLoaded', () => {
    var inputRate = document.getElementById("rate");
    var textRate = document.getElementById("rate-text");

    inputRate.addEventListener('input', (ev) => {
        textRate.innerText = ev.target.value + "%";
    });
});

function compute()
{
    var inputAmount = parseInt(document.getElementById("principal").value);
    var inputRate = parseFloat(document.getElementById("rate").value);
    var inputYears = parseInt(document.getElementById("years").value);

    if (!inputAmount || inputAmount <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    document.getElementById("result-amount").innerText = inputAmount.toString();
    document.getElementById("result-rate").innerText = inputRate.toString() + '%';
    document.getElementById("result-year").innerText = ((new Date()).getFullYear() + parseInt(inputYears)).toString();
    document.getElementById("result-value").innerText = ((inputAmount * (inputRate / 100.0)) * inputYears).toString();

    document.getElementById("result").style.display = "block";
}
        