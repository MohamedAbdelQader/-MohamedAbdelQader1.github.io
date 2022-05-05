function EnterEqual(){
    var first= document.getElementById("Answer").value;
    if(first){
        document.getElementById("Answer").value=eval(first);
    }
}

var second = "";

    function EnterNumber(number){
        second+=number;
        document.getElementById("Answer").value=second;
    }