// function to generate a random color
function randomColor() {
    var hexValues = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += hexValues[Math.floor(Math.random() * 16)];
    }
    return color;
}

// function to generate a color palette
function generatePalette() {
    var colorPalette = document.getElementById('colorPalette');
    colorPalette.innerHTML = ''; // clear any previous colors
    for (var i = 0; i < 5; i++) {
        var color = randomColor();
        colorPalette.innerHTML += '<div style="background-color: ' + color + '">' + color + '</div>';
    }
}