let btn=document.querySelector(".btn")
let username=document.querySelector(".email")
let popupparent=document.querySelector(".popup-parent")
let popup=document.querySelector(".popup")
let popuptext=document.querySelector(".popuptext")
let X=document.querySelector(".X")

let database=[
    {email:"zara@gmail",passwordd:123},
    {email:"sara@gmail",passwordd:456},
    {email:"ali@gmail",passwordd:789},
    {email:"romina@gmail",passwordd:147},
]


function btnclick(){
    let usernamevalue=username.value
    let checkusername=database.find(function(user){
        return user.email == usernamevalue
    })

    if(checkusername == undefined){
        popupparent.style.display="block"
        popuptext.innerHTML="The entered email is not valid!"
        popup.style.background="#DC143C"



    }else{

        popupparent.style.display="block"
        popuptext.innerHTML="Your password is :"+checkusername.passwordd
        popup.style.background="#228B22"

    }
    

}

function xclick(){
    popupparent.style.display="none"
}

btn.addEventListener("click",btnclick)
X.addEventListener("click",xclick)

