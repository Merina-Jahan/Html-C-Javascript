function checkAge() {
    // Get the age value from the input field
    const age = document.getElementById('ageInput').value;
    const result = document.getElementById('result');

    // Check if the age input is valid
    if (age === '') {
        result.textContent = 'Please enter your age.';
    } else {
        // Convert the age to a number
        const ageNum = Number(age);

        // Determine the age category
        if (ageNum < 0) {
            result.textContent = 'Age cannot be negative.';
        } else if (ageNum <= 12) {
            result.textContent = 'You are a child.';
        } else if (ageNum <= 19) {
            result.textContent = 'You are a teenager.';
        } else if (ageNum <= 64) {
            result.textContent = 'You are an adult.';
        } else {
            result.textContent = 'You are a senior.';
        }
    }
}
