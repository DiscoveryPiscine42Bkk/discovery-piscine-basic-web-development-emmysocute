// var div = document.createElement("div");
// div.style.width = "100%";
// div.style.height = "50%";
// div.style.border= "solid";
// div.style.backgroundColor = "red";
// document.getElementById("ft_list").appendChild(div);

let btn = document.getElementById("btn_del")
let list =document.getElementById("ft_list")
btn.style.display = "none"
function new_list(){
    let task =prompt("Get you to do : ")
    let task_p = list.innerHTML
    list.innerHTML = "<div class=Text_box>"+task+"</div>"+task_p
    btn.style.display = "block"
}
function Del(){
    if(confirm("You want Delete it ???")){
        list.innerHTML = ""
    btn.style.display = "none"
    }
}