// Define lineR as a function
function lineR() {
    console.log('This is the lineR function');
}

// Alternatively, lineR could be an object with properties
const lineR = {
    type: 'radial',
    draw: function() {
        console.log('Drawing a radial line');
    }
};

// Create an object with the 'line-radial' property
const myObject = {
    'line-radial': lineR,
};

// Accessing the 'line-radial' property
console.log(myObject['line-radial']);

// If lineR is a function, you can call it
if (typeof myObject['line-radial'] === 'function') {
    myObject['line-radial']();
}

// If lineR is an object, you can access its properties
if (typeof myObject['line-radial'] === 'object') {
    console.log(myObject['line-radial'].type); // Outputs: radial
    myObject['line-radial'].draw(); // Outputs: Drawing a radial line
}
