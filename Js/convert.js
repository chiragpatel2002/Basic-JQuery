$(document).ready(function(){
    $('#btn').click(function(){
        var d = new Date($('#date1').val());
        var one_day = 1000*60*60*24;
        var today = new Date();
        var main_time = (today-d);
        var days = parseInt(main_time/one_day);
        //debugger;
        if (days == 0){
            alert("Looks like you are born today")
        }
        else if(days < 0){
            alert("Looks like you are going to born on " + d)
        }
        else if (d == "Invalid Date"){
            alert("Enter Date")
        }
        else if (days == 1){
            $("#answer").text("You lived for " + days + " day");       
        }
        else {
            $("#answer").text("You lived for " + days + " days");
        }
    });
});