import { conectaApi } from "./conexaAPi.js";
import  constroiCard  from "./mostraVideo.js";

const inputPesquisar = document.querySelector('[data-pesquisar]')

async function buscaVideo (evento) {
    evento.preventDefault ()

    const pesquisarValor = inputPesquisar.value
    const buscar = await conectaApi.pesquisaVideo (pesquisarValor)
    const lista =document.querySelector ('[data-lista]')
    
    while (lista.firstChild) {
        lista.removeChild (lista.firstChild)
    }

   
    buscar.forEach(elemento =>  lista.appendChild(
        constroiCard (elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))
    
        if (buscar.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__erro">video não encontrado</h2>`
    }
}

const botaoPesquisar = document.querySelector('[data-botao-pesquisar]')

botaoPesquisar.addEventListener ('click', evento =>{buscaVideo (evento) })
