function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let modelo = ""; 
    let descricao = "";
    let beneficio = "";
    let fipe = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        modelo = dado.modelo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        beneficio = dado.beneficio.toLowerCase()
        // se modelo includes campoPesquisa
        if (modelo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || beneficio.includes(campoPesquisa) || fipe.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.modelo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <p class="descricao-meta">${dado.beneficio}</p> 
                <p class="descricao-meta">R$ ${dado.fipe},00</p>                 
                <a href=${dado.link} target="_blank">Comprar</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}