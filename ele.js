let img= ["./1.jpeg","./1.jpeg"];
let hiddenimg=document.getElementById("imagg");
img[0]=document.createElement("img");
img[1]=document.createElement("img");
let haha=document.getElementById("haha");
hiddenimg.addEventListener("click",(eo) => {
    hiddenimg.style.display="none";
    haha.appendChild(img[0]);
    haha.appendChild(img[1]);
    img[0].src="./1.jpeg";
    img[1].src="./1.jpeg";
    img[0].style.float="right";
    img[1].style.position="absolute";
    img[1].style.bottom="0";
})