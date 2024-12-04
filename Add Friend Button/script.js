var status1 = document.querySelector("#status")
var update = document.querySelector("#button1")
var check = 0

update.addEventListener("click",function(){
    if (check==0){
        status1.innerHTML = "Friends!!"
        status1.style.color = "Green"
        update.innerHTML="Remove Friend"
        check=1

    }else{
        status1.innerHTML = "Unknown"
        status1.style.color = "red"
        update.innerHTML = "Add Friend"
        check = 0
    }

})