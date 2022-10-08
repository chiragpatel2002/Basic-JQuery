$(document).ready(function () {
    $("#btn3").click(function () {
        debugger;
        var s = Number($('#pol_side').val());
        var z = ((s - 2) * 180);

        if (s == "") {
            alert("Enter number");

            return false;
        }
        if (s < 0) {
            alert("Sides cannot be nagative");

            return false;
        }
        if (s == 1 || s == 2) {
            alert("Not a polygon");

            return false;
        }
        if (s > 0) {
            $('#answer3').text("Sum of all side of polygon : " + z);
        }
    });
});