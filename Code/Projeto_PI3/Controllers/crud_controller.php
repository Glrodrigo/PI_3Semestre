<?php
    
    class CRUD {
        function create($conexao,$User){
            $sql = "INSERT INTO jogador ( `nome`, `cpf`, `nomejogo`, `descricao`, `horas`) ";
            $sql = $sql."VALUES ('".$User->nome."', ".$User->cpf.", '".$User->nomejogo."', '".$User->descricao ."', ".$User->horas.")";
            
            if(!mysqli_query($conexao,$sql)){
                echo "Error: " . $sql . "<br>" . mysqli_error($conexao);
            }

        }

        function read($conexao) {
            $sql =  "SELECT * FROM jogador;";
            $result = mysqli_query($conexao,$sql);

            //Verifica se foi feito a conexão com o banco
            if(!$result){
                echo "Error: " . $sql . "<br>" . mysqli_error($conexao);
            }else{
                return $result;
            }

            // Fechar a conexão
            mysqli_close($conexao);
        }

        function procedure($conexao,$User) {
            if(isset($_POST['lupa'])){
                $User->qtde = $_POST['lupa'];
                //Comando chama a procedure
                $result = mysqli_query($conexao, "CALL Selecionar_jogador('".$User->qtde."');");  
            }
            

            //Verifica se foi feito a conexão com o banco
            if(!$result){
                echo "Error: " . $result . "<br>" . mysqli_error($conexao);
            }else{
                return $result;
            }

            // Fechar a conexão
            mysqli_close($conexao);
        }

        function update($conexao,$User) {
            $sql = "UPDATE jogador SET horas = ('".$User->horas ."') WHERE cpf = ('".$User->cpf ."')";
            $verif = "SELECT count(*) resultado FROM jogador WHERE cpf = ('".$User->cpf ."')";
            $result = mysqli_query($conexao,$sql);

            //Verifica se foi feito a conexão com o banco
            if(!$result){
                echo "Error: " . $sql . "<br>" . mysqli_error($conexao);
            }else{
                return $result;
            }
            
            // Fechar a conexão
            mysqli_close($conexao);
        }

        function delete($conexao,$User) {
            $sql = "Delete from jogador WHERE cpf = ('".$User->cpf ."')";
            $result = mysqli_query($conexao,$sql);


            //Verifica se foi feito a conexão com o banco
            if(!$result){
                echo "Error: " . $sql . "<br>" . mysqli_error($conexao);
            }else{
                return $result;
            }

            // Fechar a conexão
            mysqli_close($conexao);
        }
    }
?>