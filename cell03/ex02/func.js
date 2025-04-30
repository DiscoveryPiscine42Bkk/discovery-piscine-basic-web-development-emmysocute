
window.setInterval(function (){alert("Please, use me...")},30000)
console.log(R)
function getva(){
    let num =document.getElementById("num1").value
    let num1 =document.getElementById("num2").value
    let sign = document.getElementById("Select").value
    if(num1=="" || num ==""){
        alert("Pls fill it")
        return;
    }
    let ans=eval(`${num}${sign}${num1}`)
    console.log(ans)
   
    if(ans <= 0){
        alert("Error :(")
    }else if(ans ===Infinity || isNaN(ans)){
        alert("It’s over 9000!")
    }else{
        alert(ans)
    }
}

