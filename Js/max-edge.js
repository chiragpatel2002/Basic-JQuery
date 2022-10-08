$(document).ready(function () {
    $("#btn1").click(function () {
        debugger;
        var a= Number($("#side_one").val());
        var b = Number($("#side_two").val());
        var c = Number($("#side_three").val());
        var d = "The Largest Side is"
       
        if (a <= 0 || b <= 0 || c <=0 ){
            alert("Enter Valid Number"); return false;
        }
        
        if (a> b) {
            if (a> c) {
                $("#result").text("Side 1 is largest = " + a);
            }
        }
        if (b > a) {
            if (b > c) {
                $('#result').text("Side 2 is largest = "+ b);
            }
        }
        if (c > a) {
            if (c > b) {
                $('#answer1').text("Side 3 is largest = " + c);
            }
        }
    });
});


$(document).ready(function(){
    $("#btn2").click(function(){
        debugger;
        var x = Number($("#side1").val());
        var y = Number($("#side2").val());
        var z = (x + y);
        var w = (z - 1);
        if (x == " "){
            alert("Enter the value  of side 1"); return false;
        }
        if (y == " "){
            alert("Enter the value of  side 2"); return false;
        }
        if(x < 0 ||  y < 0 ){
            alert("Do you Know maths ?")
            alert("Triangle length cannot be negative");  return false;
        }
        $("#answer2").text("Length of the side 3th is : " + w );
    });
});