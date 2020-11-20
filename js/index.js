let button = document.querySelector("#submit")
let controller = new Controller()
button.addEventListener('click',function(event){
    let userName = document.querySelector("#input").value
    controller.lookUser(userName)
    controller.lookRepository(userName)
})
