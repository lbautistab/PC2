// JSON con los números disponibles
const numbersJSON = {
    "numbers": [15,17,25,11,21,18,19,22,23,25,28]
};

// Función para mostrar los números en la lista
function displayNumbers() {
    const numberList = document.getElementById('numberList');
    numbersJSON.numbers.forEach(number => {
        const listItem = document.createElement('div');
        listItem.className = 'numberItem';
        listItem.textContent = number;
        numberList.appendChild(listItem);
    });
}

// Función para realizar la suma de los números
function sumNumbers() {
    const numbers = numbersJSON.numbers;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    document.getElementById('result').textContent = sum;
}

// Función para realizar la multiplicación de los números
function multiplyNumbers() {
    const numbers = numbersJSON.numbers;
    const product = numbers.reduce((acc, num) => acc * num, 1);
    document.getElementById('result').textContent = product;
}

// Función para borrar el resultado
function clearResult() {
    document.getElementById('result').textContent = '0';
}

// Llama a la función para mostrar los números al cargar la página
displayNumbers();

// Event listener para el botón de suma
document.getElementById('sumButton').addEventListener('click', sumNumbers);

// Event listener para el botón de multiplicación
document.getElementById('multiplyButton').addEventListener('click', multiplyNumbers);

// Event listener para el botón de borrar
document.getElementById('clearButton').addEventListener('click', clearResult);