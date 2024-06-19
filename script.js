function convertTemperature() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    let celsiusValue;

    // Convert the input value to Celsius---------------------------------------------------------------------------------
    switch(inputUnit) {
        case 'Celsius':
            celsiusValue = inputValue;
            break;
        case 'Fahrenheit':
            celsiusValue = (inputValue - 32) * 5 / 9;
            break;
        case 'Kelvin':
            celsiusValue = inputValue - 273.15;
            break;
        default:
            celsiusValue = 0;
    }

    let outputValue;

    // Convert the Celsius value to the desired output unit------------------------------------------------------------
    switch(outputUnit) {
        case 'Celsius':
            outputValue = celsiusValue;
            break;
        case 'Fahrenheit':
            outputValue = celsiusValue * 9 / 5 + 32;
            break;
        case 'Kelvin':
            outputValue = celsiusValue + 273.15;
            break;
        default:
            outputValue = 0;
    }

    document.getElementById('outputValue').innerText = `Converted Value: ${outputValue.toFixed(2)} ${outputUnit}`;
}
