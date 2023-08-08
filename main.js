function handleAddName() {
    //pega o valor digitado pelo usuário pq tem o username como id
    let userName = document.querySelector("#username").value
    //console.log(userName.value)

    //envia o valor captura para o localstorage
    localStorage.setItem("username", userName);
    //localStorage.setItem("password", "123456");
}



function handleAddName() {
    //pega o valor digitado pelo usuário pq tem o username como id
    let userName = document.querySelector("#senha").value
    //console.log(userName.value)

    //envia o valor captura para o localstorage
    localStorage.setItem("senha", userName);
    //localStorage.setItem("password", "123456");
}

