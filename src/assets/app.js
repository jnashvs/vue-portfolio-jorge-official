window.$ = require("jquery");
window.JQuery = require("jquery");

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})
