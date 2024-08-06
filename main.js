const formAtividade = document.getElementById('form-atividade');
const imgAprovado = '<img src="/images/aprovado.png" alt="Emoji festejando">';
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const imgReprovado = '<img src="/images/reprovado.png" alt="Emoji triste">';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const atividadesGerais = [];
const notasGerais = [];


formAtividade.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaMedia()
});

function adicionaLinha() {
    const campoAtividade = document.getElementById('atividade-aluno');
    const campoNota = document.getElementById('nota-aluno');
    const tabelaResultado = document.querySelector('tbody');

    if (atividadesGerais.includes(campoAtividade.value)) {
        alert(`A atividade ${campoAtividade.value} já existe`)
    }else{
        atividadesGerais.push(campoAtividade.value);
        notasGerais.push(parseFloat(campoNota.value));

        let linha = '<tr>';
        linha += `<td>${campoAtividade.value}</td>`;
        linha += `<td>${campoNota.value}</td>`;
        linha += `<td>${campoNota.value >= 7 ? imgAprovado : imgReprovado}</td>`;
        linha += `<tr>`;

        tabelaResultado.insertAdjacentHTML('beforebegin', linha);

        campoAtividade.value = '';
        campoNota.value = '';
    }
}

function atualizaMedia() {
    const mediaFinal = calculaMedia();

    document.getElementById('media_final-valor').innerHTML = mediaFinal;
    document.getElementById('media_final-resultado').innerHTML = mediaFinal >= 7 ? spanAprovado : spanReprovado;
}

function calculaMedia() {
    let sum = 0;

    notasGerais.forEach(function (item) {
        sum += item;
    })

    return sum / notasGerais.length;
}