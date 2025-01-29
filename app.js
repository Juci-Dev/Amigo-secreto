 // Armazenando os nomes
let nomesAleatorios = []; 
// Função adiciona amigo a lista
function adicionarAmigo() {
    // Remove os espaços
    let add = document.querySelector('#amigo').value.trim();
    // Verifica se o campo está vazio
    if (add === "") {
        alert('Campo vazio');
        return;
    }
    // Verifica se o nome já foi inserido
    if (nomesAleatorios.includes(add)) {
        alert('Número já inserido');
        return;
    }
    // Adiciona o nome na lista
    nomesAleatorios.push(add);

    // Irá atualizar a lista
    atualizarLista();

    // Limpa o campo de entrada
    document.querySelector('#amigo').value = "";
}
// Função para atualizar a lista exibida na página
function atualizarLista() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = "";  // Limpa a lista antes de atualizar
    // Cria um item <li> para cada nome na lista
    nomesAleatorios.forEach(nome => {
        let item = document.createElement('li');
        item.textContent = nome;  // Define o nome no item
        lista.appendChild(item);  // Adiciona o item na lista
    });
}
//Função para sortear o amigo
function sortearAmigo() {
     // Gera um índice aleatório baseado no tamanho da lista de amigos
    if (nomesAleatorios.length == 0) {
        alert('Adicione amigos para sortear!');
        return;
    }
    let nomeSorteado = Math.floor(Math.random() * nomesAleatorios.length);
    //Exibe o nome sorteado
    resultado.innerHTML = `o amigo sorteado é: ${nomesAleatorios[nomeSorteado]}`;

}