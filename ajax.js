var request=new XMLHttpRequest();
request.open("GET","https://www.googleapis.com/books/v1/volumes?q=${bookName}")

request.onreadystatechange=function(){
    if(request.readyState==4 && request.status==200){
        console.log(request.responseText)
    }
}
request.send();