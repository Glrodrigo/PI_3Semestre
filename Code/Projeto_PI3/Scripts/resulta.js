const json_solos = 'Latossolos'
const image      = ['../Images/Lato.png', '../Images/Argi.jpg', '../Images/Neo.jpg', 
'../Images/Camb.jpg', '../Images/Cherno.jpg', '../Images/Espo.jpg', '../Images/Gle.jpeg']
//Imagem dos cards
const product    = ['../Images/Cafe.jpg', '../Images/Milho.jpg', '../Images/Arroz.jpg', '../Images/Gira.jpg', '../Images/Maca.jpg', 
'../Images/Uva.jpg', '../Images/Beterraba.jpg', "../Images/Laranja.jpg", "../Images/Aveia.jpg", "../Images/Soja.jpg", 
"../Images/Manga.jpg", "../Images/Banana.jpg"]

//Resultados solo
let img          = document.querySelector('#photo')
let names        = document.querySelector('h4')
let texture      = document.querySelector('#textI')
let color        = document.querySelector('#textII')
let season       = document.querySelector('#textIII')
let seed         = document.querySelector('#textIV')

//Resultados card 1
let desc = document.querySelector("#card_descI")
let fts  = document.querySelector("#ft_cardI")
let txt  = document.querySelector("#txt_cardI")
let val  = document.querySelector("#value_cardI")
//Resultados card 2
let desc2 = document.querySelector("#card_descII")
let fts2  = document.querySelector("#ft_cardII")
let txt2  = document.querySelector("#txt_cardII")
let val2  = document.querySelector("#value_cardII")
//Resultados card 3
let desc3 = document.querySelector("#card_descIII")
let fts3  = document.querySelector("#ft_cardIII")
let txt3  = document.querySelector("#txt_cardIII")
let val3  = document.querySelector("#value_cardIII")
//Resultados card 4
let desc4 = document.querySelector("#card_descIV")
let fts4  = document.querySelector("#ft_cardIV")
let txt4  = document.querySelector("#txt_cardIV")
let val4  = document.querySelector("#value_cardIV")
//Resultados card 5
let desc5 = document.querySelector("#card_descV")
let fts5  = document.querySelector("#ft_cardV")
let txt5  = document.querySelector("#txt_cardV")
let val5  = document.querySelector("#value_cardV")

if(json_solos == 'Latossolos'){
    //Resultados solo
    photo.setAttribute('src', image[0])
    names.textContent   = "Latossolos"
    texture.textContent = "Argilosa, com alguns granulos"
    color.textContent   = "Castanho ou vermelho"
    season.textContent  = "O plantio é mais adequado no inverno"
    seed.textContent    = "Plantações de aveia, milho e soja são mais indicadas"
    //Resultados card 1 
    desc.textContent  = "20% off"
    fts.setAttribute('src', product[8])
    txt.textContent   = "Sementes de Aveia(1,5kg)"
    val.textContent   = "R$ 35,90"
    //Resultado card 2 não foi alterado
    //Resultados card 3
    desc3.textContent  = "7% off"
    fts3.setAttribute('src', product[9])
    txt3.textContent   = "Sementes de Soja(1,0kg)"
    val3.textContent   = "R$ 75,60"
    //Resultados card 4
    desc4.textContent  = "7% off"
    fts4.setAttribute('src', product[10])
    txt4.textContent   = "Sementes de Manga(5,0kg)"
    val4.textContent   = "R$ 75,60"
    //Resultados card 5
    desc5.textContent  = "15% off"
    fts5.setAttribute('src', product[11])
    txt5.textContent   = "Sementes de Banana(2,0kg)"
    val5.textContent   = "R$ 18,50"
}else if(json_solos == 'Argissolo'){
    photo.setAttribute('src', image[1])
    names.textContent   = "Argissolo"
    texture.textContent = "Argilosa, com alguns granulos"
    color.textContent   = "Amarelo ou vermelho"
    season.textContent  = "O plantio é mais adequado..."
    seed.textContent    = "Plantações de... são mais indicadas"
}else if(json_solos == 'Neossolo'){
    photo.setAttribute('src', image[2])
    names.textContent   = "Neossolo"
    texture.textContent = "Arenosa, com pequenos grãos"
    color.textContent   = "Castanho escuro, escuro"
    season.textContent  = "O plantio é mais adequado..."
    seed.textContent    = "Plantações de... são mais indicadas"
}else if(json_solos == 'Cambissolo'){
    photo.setAttribute('src', image[3])
    names.textContent   = "Cambissolo"
    texture.textContent = "Arenosa, e fina"
    color.textContent   = "Amarelo ou castanho"
    season.textContent  = "O plantio é mais adequado..."
    seed.textContent    = "Plantações de... são mais indicadas"
}else if(json_solos == 'Chernossolos'){
    photo.setAttribute('src', image[4])
    names.textContent   = "Chernossolos"
    texture.textContent = "Argilosa"
    color.textContent   = "Escuro"
    season.textContent  = "O plantio é mais adequado..."
    seed.textContent    = "Plantações de... são mais indicadas"
}else if(json_solos == 'Espodossolos'){
    photo.setAttribute('src', image[5])
    names.textContent   = "Espodossolos"
    texture.textContent = "Arenosa"
    color.textContent   = "Amarelo, cinza, escuro, vermelho"
    season.textContent  = "O plantio é mais adequado..."
    seed.textContent    = "Plantações de... são mais indicadas"
}else if(json_solos == 'Gleissolos'){
    photo.setAttribute('src', image[6])
    names.textContent   = "Gleissolos"
    texture.textContent = "Argilosa"
    color.textContent   = "Cinza"
    season.textContent  = "O plantio é mais adequado..."
    seed.textContent    = "Plantações de... são mais indicadas"
}else{
    photo.setAttribute('src', image[0])
    names.textContent = "Name isn't defined"
    texture.textContent = "Texture isn't defined"
    color.textContent   = "Color isn't defined"
    season.textContent   = "Season isn't defined"
    seed.textContent   = "Seed isn't defined"
}
