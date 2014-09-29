$(function() {
    $( "#datepicker-in" ).datepicker({
        minDate: 0,
        dateFormat: "d M, y",
        onSelect: function(selected) {
            $("#datepicker-out").datepicker("option","minDate", selected)
        }

    });

    $( "#datepicker-out" ).datepicker({
        dateFormat: "d M, y",
        onSelect: function(selected) {
            $("#datepicker-in").datepicker("option","maxDate", selected)
        }
    });

    $('.popbox').popbox({
        'open'          : '.pop-open',
        'box'           : '.box',
        'arrow'         : '.arrow',
        'arrow-border'  : '.arrow-border',
        'close'         : '.close'
    });
});