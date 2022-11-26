var respostas_esc = {}

function cidade(){
    var var1 = document.getElementsByName('cidade')[0].value
    console.log('o valor digitado é: '+var1);
    chave = "city"
    respostas_esc[chave] = var1
    // Armazena no LocalStorage
    localStorage.setItem('respostas_esc', JSON.stringify(respostas_esc));  
}

// Obtém do LocalStorage
var objSave = localStorage.getItem('respostas_esc');

//console.log('objSave: ', JSON.parse(objSave));