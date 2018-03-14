// Select color input
// Select size input

$(document).ready(function() {
    $('#sizePicker').submit(makeGrid);
});

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    event.preventDefault();
    $('#pixelCanvas').html("");
    var inputHeight = $('#inputHeight').val();
    var inputWeight = $('#inputWeight').val();
    var colorPicker = $('#colorPicker').val();
    var table = $('#pixelCanvas');
    var row = "";
    for(var i = 0; i < inputHeight; i++) {
        row += "<tr>";
        for(var j = 0; j < inputWeight; j++) {
            row += "<td></td>";
        }
        row += "</tr>";
    }
    $('#pixelCanvas').append(row);
    $('#pixelCanvas').on('click', 'td', function() {
        $(this).css('background-color', colorPicker);
    });
}
