<!DOCTYPE html>
<html>
<head>
    <title>Tolles RTS Game</title>
    <meta charset="utf-8"/>
    <script src="https://cdn.jsdelivr.net/npm/phaser@3.15.1/dist/phaser-arcade-physics.min.js"></script>
    <link rel="stylesheet" type="text/css" href="styles.css" />
    <link href="https://fonts.googleapis.com/css2?family=Teko&display=swap" rel="stylesheet">
</head>
<body>

 
    <header>
        <div class= nav--container>
            <nav>
                <span class="temp--logo">RTS<spanc class="logocolor">Game</span></span>
                    <ul>
                        <li>
                            <div class="gameinfo--dropdown--container"><button class="nav--buttons dropDownButton" href="#">Spielinfo</button>
                                <div class="gameinfo--dropdown--content">
                                    <ul class="dropdown">
                                       <li> <a class="dropdown--content">Link 1</a><br></li><br>
                                       <li> <a class="dropdown--content">Link 2</a><br></li><br>
                                       <li> <a class="dropdown--content">Link 3</a><br></li><br>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li><a class="nav--buttons" href="#">Medien</a></li>
                        <li>
                            <div class="gameinfo--dropdown--container"><button class="nav--buttons dropDownButton" href="#">Neuigkeiten</button>
                                <div class="gameinfo--dropdown--content">
                                    <ul class="dropdown">
                                       <li> <a class="dropdown--content">Link 1</a><br></li><br>
                                       <li> <a class="dropdown--content">Link 2</a><br></li><br>
                                       <li> <a class="dropdown--content">Link 3</a><br></li><br>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li><a class="nav--buttons" href="#">Über</a></li>

                    </ul>
                    <a href="playnow.php" class="play--now--button">Jetzt spielen</a>
            </nav>
        </div>
    </header>
        <div class="registration--container">
            <div class="registration--formular--container">
                <div class="registration--formular--headline">
                    <span class="formular--headline">Registrieren</span>
                </div>
               
                <form class="form">
                    
                    <div class="form--row">
                    
                        <label>Benutzername</label>
                            
                                <input tabindex="1" type="text" class="form-control" placeholder="Benutzername">
                    
                    </div>
                   
                    <div class="form--row">
                    
                        <label>Email</label>
                            
                                <input tabindex="2" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" class="form-control" placeholder="Email" >
                   
                    </div>
    
                     
                    <div class="form--row">
                    
                        <label>Passwort</label>
                            
                                <input tabindex="3" type="password" class="form-control" placeholder="Passwort" >
                    
                    </div>

                    <div class="form--row">
                    
                        <label>Passwort bestätigen</label>
                            
                                <input tabindex="4" type="password" class="form-control" placeholder="Passwort" >
                    
                    </div>

                            <button type="submit" class="btn submit--btn">Eingaben bestätigen</button>
                </form> 
            </div>
        </div>
    
</body>
</html>