const isStatus=document.querySelector('h5')
const AddFriend= document.querySelector('#Add')
var check=0

AddFriend.addEventListener("click",()=>{
    if (check==0) {
        isStatus.innerHTML="Friends"
        isStatus.style.color="green"
        AddFriend.innerHTML="Remove Friend"
        check++
        
    }
    else{
        
        isStatus.innerHTML="Add Friend"
        isStatus.style.color="red"
        AddFriend.innerHTML="Add Friend"
        check--
    }
})

