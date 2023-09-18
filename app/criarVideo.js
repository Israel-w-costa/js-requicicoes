import { conectaApi } from "./conexaAPi.js";

const formulario = document.querySelector ('[data-formulario]');

formulario.addEventListener('submit', evento => {adicionarVideo (evento)});

async function adicionarVideo (evento) {
evento.preventDefault ();
try {
const url = document.querySelector ('[data-url]').value;
const titulo = document.querySelector ('[data-titulo]').value;
const imagem = document.querySelector ('[data-imagem]').value;
const descricao = Math.floor (Math.random () *10).toString () ;
console.log (titulo)

await conectaApi.criaVideos (titulo,descricao,url,imagem); 

window.location.href = "../pages/envio-concluido.html";
} catch (e) {
    alert(e)
}}