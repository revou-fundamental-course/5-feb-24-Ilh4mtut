function convertCelciusToFahrenheit() {
    var celciusInput = document.getElementById("Celcius").value;
    var fahrenheitResult = (celciusInput * 9/5) + 32;
    document.getElementById("Fahrenheit").value = fahrenheitResult;
    document.getElementById("kalkulasi").value = celciusInput + " °C * 9/5 + 32 = " + fahrenheitResult + " °F";
}

function resetValues() {
    document.getElementById("Celcius").value = "";
    document.getElementById("Fahrenheit").value = "";
    document.getElementById("kalkulasi").value = "";
}

function reverseValues() {
    var celciusValue = parseFloat(document.getElementById("Celcius").value);
    var fahrenheitValue = parseFloat(document.getElementById("Fahrenheit").value);

    if (isNaN(celciusValue) || isNaN(fahrenheitValue)) {
        alert("Nilai suhu tidak valid. Konversi suhu terlebih dahulu.");
        return;
    }

    var newCelciusValue = (fahrenheitValue - 32) * 5/9;
    var newFahrenheitValue = (celciusValue * 9/5) + 32;

    document.getElementById("Celcius").value = newCelciusValue.toFixed(2);
    document.getElementById("Fahrenheit").value = newFahrenheitValue.toFixed(2);

    document.getElementById("kalkulasi").value = fahrenheitValue + " °F = " + newCelciusValue.toFixed(2) + " °C\n" +
                                                    celciusValue + " °C = " + newFahrenheitValue.toFixed(2) + " °F (hasil pembalikan)";
}
