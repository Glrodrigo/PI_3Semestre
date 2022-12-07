
const image      = ["/static/Images/Lato.png", "/static/Images/Argi.jpg", "/static/Images/Neo.jpg", 
"/static/Images/Camb.jpg", "/static/Images/Cherno.jpg", "/static/Images/Espo.jpg", "/static/Images/Gle.jpeg"]
//Imagem dos cards
const product    = ["/static/Images/Cafe.jpg", "/static/Images/Milho.jpg", "/static/Images/Arroz.jpg", "/static/Images/Gira.jpg", "/static/Images/Maca.jpg", 
"/static/Images/Uva.jpg", "/static/Images/Beterraba.jpg", "/static/Images/Laranja.jpg", "/static/Images/Aveia.jpg", "/static/Images/Soja.jpg", 
"/static/Images/Manga.jpg", "/static/Images/Banana.jpg", "/static/Images/Algodao.jpg", "/static/Images/Cana.jpg", "/static/Images/Trigos.jpg", 
"/static/Images/Lentilha.jpg", "/static/Images/Edamame.jpg", "/static/Images/Feijao.jpeg", "/static/Images/Abacaxi.jpg"]

//Resultados solo
let img          = document.querySelector('#photo')
let names        = document.querySelector('h4')
let texture      = document.querySelector('#textI')
let color        = document.querySelector('#textII')
let season       = document.querySelector('#textIII')
let seed         = document.querySelector('#textIV')

//Container card
let item         = document.querySelector('#item')
let sell         = document.querySelector('#sell')
let container    = document.querySelector('#loupe_container')
let empty        = document.querySelector('#empty')
empty.style.display    = "none"

//Resultados card 1
let desc = document.querySelector("#card_descI")
let fts  = document.querySelector("#ft_cardI")
let txt  = document.querySelector("#txt_cardI")
let val  = document.querySelector("#value_cardI")
let vs  = document.getElementById("visitI")
//Resultados card 2
let desc2 = document.querySelector("#card_descII")
let fts2  = document.querySelector("#ft_cardII")
let txt2  = document.querySelector("#txt_cardII")
let val2  = document.querySelector("#value_cardII")
let vs2  = document.getElementById("visitII")
//Resultados card 3
let desc3 = document.querySelector("#card_descIII")
let fts3  = document.querySelector("#ft_cardIII")
let txt3  = document.querySelector("#txt_cardIII")
let val3  = document.querySelector("#value_cardIII")
let vs3  = document.getElementById("visitIII")
//Resultados card 4
let cardfiv = document.querySelector("#cardfIV")
let desc4 = document.querySelector("#card_descIV")
let fts4  = document.querySelector("#ft_cardIV")
let txt4  = document.querySelector("#txt_cardIV")
let val4  = document.querySelector("#value_cardIV")
let vs4  = document.getElementById("visitIV")
//Resultados card 5
let desc5 = document.querySelector("#card_descV")
let fts5  = document.querySelector("#ft_cardV")
let txt5  = document.querySelector("#txt_cardV")
let val5  = document.querySelector("#value_cardV")
let vs5  = document.getElementById("visitV")
//Resultados card 6
let desc6 = document.querySelector("#card_descVI")
let fts6  = document.querySelector("#ft_cardVI")
let txt6  = document.querySelector("#txt_cardVI")
let val6  = document.querySelector("#value_cardVI")
let vs6  = document.getElementById("visitVI")
//Resultados card 7
let desc7 = document.querySelector("#card_descVII")
let fts7  = document.querySelector("#ft_cardVII")
let txt7  = document.querySelector("#txt_cardVII")
let val7  = document.querySelector("#value_cardVII")
let vs7  = document.getElementById("visitVII")
//Resultados card 8
let desc8 = document.querySelector("#card_descVIII")
let fts8  = document.querySelector("#ft_cardVIII")
let txt8  = document.querySelector("#txt_cardVIII")
let val8  = document.querySelector("#value_cardVIII")
let vs8  = document.getElementById("visitVIII")

async function clickSeed(seed) {
    await fetch("http://localhost:8500/api_agrosolum/update_seed_clicks", {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({"seed":seed})
    })
}

const json_solos = localStorage.getItem('resposta_solo');


