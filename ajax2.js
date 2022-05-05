var request=new XMLHttpRequest();
request.open("GET","https://jsonplaceholder.typicode.com/todos");

request.onreadystatechange=function(){
    if(request.readyState==4 && request.status==200){
        var pro=JSON.parse(request.responseText);
        for (let i = 0; i < pro.length; i++){
            if(pro[i].completed==true){
                console.log(pro[i]);
            }
        }
    }
}
request.send();