// A global variable
let logCount = 0;

// --- Part 2: JavaScript Functions (Scope, Parameters & Return) ---

/**
 * A custom function to perform calculations on two numbers.
 * @param {number} num1 The first number.
 * @param {number} num2 The second number.
 * @returns {object} An object containing the sum and product.
 */
function calculateValues(num1, num2) {
    // This is a local variable, only accessible inside this function.
    const sum = num1 + num2;
    const product = num1 * num2;
    
    // You can access the global variable here.
    logCount++;
    console.log(Calculation #${logCount}: Summing ${num1} and ${num2}.);
    
    // The function returns an object with multiple values.
    return {
        sum: sum,
        product: product
    };
}

// Get elements for the function demo
const calculateBtn = document.getElementById('calculate-btn');
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const functionOutput = document.getElementById('function-output');

// Event listener for the calculation button
calculateBtn.addEventListener('click', () => {
    // Get values from the input fields
    const val1 = parseInt(num1Input.value);
    const val2 = parseInt(num2Input.value);

    // Call the function and get the returned object.
    const results = calculateValues(val1, val2);

    // Display the results on the page
    functionOutput.innerHTML = `
        <p><strong>Sum:</strong> ${results.sum}</p>
        <p><strong>Product:</strong> ${results.product}</p>
    `;
});


// --- Part 3: Combining CSS & JS ---

/**
 * A reusable function to toggle an active class on an element.
 * @param {HTMLElement} element The DOM element to toggle the class on.
 * @param {string} className The name of the class to toggle.
 */
function toggleActiveClass(element, className) {
    element.classList.toggle(className);
}

// Get elements for the interactive animations
const triggerBtn = document.getElementById('trigger-animation');
const jsAnimatedBox = document.querySelector('.js-animated-box');
const cardFlip = document.getElementById('card-flip');

// Event listener to trigger a CSS animation
triggerBtn.addEventListener('click', () => {
    // Add the 'active' class to trigger the animation defined in CSS
    jsAnimatedBox.classList.add('active');

    // Remove the class after the animation finishes
    // This allows the animation to be re-triggered on the next click
    setTimeout(() => {
        jsAnimatedBox.classList.remove('active');
    }, 1000); // Wait for the animation duration (0.5s) plus a small buffer
});

// Event listener for the card flip
cardFlip.addEventListener('click', () => {
    // Use the reusable function to toggle the 'flipped' class
    toggleActiveClass(cardFlip, 'flipped');
});