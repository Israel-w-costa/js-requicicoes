async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criaVideos(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    })

    const conexaoConvertida = conexao.json();

    if (!conexao.ok) {
        throw new Error ('Falha ao carregar o video, tente novamente!')
} 
    return conexaoConvertida; 
};

async function pesquisaVideo (termoDePesquisra) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDePesquisra}`);
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida
}

export const conectaApi = {
    listaVideos,
    criaVideos,
    pesquisaVideo
}