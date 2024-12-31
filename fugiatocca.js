let scaleName = "C Major";  // Example value for scaleName

function processScale(scaleName) {
    if (scaleName) {
        // If scaleName is defined and not empty, proceed with processing
        console.log(`Processing the ${scaleName} scale...`);
        
        // Additional logic for processing the scale
        let notes = getNotesForScale(scaleName);
        console.log(`Notes in the ${scaleName} scale: ${notes.join(", ")}`);
    } else {
        // If scaleName is undefined or empty, handle accordingly
        console.log("No scale name provided. Please provide a valid scale name.");
    }
}

function getNotesForScale(scaleName) {
    // This function returns a list of notes for the given scale name
    // For simplicity, we'll use a static example
    const scales = {
        "C Major": ["C", "D", "E", "F", "G", "A", "B"],
        "G Major": ["G", "A", "B", "C", "D", "E", "F#"]
    };
    return scales[scaleName] || [];
}

// Call the function with the example scaleName
processScale(scaleName);
