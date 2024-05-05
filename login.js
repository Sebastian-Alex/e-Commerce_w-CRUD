// Function to register a new user
function registerUser(email, password) {
    // Check if the user already exists
    if (localStorage.getItem(email)) {
        return false; // User already exists
    } else {
        // Create a new user object
        const newUser = { email: email, password: password };
        // Store the user object in localStorage
        localStorage.setItem(email, JSON.stringify(newUser));
        return true; // Registration successful
    }
}

// Function to authenticate a user
function loginUser(email, password) {
    // Retrieve the user object from localStorage
    const user = JSON.parse(localStorage.getItem(email));
    // Check if the user exists and the password is correct
    if (user && user.password === password) {
        return true; // Authentication successful
    } else {
        return false; // Authentication failed
    }
    
}
