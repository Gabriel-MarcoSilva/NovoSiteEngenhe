let
	time=2000;

function mudar(){
		setInterval(() => {
			console.log("rodando")
			document.getElementById("noticia1").src="imagens/amoeba.png"
		}, time)
        
}

window.addEventListener("load",mudar)