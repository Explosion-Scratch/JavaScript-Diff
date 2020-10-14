let originalHTML = `
    <p>Hello Mr. Wayne, decide what to do:</p>
    <ul>
        <li>Call Alfred</li>
        <li>Take Thalia Al Gul to the cinema</li>
        <li>Save Gotham</li>
    </ul>
    <span>Use the mouse to choose an option.</span>
`;

let newHTML = `
<p>Hello Batman, decide what to do:</p>
<ul>
    <li>Kill The Joker</li>
    <li>Save Thalia Al Gul</li>
    <li>Save Gotham</li>
</ul>
<span>Use the batarang to choose an option.</span>
`;

// Diff HTML strings
let output = htmldiff(originalHTML, newHTML);

// Show HTML diff output as HTML (crazy right?)!
document.getElementById("output").innerHTML = output;