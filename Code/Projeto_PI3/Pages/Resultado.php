<?php
    include 'conexao.php';
    include '../Class/user.php';
    include '../Controllers/crud_controller.php';

    $User = new User();
    $crud = new CRUD();

    $User->qtde = $_POST['lupa'];
    $result = $crud->procedure($conexao,$User);
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
    rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" 
    crossorigin="anonymous">
    <link rel="stylesheet" href="../Style/style.css">
    <title>Resultado</title>
</head>
<body class="searching">
    <header>
    <div class="nav">
            <a href="../index.html"><img src="../Images/Icon.jpg"></a>
        </div>
        <div class="nav-click">
            <ul>
                <a href="#"><li>Análise do solo</li></a>
                <a href="Pesquisar.html"><li>Marketplace</li></a>
                <a href="#"><li>Sobre</li></a>
                <li id="perf" class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="../Images/Prof.jpg"></a>
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Login</a></li>
                    <li><a class="dropdown-item" href="#">Cadastre-se</a></li>
                    <li><a class="dropdown-item" href="#">Logout</a></li>
                  </ul>
                </li>
            </ul>
        </div>
    </header>
    <main class="loupe2">
        <section class="container">
            <section class="item">
                <div id="name">

                </div>
                <section class="find">
                    <form method="POST" action="Resultado.php">
                      <input type="text" id="find-text" name="lupa" placeholder="Pesquisar..." name="Search" required autofocus/>
                      <input type="submit" id="buttonS" value=""/>
                    </form>
                </section>
            </section>
            <section id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                <div class="carousel-indicators">
                  <button id="buttonD" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button id="buttonD" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button id="buttonD" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                  <div id="img1" class="carousel-item active">
                    <img src="../Images/PC.jpg" class="" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                      <h2>A praticidade <br></h2>
                      <p id="p1" >que você precisa!</p>
                    </div>
                  </div>
                  <div id="img1" class="carousel-item">
                    <img src="../Images/Pap.jpg" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                      <h2>Obtendo resultado<br></h2>
                      <p id="p1">para o seu negócio!</p>
                    </div>
                  </div>
                  <div id="img1" class="carousel-item">
                    <img src="../Images/Cred.jpg" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                      <h2>Economia financeira<br></h2>
                      <p id="p1" >e qualidade de vida</p>
                    </div>
                  </div>
                </div>
                <button id="buttonC3" class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button id="buttonC4" class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
            </section>
            <section class="result">
                <div class="paper">
                    <img src="../Images/Paper.jpg">
                </div>
                <div class="pencil">
                    <img src="../Images/Pencil.jpg">
                </div>
                <p> 
                    <table>
                        <tr>
                            <td id="nameA">CPF</td>
                            <td id="nameB">NOME</td>
                            <td id="nameC">JOGO</td>
                            <td id="nameD">HORAS</td>
                        </tr>
                        <?php while($linha = mysqli_fetch_assoc($result)){ ?>
                        <tr>
                            <td> <?php echo $linha["cpf"]; ?> </td> 
                            <td> <?php echo $linha["nome"]; ?> </td>
                            <td> <?php echo $linha["nomejogo"]; ?> </td>
                            <td> <?php echo $linha["horas"]; ?> </td>
                            <td id="btnR"> <a href="#" id="buttonR" class="btn btn-primary" >Comprar</a> </td>                      
                        </tr>
                        <?php } ?>
                    </table>        
                    
                    <br><br>
                </p>   
            </section>                              
        </section>
    </main>
    <footer class='centro'>Copyright &copy; 2022 Development Fatec</footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" 
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
    crossorigin="anonymous"></script>
    <script src="../Scripts/Script.js"></script>
</body>
</html>