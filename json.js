var request=new XMLHttpRequest();
request.open("GET","https://jsonplaceholder.typicode.com/todos");

request.onreadystatechange=function(){
    if(request.readyState==4 && request.status==200){
        var pro=JSON.parse(request.responseText);
        for (let i = 0; i < pro.length; i++){
            
                var divs=document.createElement("div");
                var paragragh=document.createElement("p");
                var paragragh1=document.createElement("p");
                var childid=document.createTextNode(pro[i].id);
                var childtitle=document.createTextNode(pro[i].title);
                paragragh.appendChild(childid);
                paragragh1.appendChild(childtitle);
                divs.appendChild(paragragh);
                divs.appendChild(paragragh1);
                document.body.appendChild(divs);
                divs.style.border="2px solid orange";
                divs.style.margin="10px 0 0 0";
                divs.style.padding="10px 0 0 0";
                divs.style.textAlign="center";
                divs.style.backgroundColor="royalblue";
                divs.style.color="white";
                
        }
    }
}
request.send();