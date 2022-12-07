// Valor armazendo de cidade
const save = localStorage.getItem('respostas_esc');
//console.log(save)

// Estrutura
let titulo     = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso      = document.querySelector('#aviso')
let bar        = document.querySelector('#pro')
//let city       = document.querySelector('#city-text')
var porc       = 0

// Pergunta
let img        = document.querySelector('#tela')
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// Alternativas
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// Article class questoes
let articleImagem   = document.querySelector('.imagem')
let articleQuestoes = document.querySelector('.questoes')
let articleBut      = document.querySelector('#but')
let articleButt     = document.querySelector('#butt')

// Ol li com alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {

    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
}

const q1 = {

    numQuestao   : 1,
    pergunta     : "Qual a cor que seu solo mais se aproxima:",
    alternativaA : "Levemente amarronzado",
    alternativaB : "Normalmente avermelhado",
    alternativaC : "Normalmente escuro ou preto",
    alternativaD : "Normalmente amarelado",
}

const q2 = {

    numQuestao   : 2,
    pergunta     : "Como é a textura do solo:",
    alternativaA : "Possui areia grossa",
    alternativaB : "Possui areia fina",
    alternativaC : "Solo aglomerado",
    alternativaD : "Solo argiloso",
}

const q3 = {

    numQuestao   : 3,
    pergunta     : "Qual o grau de umidade do solo:",
    alternativaA : "Muito seco",
    alternativaB : "Normal",
    alternativaC : "Muito úmido",
    alternativaD : "Não utilizado",
}

const q4 = {

    numQuestao   : 4,
    pergunta     : "Em qual estação do ano estamos neste momento:",
    alternativaA : "Verão (21/12 a 20/03)",
    alternativaB : "Outono (21/03 a 21/06)",
    alternativaC : "Inverno (22/06 a 22/09)",
    alternativaD : "Primavera (23/09 a 20/12)",
}

const q5 = {

    numQuestao   : 5,
    pergunta     : "Qual a faixa de valor disponível para investir em seu negócio:",
    alternativaA : "1,00 a 1000,00 R$",
    alternativaB : "1001,00 a 3000,00 R$",
    alternativaC : "3001,00 a 7000,00 R$",
    alternativaD : "7001,00 a 15000,00 R$",
}

const imagens = ['', '', "/static/Images/Tipo.png", "/static/Images/Nivel.png", 
"/static/Images/Season.png", "/static/Images/Investir.jpg"]
const questoes = [q0, q1, q2, q3, q4, q5]
// Guardar respostas
const respostas_quest = {}

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent   = totalDeQuestoes

function atualizarBarra(questao){
    porc = questao * 20
    toString (porc)
    porc = porc + '%'
    return bar.style.width = porc
}

// Montar primeira questão
pergunta.textContent = q1.pergunta
a.textContent        = q1.alternativaA
b.textContent        = q1.alternativaB
c.textContent        = q1.alternativaC
d.textContent        = q1.alternativaD

// Configurar value da questão
a.setAttribute('value','1A')
b.setAttribute('value','1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')


// Montar as proximas
function proximaQuestao(nQuestao){
    img.setAttribute('src', imagens[nQuestao]), 
    
    numero.textContent = nQuestao
    // Verificar porcentagem
    //console.log(porc)
    if(nQuestao == 3){
        pergunta.textContent = questoes[nQuestao].pergunta
        a.textContent = questoes[nQuestao].alternativaA
        b.textContent = questoes[nQuestao].alternativaB
        c.textContent = questoes[nQuestao].alternativaC
        a.setAttribute('value', nQuestao+'A')
        b.setAttribute('value', nQuestao+'B')
        c.setAttribute('value', nQuestao+'C')
        d.style.display = 'none'
    }else{
        pergunta.textContent = questoes[nQuestao].pergunta
        a.textContent = questoes[nQuestao].alternativaA
        b.textContent = questoes[nQuestao].alternativaB
        c.textContent = questoes[nQuestao].alternativaC
        d.textContent = questoes[nQuestao].alternativaD
        a.setAttribute('value', nQuestao+'A')
        b.setAttribute('value', nQuestao+'B')
        c.setAttribute('value', nQuestao+'C')
        d.setAttribute('value', nQuestao+'D')
        d.style.display = 'block'
        
    }
    atualizarBarra(nQuestao-1)
    //console.log(porc)
}

function bloquearAlternativas(){
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
    d.classList.add('bloqueado')
}

function desbloquearAlternativas(){
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
    d.classList.remove('bloqueado')
}

function verificar(nQuestao, resposta){
    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    console.log("RespU " + respostaEscolhida)
    console.log(resposta)
    //aviso.textContent = respostaEscolhida
    
    if(numeroDaQuestao == 1){
        chave = "color"
    }else if(numeroDaQuestao == 2){
        chave = "texture"
    }else if(numeroDaQuestao == 3){
        chave = "humidity"
        if(respostaEscolhida == "Muito seco"){
            respostaEscolhida = 1
        }else if(respostaEscolhida == "Normal"){
            respostaEscolhida = 2
        }else{
            respostaEscolhida = 3
        }
    }else if(numeroDaQuestao == 4){
        chave = "season"
    }else{
        chave = "value"
    }
    
    respostas_quest[chave] = respostaEscolhida
    //console.log(respostas_quest)

    instrucoes.textContent = "Salvando..."
    
    

    //Bloquear escolhas
    bloquearAlternativas()

    setTimeout(function(){
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes){
            console.log('Fim do questionário!')
            fimDoJogo()
        }else{
            proximaQuestao(proxima)
            setTimeout(function(){
                instrucoes.textContent = "Leia atentamente e escolha sua resposta"
            }, 400)
        }
    }, 180)
    desbloquearAlternativas()   
}

async function requisitaSolum(json_quest) {
    let response = await fetch("http://localhost:8500/api_agrosolum/post_form", {
                                    method: "POST",
                                    headers: {'Content-Type': 'application/json'}, 
                                    body: JSON.stringify(json_quest)
                                }).then(res => res.text()).catch(error => error.text());
    return response;
}

async function fimDoJogo(){
    instrucoes.textContent = "Fim do questionário"
    numQuestao.textContent = ""
    img.setAttribute('src', "/static/Images/Thanks.jpg")
    atualizarBarra(5)
    
    // Conversão para JSON
    var cidade = JSON.parse(save)
    respostas_quest['city'] = cidade.city

    // faz a requisição na api
    var resp = await requisitaSolum(respostas_quest)
    console.log(resp)
    if (resp != '{"detail":"Cidade não encontrada"}' && resp != '{"detail":"Solo não encontrado"}'){
        console.log(resp)

    localStorage.setItem('resposta_solo', resp);  

    aviso.textContent = "Agradecemos a suas respostas"
    setTimeout(function(){
        //location.reload();
        //location.replace("index.html")
    }, 3000)

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""
    d.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')
    d.setAttribute('value', '0')

    //Esconder article
    articleQuestoes.style.display = 'none'
    articleBut.style.display      = 'none'
    articleButt.style.display     = 'none'

    window.location.href = "/resultado"
    }else{

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""
    d.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')
    d.setAttribute('value', '0')

    //Esconder article
    articleQuestoes.style.display = 'none'
    articleBut.style.display      = 'none'
    articleButt.style.display     = 'none'

    window.location.href = "/erro"
    }
        
    
}