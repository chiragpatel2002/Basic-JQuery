$(document).ready(function () {
    $('#btn4').click(function () {
        debugger;
        
        var num1 = Number($('#num1').val());
        var num2 = Number($('#num2').val());
        var num3 = Number($('#num3').val());
        str="";

        for(i = num1; i <= num2; i++ ){
            if(i % num3 == 0){
                str += i + ", ";
            }
        }
        if(num1 == ""){
            alert ("Enter Starting Number"); return false;
        }
        else if(num2 == ""){
            alert ("Enter Ending Number"); return false;
        }
        else if(num3 == ""){
            alert ("Enter Multiple"); return false;
        }
        else{
        $('#answer4').text("From Range " + num1 + ' to ' + num2 + " Multiple of " + num3 + " are : " +str);
        }
    });
});