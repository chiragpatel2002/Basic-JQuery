$(document).ready(function () {
    $('#btn5').click(function () {
        debugger;
        
        var num1 = Number($('#num_one').val());
        var sum = 0;

        for( var i = 0; i <= num1; i++ ){
                sum += i*i;
            }
        if(num1 == ""){
            alert("Enter Numner"); 
            
            return false;
        }
        else if(num1 == 1){            
            $('#answer5').text("The Sum of : 1^1 = " + sum);
        }
        else if (num1 == 2){
            $('#answer5').text("The Sum of : 1^1 + 2^2 = " + sum);
        }
        else if (num1 == 3){
            $('#answer5').text("The Sum of : 1^1 + 2^2 + 3^3 = " + sum);
        }
        else if (num1 == 4){
            $('#answer5').text("The Sum of : 1^1 + 2^2 + 3^3 + 4^4= " + sum);
        }
        else if (num1 ==5){
            $('#answer5').text("The Sum of : 1^1 + 2^2 + 3^3 + 4^4 + 5^5 = " + sum);
        }
        else{
            $('#answer5').text("The Sum of : 1^1 + 2^2 + 3^3 ..... + " + num1 + "^" + num1 + " = " + sum);
        }
    });
});
