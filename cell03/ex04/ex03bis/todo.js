// var div = document.createElement("div");
// div.style.width = "100%";
// div.style.height = "50%";
// div.style.border= "solid";
// div.style.backgroundColor = "red";
// document.getElementById("ft_list").appendChild(div);
// btn.style.display = "none"
// let btn = document.getElementById("btn_del")

let list =document.getElementById("ft_list")
const todos =[]
let x = 0
console.log(document.cookie)
const lists = decodeURIComponent(document.cookie).split(",")
// console.log(lists)
const result = lists.filter(function s(word){
   return word != ""
})
// console.log(result)

web_open()
function web_open(){
    for(let i =0 ; i < result.length ; i++){
        let task_p = list.innerHTML
        list.innerHTML = `<div class=Text_box onclick=Del(id) id=${x++}>`+result[i]+"</div>"+task_p
    }
}

function new_list(){
    let task =prompt("What do you want to do ? " )
    if(task ===""){
        alert("Try Again ")
        return
    }
    let task_p = list.innerHTML
    list.innerHTML = `<div class=Text_box onclick=Del(id) id=${x}>`+task+"</div>"+task_p
    result[x++] = task 
    // console.log(x)
    console.log(result)
    document.cookie = encodeURIComponent(result)

    let file = document.cookie
    console.log(file)
    // btn.style.display = "block"
}

function Del(num){
    // console.log("this"+num)
    if(confirm("Do you want to delete it ???")){
        let a = document.getElementById(`${num}`)
        a.remove()
        result[num]=null
        document.cookie = encodeURIComponent(result)
    }
}