if(json_solos == '"Latossolos"'){
    //Resultados solo
    photo.setAttribute('src', image[0])
    names.textContent   = "Latossolos"
    texture.textContent = "Argilosa, com alguns granulos"
    color.textContent   = "Castanho ou vermelho"
    season.textContent  = "O plantio é mais adequado no inverno"
    seed.textContent    = "Plantações de algodão, café, cana-de-açúcar, milho e soja são mais indicadas"
    //Resultados card 1 
    desc.textContent  = "20% off"
    fts.setAttribute('src', product[8])
    txt.textContent   = "Sementes de Aveia(1,5kg)"
    val.textContent   = "R$ 35,90"
    vs.onclick = function() {clickSeed('Aveia')}
    //Resultado card 2 não foi alterado
    vs2.onclick = function() {clickSeed('Milho')}
    //Resultados card 3
    desc3.textContent  = "7% off"
    fts3.setAttribute('src', product[9])
    txt3.textContent   = "Sementes de Soja(1,0kg)"
    val3.textContent   = "R$ 75,60"
    vs3.onclick = function() {clickSeed('Soja')}
    //Resultados card 4
    desc4.textContent  = "7% off"
    fts4.setAttribute('src', product[10])
    txt4.textContent   = "Sementes de Manga(2,0kg)"
    val4.textContent   = "R$ 38,90"
    vs4.onclick = function() {clickSeed('Manga')}
    //Resultados card 5
    desc5.textContent  = "15% off"
    fts5.setAttribute('src', product[0])
    txt5.textContent   = "Sementes de Café Arábica (1,5kg)"
    val5.textContent   = "R$ 35,70"
    vs5.onclick = function() {clickSeed('Café')}
    //Resultados card 6
    desc6.textContent  = "15% off"
    fts6.setAttribute('src', product[11])
    txt6.textContent   = "Mudas de Banana Prata(2,0kg)"
    val6.textContent   = "R$ 18,50"
    vs6.onclick = function() {clickSeed('Banana')}
    //Resultados card 7
    desc7.textContent  = "10% off"
    fts7.setAttribute('src', product[12])
    txt7.textContent   = "Sementes de Algodão(1,0kg)"
    val7.textContent   = "R$ 50,00"
    vs7.onclick = function() {clickSeed('Algodão')}
    //Resultados card 8
    desc8.textContent  = "10% off"
    fts8.setAttribute('src', product[13])
    txt8.textContent   = "Mudas de Cana-de-açúcar(1,0kg)"
    val8.textContent   = "R$ 49,90"
    vs8.onclick = function() {clickSeed('Cana-de-açúcar')}

}else if(json_solos == '"Argissolos"'){
    photo.setAttribute('src', image[1])
    names.textContent   = "Argissolo"
    texture.textContent = "Argilosa, com alguns granulos"
    color.textContent   = "Amarelo ou vermelho"
    season.textContent  = "O plantio é mais adequado na primavera"
    seed.textContent    = "Plantações de trigo, milho, arroz e aveia são mais indicadas"
    //Resultados card 1 
    desc.textContent  = "20% off"
    fts.setAttribute('src', product[8])
    txt.textContent   = "Sementes de Aveia(1,5kg)"
    val.textContent   = "R$ 35,90"
    vs.onclick = function() {clickSeed('Aveia')}
    //Resultado card 2 não foi alterado
    vs2.onclick = function() {clickSeed('Milho')}
    //Resultados card 3 não foi alterado
    vs3.onclick = function() {clickSeed('Arroz')}
    vs3.onclick = function() {clickSeed('Arroz')}
    //Resultados card 4
    desc4.textContent  = "7% off"
    fts4.setAttribute('src', product[14])
    txt4.textContent   = "Sementes de Trigo(2,0kg)"
    val4.textContent   = "R$ 74,90"
    vs4.onclick = function() {clickSeed('Trigo')}
    //Resultados card 5
    desc5.textContent  = "15% off"
    fts5.setAttribute('src', product[15])
    txt5.textContent   = "Sementes de Lentilha(1,0kg)"
    val5.textContent   = "R$ 89,90"
    vs5.onclick = function() {clickSeed('Lentilha')}
    //Resultados card 6 não foi alterado
    vs6.onclick = function() {clickSeed('Uva')}
    //Resultados card 7 não foi alterado
    vs7.onclick = function() {clickSeed('Beterraba')}
    //Resultados card 8
    desc8.textContent  = "10% off"
    fts8.setAttribute('src', product[16])
    txt8.textContent   = "Sementes de Edamame(1,0kg)"
    val8.textContent   = "R$ 79,90"
    vs8.onclick = function() {clickSeed('Edamame')}
}else if(json_solos == '"Neossolos"'){
    photo.setAttribute('src', image[2])
    names.textContent   = "Neossolo"
    texture.textContent = "Arenosa, com pequenos grãos"
    color.textContent   = "Castanho escuro, escuro"
    season.textContent  = "O plantio é mais adequado na verão"
    seed.textContent    = "Plantações de arroz, algodão, abacaxi, milho e feijão são mais indicadas"
    //Resultados card 1 
    desc.textContent  = "20% off"
    fts.setAttribute('src', product[17])
    txt.textContent   = "Sementes de Feijão(2,0kg)"
    val.textContent   = "R$ 15,90"
    vs.onclick = function() {clickSeed('Feijão')}
    //Resultado card 2 não foi alterado
    vs2.onclick = function() {clickSeed('Milho')}
    //Resultados card 3 não for alterado
    vs3.onclick = function() {clickSeed('Arroz')}
    //Resultados card 4
    desc4.textContent  = "7% off"
    fts4.setAttribute('src', product[18])
    txt4.textContent   = "Sementes de Abacaxi(1,0kg)"
    val4.textContent   = "R$ 28,90"
    vs4.onclick = function() {clickSeed('Abacaxi')}
    //Resultados card 5
    desc5.textContent  = "15% off"
    fts5.setAttribute('src', product[15])
    txt5.textContent   = "Sementes de Lentilha(1,0kg)"
    val5.textContent   = "R$ 89,90"
    vs5.onclick = function() {clickSeed('Lentilha')}
    //Resultados card 6
    desc6.textContent  = "15% off"
    fts6.setAttribute('src', product[11])
    txt6.textContent   = "Mudas de Banana Prata(2,0kg)"
    val6.textContent   = "R$ 18,50"
    vs6.onclick = function() {clickSeed('Banana')}
    //Resultados card 7
    desc7.textContent  = "10% off"
    fts7.setAttribute('src', product[12])
    txt7.textContent   = "Sementes de Algodão(1,0kg)"
    val7.textContent   = "R$ 50,00"
    vs7.onclick = function() {clickSeed('Algodão')}
    //Resultados card 8 não foi alterado
    vs8.onclick = function() {clickSeed('Laranja')}
}else if(json_solos == '"Cambissolos"'){
    photo.setAttribute('src', image[3])
    names.textContent   = "Cambissolo"
    texture.textContent = "Arenosa, e fina"
    color.textContent   = "Amarelo ou castanho"
    season.textContent  = "O plantio é mais adequado na primavera"
    seed.textContent    = "Plantações de arroz são mais indicadas"
    //Resultados card 1 
    desc.textContent  = "15% off"
    fts.setAttribute('src', product[1])
    txt.textContent   = "Sementes de Milho (1,0kg)"
    val.textContent   = "R$ 31,98"
    vs.onclick = function() {clickSeed('Milho')}
    //Resultado card 2
    desc2.textContent  = "10% off"
    fts2.setAttribute('src', product[2])
    txt2.textContent   = "Sementes de Arroz (10,0kg)"
    val2.textContent   = "R$ 16,98"
    vs2.onclick = function() {clickSeed('Arroz')}
    //Resultados card 3
    desc3.textContent  = "7% off"
    fts3.setAttribute('src', product[3])
    txt3.textContent   = "Sementes de Girassol (2,5kg)"
    val3.textContent   = "R$ 70,00"
    vs3.onclick = function() {clickSeed('Girassol')}
    //Resultados card 4
    desc4.textContent  = "7% off"
    fts4.setAttribute('src', product[10])
    txt4.textContent   = "Sementes de Manga(2,0kg)"
    val4.textContent   = "R$ 38,90"
    vs4.onclick = function() {clickSeed('Manga')}
    //Sem resultados card 5, 6, 7 e 8
    vs5.onclick = function() {clickSeed('Maçã')}
    vs6.onclick = function() {clickSeed('Uva')}
    vs7.onclick = function() {clickSeed('Beterraba')}
    vs8.onclick = function() {clickSeed('Laranja')}
    sell.style.display     = "none"
    container.style.height = "600px"
}else if(json_solos == '"Chernossolos"'){
    photo.setAttribute('src', image[4])
    names.textContent   = "Chernossolos"
    texture.textContent = "Argilosa"
    color.textContent   = "Escuro"
    season.textContent  = "O plantio é mais adequado no inverno"
    seed.textContent    = "Plantações de trigo, milho e sorgo são mais indicadas"
    //Resultados card 1 
    desc.textContent  = "15% off"
    fts.setAttribute('src', product[1])
    txt.textContent   = "Sementes de Milho (1,0kg)"
    val.textContent   = "R$ 31,98"
    vs.onclick = function() {clickSeed('Milho')}
    //Resultado card 2
    desc2.textContent  = "7% off"
    fts2.setAttribute('src', product[9])
    txt2.textContent   = "Sementes de Soja(1,0kg)"
    val2.textContent   = "R$ 75,60"
    vs2.onclick = function() {clickSeed('Soja')}
    //Resultados card 3
    desc3.textContent  = "7% off"
    fts3.setAttribute('src', product[14])
    txt3.textContent   = "Sementes de Trigo(2,0kg)"
    val3.textContent   = "R$ 74,90"
    vs3.onclick = function() {clickSeed('Trigo')}
    //Sem resultados card 4, 5, 6, 7 e 8
    vs4.onclick = function() {clickSeed('Girassol')}
    vs5.onclick = function() {clickSeed('Maçã')}
    vs6.onclick = function() {clickSeed('Uva')}
    vs7.onclick = function() {clickSeed('Beterraba')}
    vs8.onclick = function() {clickSeed('Laranja')}
    cardfiv.style.display  = "none"
    sell.style.display     = "none"
    container.style.height = "600px"
}else if(json_solos == '"Espodossolos"'){
    photo.setAttribute('src', image[5])
    names.textContent   = "Espodossolos"
    texture.textContent = "Arenosa"
    color.textContent   = "Amarelo, cinza, escuro, vermelho"
    season.textContent  = "O plantio não é adequado"
    seed.textContent    = "Plantações não são indicadas neste tipo de solo"
    //Sem resultados
    item.style.display     = "none"
    cardfiv.style.display  = "none"
    sell.style.display     = "none"
    empty.style.display    = "block"
    container.style.height = "500px"
}else if(json_solos == '"Gleissolos"'){
    photo.setAttribute('src', image[6])
    names.textContent   = "Gleissolos"
    texture.textContent = "Argilosa"
    color.textContent   = "Cinza"
    season.textContent  = "O plantio é mais adequado na primavera"
    seed.textContent    = "Plantações de arroz são mais indicadas"
    //Resultados card 1 
    desc.textContent  = "15% off"
    fts.setAttribute('src', product[1])
    txt.textContent   = "Sementes de Milho (1,0kg)"
    val.textContent   = "R$ 31,98"
    vs.onclick = function() {clickSeed('Milho')}
    //Resultado card 2
    desc2.textContent  = "10% off"
    fts2.setAttribute('src', product[2])
    txt2.textContent   = "Sementes de Arroz (10,0kg)"
    val2.textContent   = "R$ 16,98"
    vs2.onclick = function() {clickSeed('Arroz')}
    //Resultados card 3 não foi alterado
    vs3.onclick = function() {clickSeed('Soja')}
    desc3.textContent  = "7% off"
    fts3.setAttribute('src', product[9])
    txt3.textContent   = "Sementes de Soja(1,0kg)"
    val3.textContent   = "R$ 75,60"
    //Sem resultados card 1, 4, 5, 6, 7 e 8
    cardfiv.style.display  = "none"
    sell.style.display     = "none"
    container.style.height = "600px"
}else{
    photo.setAttribute('src', image[0])
    names.textContent = "Name isn't defined"
    texture.textContent = "Texture isn't defined"
    color.textContent   = "Color isn't defined"
    season.textContent   = "Season isn't defined"
    seed.textContent   = "Seed isn't defined"
}
