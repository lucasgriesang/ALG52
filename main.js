function ad() {
    let nome = document.getElementById("admin").value
    let senha = document.getElementById("senha").value

    if (nome === "admin") {
        if (senha === "123") {
            document.getElementById("p").innerHTML = "Sucesso ao fazer login"
        }
        else{
            alert("Senha Incorreta")
        }
    }
    else{
        alert("Usuario Incorreto")
    }
}
