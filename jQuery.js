var v = (String)($("#screen").text());
var result;
var numbers = [];
var operation = [];
var counter = 0;

$("#1").click(function(){ 
    v+="1";
    $("#screen").html(v);
});

$("#2").click(function(){ 
    v+="2";
    $("#screen").html(v);
});

$("#3").click(function(){ 
    v+="3";
    $("#screen").html(v);
});

$("#plus").click(function(){ 
    v+="+";
    $("#screen").html(v);
});

$("#4").click(function(){ 
    v+="4";
    $("#screen").html(v);
});

$("#5").click(function(){ 
    v+="5";
    $("#screen").html(v);
});

$("#6").click(function(){ 
    v+="6";
    $("#screen").html(v);
});

$("#minus").click(function(){ 
    v+="-";
    $("#screen").html(v);
});

$("#7").click(function(){ 
    v+="7";
    $("#screen").html(v);
});

$("#8").click(function(){ 
    v+="8";
    $("#screen").html(v);
});

$("#9").click(function(){ 
    v+="9";
    $("#screen").html(v);
});

$("#multiple").click(function(){ 
    v+="x";
    $("#screen").html(v);
});

$("#clear").click(function(){ 
    v = "";
    numbers = [];
    operation = [];
    counter = 0;
    $("#screen").html(v);
});

$("#0").click(function(){ 
    v+="0";
    $("#screen").html(v);
});

$("#equal").click(function(){ 
    var temp = v;
    for(let i = 0 ; i < temp.length ; i++){ 
        if(temp.charAt(i) == "+"){ 
            numbers[counter] = temp.substring(0,i);
            operation[counter] = "+";
            counter++;
            temp = temp.substring(i+1,temp.length);
            i=0;
        }else if(temp.charAt(i) == "-"){ 
            numbers[counter] = temp.substring(0,i);
            operation[counter] = "-";
            counter++;
            temp = temp.substring(i+1,temp.length);
            i=0;
        }else if(temp.charAt(i) == "x"){ 
            numbers[counter] = temp.substring(0,i);
            operation[counter] = "*";
            counter++;
            temp = temp.substring(i+1,temp.length);
            i=0;
        }else if(temp.charAt(i) == "/"){ 
            numbers[counter] = temp.substring(0,i);
            operation[counter] = "/";
            counter++;
            temp = temp.substring(i+1,temp.length);
            i=0;
        }
    }
    numbers[counter] = temp;
    result = parseInt(numbers[0]);

    for(let i = 1; i < numbers.length ; i++){ 
        if(operation[i-1] == "+"){ 
            result+= parseInt(numbers[i]);
        }else if(operation[i-1] == "-"){ 
            result-= parseInt(numbers[i]);
        }else if(operation[i-1] == "*"){ 
            result*= parseInt(numbers[i]);
        }else if(operation[i-1] == "/"){ 
            result/= parseInt(numbers[i]);
        }
    }
    
    $("#screen").html(result);
    v = result;
    numbers = [];
    operation = [];
    counter = 0;
});

$("#divide").click(function(){ 
    v+="/";
    $("#screen").html(v);
});