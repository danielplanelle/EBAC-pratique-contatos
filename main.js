const form = document.getElementById('form-contato');
const nome = [];
const telefone = [];

let linhas = '';


form.addEventListener('submit', function(e) {
  e.preventDefault();

  adicionaLinhaContato();
  atualizaListaContatos();

  /*alert(`Atividade: ${inputNomeCompleto} - Nota: ${inputNumeroTelefone}`);*/

});

function adicionaLinhaContato () {
  const inputNomeCompleto = document.getElementById('nome-completo');
  const inputNumeroTelefone = document.getElementById('numero-tel');

  if (nome.includes(inputNomeCompleto.value)) {
    alert(`Este contato já está cadastrado.`);
  } else {
    nome.push(inputNomeCompleto.value);
    telefone.push(inputNumeroTelefone.value);

    let linha = '<tr>';
    
    linha += '</tr>';
    linha += '</tr>';
    linha += `<td><b>${inputNomeCompleto.value}</b></td>`;
    linha += '</tr>';
    linha += '<tr>';
    linha += `<td>${inputNumeroTelefone.value}</td>`;
    linha += '</tr>';

    linhas += linha;
  }

  inputNomeCompleto.value = '';
  inputNumeroTelefone.value = '';
}

function atualizaListaContatos() {
  const contatoTabela = document.querySelector('tbody');
  contatoTabela.innerHTML = linhas;
}