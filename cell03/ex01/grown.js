function ex(){
    const color = ["Red","green","blue","black"]
    let size = 10;
    let P =document.getElementById("D");
    let size_1 =P.offsetWidth
    let size_2 =P.offsetHeight
    let N = size+size_1
    let R = size +size_2
    P.style.width = N+"px";
    P.style.height = R+"px";
    
    
    


}