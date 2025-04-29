
const color = ["red","green","blue"]
let i =0;
let size = 10;
let P =document.getElementById("D");

function ex(){
    let size_1 =P.offsetWidth
    let size_2 =P.offsetHeight
    let N = size+size_1
    let R = size +size_2
    P.style.width = N+"px";
    P.style.height = R+"px";
    i++;
    if(i >2){
        i = 0;
    }
    P.style.backgroundColor = color[i]
    console.log(size_1 +" "+size_2)
    if(size_1 >= 420){
    P.style.width = 200+"px";
    P.style.height = 200+"px";
    }
}

function boxA(){
    
    let size_1 =P.offsetWidth
    let size_2 =P.offsetHeight
   
    let w  = size_1-5;
    let h = size_2-5;
    i--;
    if(i < 0){
        i = 2;
    }
    P.style.backgroundColor = color[i]
    P.style.height = h+"px";
    P.style.width = w +"px";
    if(size_1 < 200 || size_2 < 200){
        P.style.width = 200+"px";
        P.style.height = 200+"px";
    }
    
}
