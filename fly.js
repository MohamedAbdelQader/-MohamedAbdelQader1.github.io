var window;

function newwindow(){
    window = open("","","height=100,width=100");
    
    var index=10;
    setInterval(function (){
        index=index+60;
        console.log(index)
        window.moveTo(index,index);
    },1000)
}

