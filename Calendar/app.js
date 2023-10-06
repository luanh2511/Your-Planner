$(document).ready(function () {
    var currentDate;

    $('#calendar').datepicker({
        showButtonPanel: true,
        inline: true,
        firstDay: 1,
        showOtherMonths: true,
        dayNamesMin: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabádo'],
        appendText: "hell",

        onSelect: function (selectedDate) {
            $("#event-form").show().css("left", $(this).find('.ui-datepicker-current-day').position().left).css("top", ($(this).find('.ui-datepicker-current-day').position().top + 100))
            currentDate = selectedDate;
        }
    });

    $("#submit").click(function (e) {
        e.preventDefault();
        var name = $('#name-field').val();
        var time = $('#time-field').val();
        var money = $('#money-field').val();
        var service = $('#service-field').val();
        $('#events-list').find('tbody').append(
            "<tr><td>" + currentDate + "</td><td>" + name + "</td><td>" + time + "</td><td>" + money + "</td><td>" + service + "</td></tr>"
        );
        $('#name-field').val("");
        $('#time-field').val("");
        $('#money-field').val("");
        $('#service-field').val("");
        $('.card').hide();
    });

    $("#search").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#events-list tbody tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});