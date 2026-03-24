document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault()

    var nome = document.getElementById("nome").value
    var email = document.getElementById("email").value
    var msg = document.getElementById("msg").value

    if(nome == "" || email == "" || msg == ""){
        alert("Preencha todos os campos")
        return
    }

    // validação do e-mail
    if(email.indexOf("@") == -1 || email.indexOf(".") == -1){
        alert("Digite um email válido")
        return
    }

    alert("Mensagem enviada com sucesso")

    document.getElementById("form").reset()
})
