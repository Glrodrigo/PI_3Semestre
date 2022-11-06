<?php
    //Parâmetros como lugar do banco, usuário e senha
    $conexao = mysqli_connect('localhost','root','');
    //Configurar para inclusão e exibição de acentos
    mysqli_set_charset($conexao, "utf8");
    //Acessa este banco nesta conexão 
    $banco = mysqli_select_db($conexao, 'registro');
    //Se não conectar, aparece o motivo
    if(!$banco){
        die("Erro de conexão com o banco -> ".mysqli_error());
    }
?>