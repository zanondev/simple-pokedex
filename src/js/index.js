//variaveis para trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    //evento de clique do usuário para escolher o pokemon
    pokemon.addEventListener('click', () => {
        //removendo o pokemon aberto (fechando)
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        //pegando o id da listagem do pokemon clicado
        const idPokemonSelecionado = pokemon.attributes.id.value
        //pegando o id do card do pokemon clicado
        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado 
        //transformando o card em aberto (abrindo)
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')
        //desativando o pokemon na listagem
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')
        //ativando o pokemon na listagem
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})