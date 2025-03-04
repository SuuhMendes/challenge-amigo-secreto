//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos=[];
const listaAmigos= document.getElementById("listaAmigos");

function adicionarAmigo(){

    const nomeamigo= document.getElementById("amigo").value;
    if (nomeamigo === '') {
    alert("Por favor, insira um nome.");
    return;
}
    amigos.push(nomeamigo);

      listaAmigos.innerHTML="";
   
   for (let i = 0; i < amigos.length; i++) {
    listaAmigos.innerHTML+=`<li>${amigos[i]}</li>`;
    
    document.getElementById("amigo").value= "";
   }
   
    
    }

     console.log(amigos);

function sortearAmigo() {
        let tamanho = amigos.length;
    
        if (tamanho === 0) {
            alert("Adicione amigos antes de sortear!");
            return;
        }
    
        let numero = parseInt(Math.random() * tamanho); 
    
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = `Amigo secreto sorteado é: ${amigos[numero]}`;
        listaAmigos.innerHTML=""
        soltarConfetes();

    }

    // funçao criada para animar o sorteador
    function soltarConfetes() {
        for (let i = 0; i < 50; i++) {
            let confete = document.createElement("div");
            confete.classList.add("confete");
            
            confete.style.left = Math.random() * window.innerWidth + "px";
            confete.style.top = "-50px";
            
          
            confete.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            
            let tamanho = Math.random() * 10 + 5;
            confete.style.width = tamanho + "px";
            confete.style.height = tamanho + "px";

            document.body.appendChild(confete);
            setTimeout(() => {
                confete.remove();
            }, 2000);
        }}
    
    